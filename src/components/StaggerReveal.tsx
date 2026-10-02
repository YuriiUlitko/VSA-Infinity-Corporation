import React, { type ElementType, type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useIsDesktop } from '../hooks/useIsDesktop';

const ease = [0.23, 1, 0.32, 1] as const;

type StaggerRevealProps = {
  children: ReactNode;
  index: number;
  className?: string;
  as?: ElementType;
  /** Stagger step in seconds */
  step?: number;
};

export function StaggerReveal({
  children,
  index,
  className,
  as: Tag = 'div',
  step = 0.12
}: StaggerRevealProps) {
  const isDesktop = useIsDesktop();

  return (
    <Tag className={className}>
      <motion.div
        className="h-full w-full"
        initial={isDesktop ? { opacity: 0, y: 36 } : { opacity: 0, x: -36 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{
          duration: 0.5,
          delay: index * step,
          ease
        }}>
        
        {children}
      </motion.div>
    </Tag>);

}
