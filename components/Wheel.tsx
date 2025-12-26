'use client';

import { useEffect, useRef } from 'react';
import styles from './Wheel.module.css';

interface WheelProps {
  isSpinning?: boolean;
}

export default function Wheel({ isSpinning = false }: WheelProps) {
  const wheelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (wheelRef.current && isSpinning) {
      // Add spinning animation
      const duration = 2000 + Math.random() * 1000;
      wheelRef.current.style.animation = `spin ${duration}ms cubic-bezier(0.17, 0.67, 0.12, 0.99)`;
    } else if (wheelRef.current && !isSpinning) {
      // Reset animation when not spinning
      wheelRef.current.style.animation = 'none';
    }
  }, [isSpinning]);

  return (
    <div className={styles.wheelContainer}>
      <div ref={wheelRef} className={`${styles.wheel} ${isSpinning ? styles.spinning : ''}`}>
        <div className={styles.wheelInner}>
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className={styles.segment}
              style={{
                transform: `rotate(${i * 30}deg)`,
              }}
            />
          ))}
        </div>
        <div className={styles.center}>
          <div className={styles.centerDot} />
        </div>
        <div className={styles.pointer} />
      </div>
    </div>
  );
}

