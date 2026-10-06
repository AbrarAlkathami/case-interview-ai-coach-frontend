"use client";

import { useState } from "react";

export default function Logo() {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div
      className="absolute top-4 left-1/2 -translate-x-1/2"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <svg
        viewBox="0 0 100 50"
        className={`
          h-8 w-16
          transition-all duration-300
          ${isHovering ? "text-red-500 scale-110" : "text-white scale-100"}
        `}
      >
        <path
          d="case-interview-ai-coach-fe/case-interview-coach-fe/public/logo.svg"
          fill="currentColor"
        />
      </svg>
    </div>
  );
}
