import { useEffect, useRef } from 'react';

function ParticlesBackground() {
  const canvasRef = useRef(null);
  const isVisibleRef = useRef(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    // Pause when hero is out of view (huge performance boost!)
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );
    observer.observe(canvas);

    // Responsive particle count (max 45 for desktop, 22 for mobile)
    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 22 : 45;
    const maxDistance = isMobile ? 90 : 120;
    const maxDistanceSq = maxDistance * maxDistance;

    const mouse = { x: -1000, y: -1000, radius: 100 };

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener('resize', handleResize, { passive: true });
    const parent = canvas.parentElement;
    parent?.addEventListener('mousemove', handleMouseMove, { passive: true });
    parent?.addEventListener('mouseleave', handleMouseLeave, { passive: true });

    // Predefined stylish color palette
    const colors = [
      'rgba(99, 102, 241, ', // Indigo
      'rgba(139, 92, 246, ', // Violet
      'rgba(6, 182, 212, ',  // Cyan
    ];

    class Particle {
      constructor() {
        this.reset(true);
      }

      reset(initial = false) {
        this.x = initial ? Math.random() * width : Math.random() < 0.5 ? 0 : width;
        this.y = Math.random() * height;
        this.size = Math.random() * 2 + 1;
        this.baseColor = colors[Math.floor(Math.random() * colors.length)];
        this.opacity = Math.random() * 0.5 + 0.3;
        this.vx = (Math.random() - 0.5) * 0.6;
        this.vy = (Math.random() - 0.5) * 0.6;
        this.pulse = Math.random() * Math.PI;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.pulse += 0.02;

        if (this.x < 0 || this.x > width) this.vx = -this.vx;
        if (this.y < 0 || this.y > height) this.vy = -this.vy;

        // Subtle mouse push
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distSq = dx * dx + dy * dy;
        if (distSq < mouse.radius * mouse.radius) {
          const dist = Math.sqrt(distSq);
          const force = (mouse.radius - dist) / mouse.radius;
          this.x -= (dx / dist) * force * 3;
          this.y -= (dy / dist) * force * 3;
        }
      }

      draw() {
        const dynamicOpacity = this.opacity * (0.8 + 0.2 * Math.sin(this.pulse));
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `${this.baseColor}${dynamicOpacity})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = `${this.baseColor}0.8)`;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    const particles = Array.from({ length: particleCount }, () => new Particle());

    const render = () => {
      if (isVisibleRef.current) {
        ctx.clearRect(0, 0, width, height);

        // Update & Draw particles
        for (let i = 0; i < particles.length; i++) {
          particles[i].update();
          particles[i].draw();
        }

        // Draw connections (optimized)
        for (let i = 0; i < particles.length; i++) {
          const p1 = particles[i];
          for (let j = i + 1; j < particles.length; j++) {
            const p2 = particles[j];
            const dx = p1.x - p2.x;
            const dy = p1.y - p2.y;
            const distSq = dx * dx + dy * dy;

            if (distSq < maxDistanceSq) {
              const alpha = (1 - distSq / maxDistanceSq) * 0.18;
              ctx.beginPath();
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.strokeStyle = `rgba(139, 92, 246, ${alpha})`;
              ctx.lineWidth = 0.8;
              ctx.stroke();
            }
          }
        }
      }
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      parent?.removeEventListener('mousemove', handleMouseMove);
      parent?.removeEventListener('mouseleave', handleMouseLeave);
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      style={{ opacity: 0.85 }}
    />
  );
}

export default ParticlesBackground;
