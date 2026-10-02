import React, { type ReactNode } from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';

type HeadingTag = 'h1' | 'h2' | 'h3';

type AnimatedHeadingProps = {
  as?: HeadingTag;
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
} & Omit<HTMLMotionProps<'h1'>, 'children' | 'initial' | 'animate' | 'whileInView'>;

const ease = [0.23, 1, 0.32, 1] as const;

export function AnimatedHeading({
  as = 'h2',
  children,
  className,
  delay = 0,
  duration = 0.55,
  ...rest
}: AnimatedHeadingProps) {
  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.45 }}
      transition={{ duration, delay, ease }}
      {...rest}>
      
      {children}
    </MotionTag>);

}
