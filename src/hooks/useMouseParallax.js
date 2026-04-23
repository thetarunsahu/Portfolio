import { useState } from "react";

export function useMouseParallax(intensity = 8) {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const onMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;

    setRotation({
      x: py * -intensity,
      y: px * intensity,
    });
  };

  const onMouseLeave = () => setRotation({ x: 0, y: 0 });

  return { rotation, onMouseMove, onMouseLeave };
}
