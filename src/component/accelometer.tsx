import React, { useState, useEffect } from 'react';

const AccelerometerComponent: React.FC = () => {
  const [acceleration, setAcceleration] = useState({ x: 0, y: 0, z: 0 });

  useEffect(() => {
    const handleMotionEvent = (event: DeviceMotionEvent) => {
      if (event.accelerationIncludingGravity) {
        const { accelerationIncludingGravity } = event;
        setAcceleration({
          x: accelerationIncludingGravity.x as number,
          y: accelerationIncludingGravity.y as number,
          z: accelerationIncludingGravity.z as number
        });
      }
    };

    window.addEventListener('devicemotion', handleMotionEvent);

    return () => {
      window.removeEventListener('devicemotion', handleMotionEvent);
    };
  }, []);

  return (
    <div>
      <h2>Accelerometer Data:</h2>
      <p>X: {acceleration.x.toFixed(2)}</p>
      <p>Y: {acceleration.y.toFixed(2)}</p>
      <p>Z: {acceleration.z.toFixed(2)}</p>
    </div>
  );
};

export default AccelerometerComponent;
