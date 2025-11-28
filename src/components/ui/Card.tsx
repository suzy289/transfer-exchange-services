'use client';

import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
}

export default function Card({ children, className, hover = false, delay = 0 }: CardProps) {
  return (
    <div
      className={cn(
        'bg-white rounded-xl shadow-lg p-6 border border-gray-100 transition-all duration-300',
        hover && 'hover:shadow-2xl hover:-translate-y-1 hover:border-primary/30',
        className
      )}
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}


