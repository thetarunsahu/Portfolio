import { useState } from "react";

export function useMagneticHover(strength = 16) {
  const [style, setStyle] = useState({ transform: "translate3d(0, 0, 0)" });

  const onMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;

    const moveX = (x / rect.width) * strength;
    const moveY = (y / rect.height) * strength;
    setStyle({ transform: `translate3d(${moveX}px, ${moveY}px, 0)` });
  };

  const onMouseLeave = () => {
    setStyle({ transform: "translate3d(0, 0, 0)" });
  };

  return { style, onMouseMove, onMouseLeave };
}
