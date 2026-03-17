import React from 'react';
import { motion } from 'motion/react';
import { departments } from '../data/departments';

export const ThematicBackground = ({ deptId }: { deptId: string }) => {
  const dept = departments.find(d => d.id === deptId);
  if (!dept) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Base Grid with Department Color */}
      <div
        className={`absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] bg-[size:40px_40px] ${dept.textColor}`}
      />

      {/* Floating Particles/Shapes */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => {
          const Icon = dept.bgElements[i % dept.bgElements.length];
          return (
            <motion.div
              key={i}
              initial={{
                x: Math.random() * 100 + "%",
                y: Math.random() * 100 + "%",
                opacity: 0,
                scale: 0.5
              }}
              animate={{
                y: [null, (Math.random() * 100) + "%"],
                opacity: [0, 0.15, 0],
                scale: [0.5, 1, 0.5],
                rotate: [0, 180]
              }}
              transition={{
                duration: 10 + Math.random() * 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className={`absolute ${dept.textColor}`}
            >
              <Icon size={100 + Math.random() * 200} strokeWidth={0.2} />
            </motion.div>
          );
        })}
      </div>

      {/* Large Focus Icon */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.05]">
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <dept.icon size={800} strokeWidth={0.1} className={dept.textColor} />
        </motion.div>
      </div>

      {/* Radial Glow */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] rounded-full blur-[200px] opacity-20 bg-current ${dept.textColor}`} />
    </div>
  );
};
