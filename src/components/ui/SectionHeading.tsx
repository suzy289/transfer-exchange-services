'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: 'left' | 'center' | 'right';
  eyebrow?: string;
  theme?: 'light' | 'dark';
  subtitleClassName?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  className,
  align = 'center',
  eyebrow,
  theme = 'light',
  subtitleClassName,
}: SectionHeadingProps) {
  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  } as const;

  const justifyClasses = {
    left: 'justify-start',
    center: 'justify-center',
    right: 'justify-end',
  } as const;

  const subtitleMargin = {
    left: 'ml-0',
    center: 'mx-auto',
    right: 'ml-auto',
  } as const;

  const titleColor = theme === 'dark' ? 'text-white' : 'text-gray-900';
  const subtitleColor = theme === 'dark' ? 'text-white/80' : 'text-gray-600';

  const badgeText = eyebrow ?? title;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn('mb-16', className)}
    >
      <div className={cn('space-y-4', alignClasses[align])}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className={cn('inline-flex', justifyClasses[align])}
        >
          <span className="bg-yellow-400 text-white px-5 py-2 rounded-full font-bold text-sm shadow-md">
            {badgeText}
          </span>
        </motion.div>

        <h2 className={cn('text-3xl md:text-4xl font-bold leading-tight font-heading', titleColor)}>
          {title}
        </h2>

        {subtitle && (
          <p
            className={cn(
              'text-lg md:text-xl max-w-3xl',
              subtitleColor,
              subtitleMargin[align],
              subtitleClassName,
            )}
          >
            {subtitle}
          </p>
        )}

        <div className={cn('flex items-center gap-3', justifyClasses[align])}>
          <span className="inline-block h-3 w-3 rounded-full bg-primary/90" />
          <span className="inline-flex h-0.5 w-20 rounded-full bg-primary/50" />
          <span className="inline-block h-2 w-2 rounded-full bg-primary/40" />
        </div>
      </div>
    </motion.div>
  );
}

