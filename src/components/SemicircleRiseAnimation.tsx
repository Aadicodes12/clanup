"use client";

import React, { useEffect, useRef } from 'react';

interface SemicircleRiseAnimationProps {
  className?: string;
}

const SemicircleRiseAnimation: React.FC<SemicircleRiseAnimationProps> = ({ className }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let baseY = canvas.height * 0.75;
    let radius = 80;
    let rise = 0;
    let maxRise = 200;
    let speed = 2;

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // draw black baseline
      ctx.beginPath();
      ctx.moveTo(0, baseY);
      ctx.lineTo(canvas.width, baseY);
      ctx.strokeStyle = "black";
      ctx.lineWidth = 3;
      ctx.stroke();

      // gradient for semicircle
      let gradient = ctx.createRadialGradient(
        canvas.width / 2, baseY - rise,
        10,
        canvas.width / 2, baseY - rise,
        radius
      );
      gradient.addColorStop(0, "#ffffff");
      gradient.addColorStop(1, "#8a2be2"); // purple

      // draw semicircle
      ctx.beginPath();
      ctx.arc(
        canvas.width / 2,
        baseY - rise,
        radius,
        Math.PI,
        0
      );
      ctx.fillStyle = gradient;
      ctx.fill();

      // animate rise
      if (rise < maxRise) {
        rise += speed;
      }

      requestAnimationFrame(animate);
    }

    animate();

    return () => {
      // Cleanup if needed
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className={className}
    />
  );
};

export default SemicircleRiseAnimation;