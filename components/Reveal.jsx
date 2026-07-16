"use client";
// Wraps any content and animates it in (fade + slide up) the moment it
// scrolls into view, using an IntersectionObserver. Used for cards, section
// headings, etc. so the page feels more alive without anything moving
// around once it's already visible (it only ever plays once).
//
// Usage: <Reveal delay={100}><div>...</div></Reveal>
// `delay` (ms) is handy for staggering a row of cards one after another.

import { useEffect, useRef, useState } from "react";

export default function Reveal({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          // Only needs to happen once - stop watching after it fires.
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
