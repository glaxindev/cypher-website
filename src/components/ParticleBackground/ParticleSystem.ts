import { Particle } from './Particle';

export class ParticleSystem {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private particles: Particle[] = [];
  private animationId: number = 0;
  private readonly particleCount = 80;
  private readonly connectionDistance = 150;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d')!;
    this.init();
    this.handleResize();
  }

  private init() {
    this.particles = [];
    for (let i = 0; i < this.particleCount; i++) {
      this.particles.push(
        new Particle(
          Math.random() * this.canvas.width,
          Math.random() * this.canvas.height
        )
      );
    }
  }

  private handleResize = () => {
    const resizeObserver = new ResizeObserver(entries => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        this.canvas.width = width;
        this.canvas.height = height;
        this.renderFrame(); // Re-render on resize
      }
    });
    resizeObserver.observe(this.canvas);
  };

  private drawConnections() {
    for (let i = 0; i < this.particles.length; i++) {
      for (let j = i + 1; j < this.particles.length; j++) {
        const dx = this.particles[i].x - this.particles[j].x;
        const dy = this.particles[i].y - this.particles[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < this.connectionDistance) {
          const opacity = (1 - distance / this.connectionDistance) * 0.2;
          this.ctx.beginPath();
          this.ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
          this.ctx.lineWidth = 1;
          this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
          this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
          this.ctx.stroke();
        }
      }
    }
  }

  public renderFrame() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.particles.forEach(particle => {
      particle.update(this.canvas.width, this.canvas.height);
      particle.draw(this.ctx);
    });
    this.drawConnections();
  }

  public start() {
    const animate = () => {
      this.renderFrame();
      this.animationId = requestAnimationFrame(animate);
    };
    animate();
  }

  public destroy() {
    cancelAnimationFrame(this.animationId);
  }
}