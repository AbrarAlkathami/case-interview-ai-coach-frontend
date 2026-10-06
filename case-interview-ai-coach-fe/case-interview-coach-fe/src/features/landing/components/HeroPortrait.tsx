"use client";

import Image from "next/image";
import { useState } from "react";

export default function HeroPortrait() {
  const [position, setPosition] = useState({ x: 250, y: 250 });
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div
      className="relative h-125 w-125 overflow-hidden"
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();

        setPosition({
          x: event.clientX - rect.left,
          y: event.clientY - rect.top,
        });
      }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <Image
        src="/portrait.webp"
        fill
        alt="Portrait"
        className="object-contain object-bottom"
      />

      <Image
        src="/inside-my-mind.webp"
        fill
        alt=""
        className="object-contain object-bottom"
        style={{
          clipPath: isHovering
            ? `circle(70px at ${position.x}px ${position.y}px)`
            : "circle(0px)",
        }}
      />
    </div>
  );
}
