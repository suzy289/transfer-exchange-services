'use client';

import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className, hover = false }: CardProps) {
  return (
    <div
      className={cn(
        'bg-white rounded-lg shadow-lg p-6',
        hover && 'hover:shadow-xl transition-shadow duration-300',
        className
      )}
    >
      {children}
    </div>
  );
}


