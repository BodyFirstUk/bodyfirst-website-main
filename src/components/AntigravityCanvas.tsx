import { useEffect, useRef } from 'react';

interface Particle {
    x: number;
    y: number;
    baseX: number;
    baseY: number;
    vx: number;
    vy: number;
    size: number;
    opacity: number;
    type: 'grain' | 'bubble';
    hue?: number;
    lightness?: number;
}

interface AntigravityCanvasProps {
    position?: 'fixed' | 'absolute';
    className?: string;
}

const AntigravityCanvas = ({ position = 'fixed', className = '' }: AntigravityCanvasProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const particlesRef = useRef<Particle[]>([]);
    const mouseRef = useRef({ x: -1000, y: -1000, prevX: -1000, prevY: -1000 });
    const avoidAreasRef = useRef<DOMRect[]>([]);
    const animationFrameRef = useRef<number>(0);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Scan for areas to avoid (cards, sections with text)
        const updateAvoidAreas = () => {
            const areas: DOMRect[] = [];
            // Select elements that should repel particles
            const elements = document.querySelectorAll('.card, h1, h2, .glass-card, .avoid-particles');
            elements.forEach(el => {
                const rect = el.getBoundingClientRect();
                // If we are in absolute mode, we need to map the avoid rects to the canvas coordinate space
                if (position === 'absolute' && canvas.parentElement) {
                    const canvasRect = canvas.getBoundingClientRect();
                    areas.push({
                        ...rect,
                        left: rect.left - canvasRect.left,
                        right: rect.right - canvasRect.left,
                        top: rect.top - canvasRect.top,
                        bottom: rect.bottom - canvasRect.top,
                        x: rect.x - canvasRect.left,
                        y: rect.y - canvasRect.top,
                    } as DOMRect);
                } else {
                    areas.push(rect);
                }
            });
            avoidAreasRef.current = areas;
        };

        // Set canvas size
        const resizeCanvas = () => {
            if (position === 'absolute' && canvas.parentElement) {
                canvas.width = canvas.parentElement.offsetWidth;
                canvas.height = canvas.parentElement.offsetHeight;
            } else {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
            }
            updateAvoidAreas();
            initParticles();
        };

        // Initialize particles
        const initParticles = () => {
            const particles: Particle[] = [];
            const area = canvas.width * canvas.height;

            // High-density tiny grains (subtle)
            const grainCount = Math.floor(area / 4000);
            for (let i = 0; i < grainCount; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    baseX: Math.random() * canvas.width,
                    baseY: Math.random() * canvas.height,
                    vx: (Math.random() - 0.5) * 0.2,
                    vy: (Math.random() - 0.5) * 0.2,
                    size: Math.random() * 1.2 + 0.4,
                    opacity: Math.random() * 0.2 + 0.1,
                    type: 'grain',
                });
            }

            // Lower-density bubbles (premium look)
            const bubbleCount = Math.floor(area / 30000);
            for (let i = 0; i < bubbleCount; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    baseX: Math.random() * canvas.width,
                    baseY: Math.random() * canvas.height,
                    vx: (Math.random() - 0.5) * 0.3,
                    vy: (Math.random() - 0.5) * 0.3,
                    size: Math.random() * 12 + 4,
                    opacity: Math.random() * 0.2 + 0.05,
                    type: 'bubble',
                    hue: Math.random() * 40 + 190, // Blue-ish range for premium feel
                    lightness: Math.random() * 20 + 40,
                });
            }

            particlesRef.current = particles;
        };

        // Mouse move handler
        const handleMouseMove = (e: MouseEvent) => {
            mouseRef.current.prevX = mouseRef.current.x;
            mouseRef.current.prevY = mouseRef.current.y;

            if (position === 'absolute') {
                const rect = canvas.getBoundingClientRect();
                mouseRef.current.x = e.clientX - rect.left;
                mouseRef.current.y = e.clientY - rect.top;
            } else {
                mouseRef.current.x = e.clientX;
                mouseRef.current.y = e.clientY;
            }
        };

        // Mouse leave handler
        const handleMouseLeave = () => {
            mouseRef.current.x = -1000;
            mouseRef.current.y = -1000;
        };

        // Animation loop
        const animate = () => {
            if (!ctx || !canvas) return;

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const mouse = mouseRef.current;
            const mouseSpeed = Math.sqrt(
                Math.pow(mouse.x - mouse.prevX, 2) + Math.pow(mouse.y - mouse.prevY, 2)
            );

            particlesRef.current.forEach((particle) => {
                // Calculate distance to mouse
                const dx = particle.x - mouse.x;
                const dy = particle.y - mouse.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                const interactionRadius = 200;

                if (distance < interactionRadius && mouse.x > -500) { // Check if mouse is active (rough check)
                    const force = (1 - distance / interactionRadius) * 4;
                    const angle = Math.atan2(dy, dx);

                    // Radial repulsion
                    particle.vx += Math.cos(angle) * force;
                    particle.vy += Math.sin(angle) * force;

                    // Swirling effect
                    const swirl = (1 - distance / interactionRadius) * 1.2;
                    const tangentAngle = angle + Math.PI / 2;
                    particle.vx += Math.cos(tangentAngle) * swirl * (mouseSpeed * 0.1);
                    particle.vy += Math.sin(tangentAngle) * swirl * (mouseSpeed * 0.1);
                }

                // --- NEW: Avoidance Logic for Cards/Text ---
                avoidAreasRef.current.forEach(rect => {
                    // Check if particle is roughly near the rectangle
                    if (particle.x > rect.left - 50 && particle.x < rect.right + 50 &&
                        particle.y > rect.top - 50 && particle.y < rect.bottom + 50) {

                        // Calculate repulsion from rectangle center
                        const cx = rect.left + rect.width / 2;
                        const cy = rect.top + rect.height / 2;
                        const rdx = particle.x - cx;
                        const rdy = particle.y - cy;

                        // Stronger repulsion if inside the rect
                        const isInside = particle.x > rect.left && particle.x < rect.right &&
                            particle.y > rect.top && particle.y < rect.bottom;

                        const repelForce = isInside ? 0.5 : 0.1;
                        // Avoid division by zero
                        if (rect.width > 0) particle.vx += (rdx / rect.width) * repelForce;
                        if (rect.height > 0) particle.vy += (rdy / rect.height) * repelForce;
                    }
                });

                // Gentle drift
                particle.vx += (Math.random() - 0.5) * 0.01;
                particle.vy += (Math.random() - 0.5) * 0.01;

                // Subtle wind towards upper-right
                particle.vx += 0.01;
                particle.vy -= 0.005;

                // Apply damping
                particle.vx *= 0.96;
                particle.vy *= 0.96;

                // Return to base position (very weak, allows for drift)
                const baseDistX = particle.baseX - particle.x;
                const baseDistY = particle.baseY - particle.y;
                particle.vx += baseDistX * 0.0005;
                particle.vy += baseDistY * 0.0005;

                // Update position
                particle.x += particle.vx;
                particle.y += particle.vy;

                // Wrap around edges
                if (particle.x < -100) {
                    particle.x = canvas.width + 100;
                    particle.baseX = particle.x;
                }
                if (particle.x > canvas.width + 100) {
                    particle.x = -100;
                    particle.baseX = particle.x;
                }
                if (particle.y < -100) {
                    particle.y = canvas.height + 100;
                    particle.baseY = particle.y;
                }
                if (particle.y > canvas.height + 100) {
                    particle.y = -100;
                    particle.baseY = particle.y;
                }

                // Draw particle
                if (particle.type === 'grain') {
                    ctx.beginPath();
                    ctx.fillStyle = `rgba(100, 110, 140, ${particle.opacity})`;
                    ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                    ctx.fill();
                } else {
                    const hue = particle.hue || 200;
                    const lightness = particle.lightness || 50;

                    // Enhanced Glass Bubble
                    ctx.beginPath();
                    const gradient = ctx.createRadialGradient(
                        particle.x - particle.size * 0.3,
                        particle.y - particle.size * 0.3,
                        0,
                        particle.x,
                        particle.y,
                        particle.size
                    );
                    gradient.addColorStop(0, `hsla(${hue}, 70%, 90%, ${particle.opacity * 2})`);
                    gradient.addColorStop(1, `hsla(${hue}, 60%, ${lightness}%, ${particle.opacity})`);

                    ctx.fillStyle = gradient;
                    ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                    ctx.fill();

                    // Delicate stroke
                    ctx.strokeStyle = `hsla(${hue}, 60%, ${lightness}%, ${particle.opacity * 1.5})`;
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            });

            animationFrameRef.current = requestAnimationFrame(animate);
        };

        // Initialize
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseleave', handleMouseLeave);

        // Periodically update avoid areas (in case of dynamic layout)
        const interval = setInterval(updateAvoidAreas, 2000);

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseleave', handleMouseLeave);
            clearInterval(interval);
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, [position]);

    return (
        <canvas
            ref={canvasRef}
            className={`pointer-events-none ${position === 'absolute' ? 'absolute inset-0' : 'fixed inset-0'} ${className}`}
            style={{ zIndex: position === 'absolute' ? 0 : -1, background: 'transparent' }}
        />
    );
};

export default AntigravityCanvas;
