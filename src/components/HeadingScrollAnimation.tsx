import { useRef, useEffect, useState } from 'react';
import type { JSX, ReactNode } from 'react';

type AnimationVariant = 'fade-up' | 'slide-in-left' | 'slide-in-right' | 'scale' | 'blur-up';

interface HeadingScrollAnimationProps {
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  children: ReactNode;
  variant?: AnimationVariant;
  delay?: number;
  threshold?: number;
}

const HeadingScrollAnimation = ({
  as = 'h2',
  className = '',
  children,
  variant = 'fade-up',
  delay = 0,
  threshold = 0.3,
}: HeadingScrollAnimationProps) => {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Intersection Observer for visibility
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px' // Trigger slightly before element enters viewport
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  // Animation variants
  const getAnimationClasses = () => {
    const baseClasses = 'transition-all duration-[800ms] ease-out transform-gpu will-change-transform';

    const variants = {
      'fade-up': {
        visible: 'opacity-100 translate-y-0',
        hidden: 'opacity-0 translate-y-8'
      },
      'slide-in-left': {
        visible: 'opacity-100 translate-x-0',
        hidden: 'opacity-0 -translate-x-12'
      },
      'slide-in-right': {
        visible: 'opacity-100 translate-x-0',
        hidden: 'opacity-0 translate-x-12'
      },
      'scale': {
        visible: 'opacity-100 scale-100',
        hidden: 'opacity-0 scale-90'
      },
      'blur-up': {
        visible: 'opacity-100 translate-y-0 blur-0',
        hidden: 'opacity-0 translate-y-10 blur-sm'
      }
    };

    const animationState = inView ? variants[variant].visible : variants[variant].hidden;

    return `${baseClasses} ${animationState}`;
  };

  const Comp = as as any;

  return (
    <Comp
      ref={ref}
      className={`${getAnimationClasses()} ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </Comp>
  );
};

export default HeadingScrollAnimation;
