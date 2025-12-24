import { useRef, useEffect, useState } from 'react';
import type { JSX, ReactNode } from 'react';

type AnimationVariant = 'fade-up' | 'slide-in-left' | 'slide-in-right' | 'scale' | 'blur-up';

interface ScrollAnimationProps {
    as?: keyof JSX.IntrinsicElements;
    className?: string;
    children: ReactNode;
    variant?: AnimationVariant;
    delay?: number;
    threshold?: number;
    enableHover?: boolean; // If true, adds hover lift capabilities
}

const ScrollAnimation = ({
    as = 'div',
    className = '',
    children,
    variant = 'fade-up',
    delay = 0,
    threshold = 0.15, // Trigger slightly earlier than headings
}: ScrollAnimationProps) => {
    const ref = useRef<HTMLElement>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                // Once visible, keep it visible (don't fade out when scrolling up)
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.unobserve(element);
                }
            },
            {
                threshold,
                rootMargin: '0px 0px -50px 0px'
            }
        );

        observer.observe(element);

        return () => {
            observer.disconnect();
        };
    }, [threshold]);

    const getAnimationClasses = () => {
        const baseClasses = 'transition-all duration-[600ms] ease-out transform-gpu will-change-transform motion-reduce:transition-none motion-reduce:transform-none';

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
                hidden: 'opacity-0 scale-95'
            },
            'blur-up': {
                visible: 'opacity-100 translate-y-0 blur-0',
                hidden: 'opacity-0 translate-y-8 blur-sm'
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

export default ScrollAnimation;
