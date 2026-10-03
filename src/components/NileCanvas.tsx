import React, { useEffect, useRef } from 'react';

interface NileCanvasProps {
  round: number;
  totalRounds: number;
  locationName: string;
}

export const NileCanvas: React.FC<NileCanvasProps> = ({ round, totalRounds, locationName }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let waveOffset = 0;

    const render = () => {
      const width = canvas.width;
      const height = canvas.height;

      // 1. Sky & Desert Sunset gradient
      // Sky changes from dawn (early rounds) to bright sun (mid) to golden coronation glow (round 18-20)
      const skyGradient = ctx.createLinearGradient(0, 0, 0, height * 0.65);
      if (round <= 5) {
        // Dawn in Upper Egypt
        skyGradient.addColorStop(0, '#f97316');
        skyGradient.addColorStop(0.4, '#fbbf24');
        skyGradient.addColorStop(1, '#fef08a');
      } else if (round <= 15) {
        // Blazing Egyptian Sun
        skyGradient.addColorStop(0, '#38bdf8');
        skyGradient.addColorStop(0.5, '#bae6fd');
        skyGradient.addColorStop(1, '#fde68a');
      } else {
        // Mystical Sunset at Giza
        skyGradient.addColorStop(0, '#7c2d12');
        skyGradient.addColorStop(0.3, '#c2410c');
        skyGradient.addColorStop(0.7, '#f59e0b');
        skyGradient.addColorStop(1, '#fef3c7');
      }
      ctx.fillStyle = skyGradient;
      ctx.fillRect(0, 0, width, height * 0.65);

      // 2. Sun / Re Disc
      ctx.save();
      ctx.beginPath();
      const sunX = width * 0.8;
      const sunY = height * 0.22;
      const sunRadius = 26;
      ctx.arc(sunX, sunY, sunRadius, 0, Math.PI * 2);
      ctx.fillStyle = '#fbbf24';
      ctx.shadowColor = '#f59e0b';
      ctx.shadowBlur = 25;
      ctx.fill();

      // Winged sun rays / halo
      ctx.lineWidth = 2;
      ctx.strokeStyle = 'rgba(251, 191, 36, 0.4)';
      ctx.beginPath();
      ctx.arc(sunX, sunY, sunRadius + 8, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();

      // 3. Desert Dunes & Distant Pyramids / Mountains
      ctx.fillStyle = '#d97706';
      ctx.beginPath();
      ctx.moveTo(0, height * 0.55);
      ctx.quadraticCurveTo(width * 0.25, height * 0.46, width * 0.5, height * 0.54);
      ctx.quadraticCurveTo(width * 0.75, height * 0.6, width, height * 0.52);
      ctx.lineTo(width, height * 0.65);
      ctx.lineTo(0, height * 0.65);
      ctx.fill();

      // Distant Pyramids silhouette in later rounds
      if (round >= 10) {
        ctx.fillStyle = '#92400e';
        // Great Pyramid silhouette
        ctx.beginPath();
        const pyrBaseX = width * 0.62;
        const pyrBaseW = 75;
        const pyrH = 50;
        ctx.moveTo(pyrBaseX, height * 0.53);
        ctx.lineTo(pyrBaseX + pyrBaseW / 2, height * 0.53 - pyrH);
        ctx.lineTo(pyrBaseX + pyrBaseW, height * 0.53);
        ctx.closePath();
        ctx.fill();

        // Second Pyramid
        ctx.beginPath();
        const pyr2X = width * 0.71;
        const pyr2W = 60;
        const pyr2H = 40;
        ctx.moveTo(pyr2X, height * 0.53);
        ctx.lineTo(pyr2X + pyr2W / 2, height * 0.53 - pyr2H);
        ctx.lineTo(pyr2X + pyr2W, height * 0.53);
        ctx.closePath();
        ctx.fill();

        // Gilded Pyramidion if round 19 or 20
        if (round >= 19) {
          ctx.fillStyle = '#fef08a';
          ctx.beginPath();
          ctx.moveTo(pyrBaseX + pyrBaseW / 2 - 6, height * 0.53 - pyrH + 12);
          ctx.lineTo(pyrBaseX + pyrBaseW / 2, height * 0.53 - pyrH);
          ctx.lineTo(pyrBaseX + pyrBaseW / 2 + 6, height * 0.53 - pyrH + 12);
          ctx.closePath();
          ctx.fill();
        }
      }

      // Palm trees on riverbank
      const drawPalm = (px: number, py: number, scale: number) => {
        ctx.save();
        ctx.strokeStyle = '#78350f';
        ctx.lineWidth = 3 * scale;
        ctx.beginPath();
        ctx.moveTo(px, py);
        ctx.quadraticCurveTo(px + 6 * scale, py - 20 * scale, px + 8 * scale, py - 35 * scale);
        ctx.stroke();

        ctx.strokeStyle = '#15803d';
        ctx.lineWidth = 2 * scale;
        const crownX = px + 8 * scale;
        const crownY = py - 35 * scale;
        const angles = [-0.9, -0.5, -0.1, 0.3, 0.7, 1.1];
        angles.forEach(a => {
          ctx.beginPath();
          ctx.moveTo(crownX, crownY);
          const leafLen = 16 * scale;
          ctx.quadraticCurveTo(
            crownX + Math.cos(a) * (leafLen * 0.6),
            crownY - Math.sin(a) * 6 * scale,
            crownX + Math.cos(a) * leafLen,
            crownY + 8 * scale
          );
          ctx.stroke();
        });
        ctx.restore();
      };

      drawPalm(width * 0.12, height * 0.56, 1.1);
      drawPalm(width * 0.16, height * 0.57, 0.85);
      drawPalm(width * 0.88, height * 0.55, 1.2);
      drawPalm(width * 0.93, height * 0.57, 0.9);

      // 4. Nile River Water
      const waterTop = height * 0.58;
      const waterGrad = ctx.createLinearGradient(0, waterTop, 0, height);
      waterGrad.addColorStop(0, '#0284c7');
      waterGrad.addColorStop(0.4, '#0369a1');
      waterGrad.addColorStop(1, '#075985');
      ctx.fillStyle = waterGrad;
      ctx.fillRect(0, waterTop, width, height - waterTop);

      // Waves animation
      ctx.strokeStyle = 'rgba(224, 242, 254, 0.45)';
      ctx.lineWidth = 1.5;
      for (let y = waterTop + 10; y < height; y += 14) {
        ctx.beginPath();
        const speed = (y - waterTop) * 0.05;
        for (let x = 0; x <= width; x += 15) {
          const dy = Math.sin((x + waveOffset * speed * 8) * 0.03) * 2;
          if (x === 0) ctx.moveTo(x, y + dy);
          else ctx.lineTo(x, y + dy);
        }
        ctx.stroke();
      }

      // 5. The Royal Nile Felucca / Transport Barke
      // Moves smoothly across river with progress (round / totalRounds)
      const progress = Math.min(1, Math.max(0, (round - 1) / (totalRounds - 1)));
      // Center range from 20% to 75% width
      const boatX = width * 0.18 + progress * (width * 0.62);
      const boatY = waterTop + 24 + Math.sin(waveOffset * 0.08) * 3;

      ctx.save();
      // Hull of the Egyptian Barge
      ctx.fillStyle = '#b45309';
      ctx.beginPath();
      ctx.moveTo(boatX - 35, boatY);
      ctx.quadraticCurveTo(boatX - 45, boatY - 14, boatX - 50, boatY - 18); // Stern high curl
      ctx.lineTo(boatX - 42, boatY - 18);
      ctx.quadraticCurveTo(boatX - 38, boatY - 8, boatX - 30, boatY + 6);
      ctx.lineTo(boatX + 35, boatY + 6);
      ctx.quadraticCurveTo(boatX + 44, boatY - 8, boatX + 48, boatY - 18); // Prow high curl
      ctx.lineTo(boatX + 54, boatY - 18);
      ctx.quadraticCurveTo(boatX + 50, boatY - 12, boatX + 38, boatY);
      ctx.closePath();
      ctx.fill();
      ctx.strokeStyle = '#78350f';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Gold lotus / eye at prow
      ctx.fillStyle = '#fbbf24';
      ctx.beginPath();
      ctx.arc(boatX + 42, boatY - 10, 3, 0, Math.PI * 2);
      ctx.fill();

      // Cargo on barge (blocks of granite or treasure chest)
      ctx.fillStyle = '#e2e8f0';
      ctx.strokeStyle = '#94a3b8';
      ctx.lineWidth = 1;
      ctx.strokeRect(boatX - 16, boatY - 10, 14, 10);
      ctx.fillRect(boatX - 16, boatY - 10, 14, 10);
      ctx.strokeRect(boatX - 4, boatY - 12, 16, 12);
      ctx.fillRect(boatX - 4, boatY - 12, 16, 12);

      // Royal Mast
      ctx.strokeStyle = '#451a03';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(boatX + 5, boatY);
      ctx.lineTo(boatX + 5, boatY - 48);
      ctx.stroke();

      // Royal Linen Sail (curved with wind)
      ctx.fillStyle = '#fef3c7';
      ctx.beginPath();
      ctx.moveTo(boatX + 5, boatY - 46);
      ctx.quadraticCurveTo(boatX - 28, boatY - 32, boatX - 32, boatY - 12);
      ctx.quadraticCurveTo(boatX - 12, boatY - 16, boatX + 5, boatY - 18);
      ctx.closePath();
      ctx.fill();
      ctx.strokeStyle = '#d97706';
      ctx.lineWidth = 1;
      ctx.stroke();

      // Royal Pharaonic streamer / flag
      ctx.strokeStyle = '#dc2626';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(boatX + 5, boatY - 48);
      ctx.lineTo(boatX - 14 + Math.sin(waveOffset * 0.1) * 3, boatY - 50);
      ctx.stroke();

      // Water reflection ripple
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(boatX - 35, boatY + 8);
      ctx.lineTo(boatX + 35, boatY + 8);
      ctx.stroke();
      ctx.restore();

      // 6. Trail Milepost & Location Marker Overlay
      ctx.save();
      ctx.fillStyle = 'rgba(18, 13, 9, 0.75)';
      ctx.roundRect(12, 12, width - 24, 34, 6);
      ctx.fill();
      ctx.strokeStyle = '#b8860b';
      ctx.lineWidth = 1;
      ctx.stroke();

      ctx.font = 'bold 13px system-ui, sans-serif';
      ctx.fillStyle = '#fde68a';
      ctx.fillText(`📍 Station ${round} von ${totalRounds}: ${locationName}`, 22, 34);

      // Mini Progress bar on the right
      const barW = 120;
      const barH = 8;
      const barX = width - barW - 22;
      const barY = 25;
      ctx.fillStyle = '#451a03';
      ctx.roundRect(barX, barY, barW, barH, 4);
      ctx.fill();

      ctx.fillStyle = '#eab308';
      ctx.roundRect(barX, barY, Math.max(8, barW * progress), barH, 4);
      ctx.fill();
      ctx.restore();

      waveOffset += 0.05;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [round, totalRounds, locationName]);

  return (
    <div className="w-full relative rounded-xl overflow-hidden shadow-2xl border-2 border-amber-600/50 bg-stone-900">
      <canvas
        ref={canvasRef}
        width={860}
        height={220}
        className="w-full h-auto block select-none pointer-events-none"
      />
    </div>
  );
};
