"use client";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [cursorBlob, setCursorBlob] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorBlob({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="pointer-events-none fixed w-64 h-64 rounded-full bg-gradient-to-br from-primary/80 to-primary/80 dark:from-primary/40 dark:to-primary/40 blur-3xl z-50 animate-pulse"
      style={{
        transform: `translate(${cursorBlob.x - 128}px, ${
          cursorBlob.y - 128
        }px)`,
        transition: "transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      }}
    />
  );
}
