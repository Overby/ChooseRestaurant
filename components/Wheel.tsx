'use client';

import { useMemo } from 'react';
import styles from './Wheel.module.css';

interface WheelProps {
  isSpinning?: boolean;
  isContinuous?: boolean;
}

export default function Wheel({ isSpinning = false, isContinuous = false }: WheelProps) {
  // Memoize the final spin duration so it doesn't change on every render
  const finalSpinDuration = useMemo(() => {
    if (isSpinning && !isContinuous) {
      return 2000 + Math.random() * 1000;
    }
    return 2500;
  }, [isSpinning, isContinuous]);

  const animationStyle = isSpinning 
    ? (isContinuous 
        ? 'spinContinuous 2s linear infinite' 
        : `spin ${finalSpinDuration}ms cubic-bezier(0.17, 0.67, 0.12, 0.99)`)
    : 'none';

  return (
    <div className={styles.wheelContainer}>
      <div 
        className={styles.wheel}
        style={{
          animation: animationStyle
        }}
      >
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

