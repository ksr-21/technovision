import express, { Request, Response } from 'express';
import multer from 'multer';
import { google } from 'googleapis';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
import cors from 'cors';

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(cors());

// Ensure uploads directory exists
const uploadDir = 'uploads';
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// Multer configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const timestamp = Date.now();
    const ext = path.extname(file.originalname);
    cb(null, `${timestamp}${ext}`);
  },
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB
  },
  fileFilter: (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);

    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb(new Error('Only images (jpg, png) are allowed!'));
    }
  },
});

// Google Drive Auth
const SCOPES = ['https://www.googleapis.com/auth/drive.file'];

const auth = new google.auth.JWT({
  email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
  key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  scopes: SCOPES,
});

const drive = google.drive({ version: 'v3', auth });

const FOLDER_ID = process.env.GOOGLE_DRIVE_FOLDER_ID || '1e9wVpKvtGU0UcDH4biqVr2N61aiQLgbH';

// Routes
app.post('/upload', upload.single('screenshot'), async (req: Request, res: Response): Promise<any> => {
  if (!req.file) {
    return res.status(400).json({ success: false, error: 'No file uploaded' });
  }

  const filePath = req.file.path;

  try {
    // 1. Upload file to Google Drive
    const response = await drive.files.create({
      requestBody: {
        name: req.file.filename,
        parents: [FOLDER_ID],
      },
      media: {
        mimeType: req.file.mimetype,
        body: fs.createReadStream(filePath),
      },
      fields: 'id',
    });

    const fileId = response.data.id;

    if (!fileId) {
      throw new Error('Failed to get file ID from Google Drive');
    }

    // 2. Make file publicly accessible
    await drive.permissions.create({
      fileId: fileId,
      requestBody: {
        role: 'reader',
        type: 'anyone',
      },
    });

    // 3. Return success response
    res.json({
      success: true,
      fileId: fileId,
      fileUrl: `https://drive.google.com/file/d/${fileId}/view`,
    });
  } catch (error: any) {
    console.error('Upload Error:', error);
    res.status(500).json({
      success: false,
      error: error.message || 'Internal Server Error',
    });
  } finally {
    // 4. Clean up local temp file
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }
  }
});

// Basic Error Handling for Multer
app.use((err: any, req: Request, res: Response, next: any) => {
  if (err instanceof multer.MulterError) {
    if (err.code === 'LIMIT_FILE_SIZE') {
      return res.status(400).json({ success: false, error: 'File size too large (max 5MB)' });
    }
    return res.status(400).json({ success: false, error: err.message });
  } else if (err) {
    return res.status(400).json({ success: false, error: err.message });
  }
  next();
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
