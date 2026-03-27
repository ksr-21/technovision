import { LucideIcon } from 'lucide-react';
export interface Department {
  id: string;
  name: string;
  fullName: string;
  icon: LucideIcon;
  color: string;
  theme: string;
  borderColor: string;
  textColor: string;
  accentColor: string;
  accentBg: string;
  registrationFee: string | null;
  isTeamEvent: boolean;
  paymentScanner?: string;
  eventName: string;
  shortEventDescription: string;
  eventImage: string;
  description: string;
  rules?: string[];
  rounds?: string[];
  coordinators: {
    faculty: { name: string; phone: string; email: string }[];
    students: { name: string; phone: string; email: string }[];
  };
  bgElements: LucideIcon[];
}
