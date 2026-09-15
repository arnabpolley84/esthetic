import React, { useState, useEffect, useRef } from 'react';

interface TypewriterTextProps {
  text: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
  speed?: 'slow' | 'normal' | 'fast' | 'instant';
  delay?: number;
  showCursor?: boolean;
  triggerKey?: string | number;
  className?: string;
  inViewOnly?: boolean;
  onComplete?: () => void;
}

export const TypewriterText: React.FC<TypewriterTextProps> = ({
  text,
  as: Component = 'span',
  speed = 'normal',
  delay = 0,
  showCursor = false,
  triggerKey,
  className = '',
  inViewOnly = true,
  onComplete
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const elementRef = useRef<HTMLElement | null>(null);

  // Speed map in milliseconds per character
  const speedInterval = {
    slow: 32,      // For large hero & section headings
    normal: 16,    // For eyebrows, cards, service titles
    fast: 8,       // For longer descriptions/reviews
    instant: 0
  }[speed];

  useEffect(() => {
    // Check for prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setDisplayedText(text);
      setIsComplete(true);
      if (onComplete) onComplete();
      return;
    }

    if (!inViewOnly) {
      setHasStarted(true);
      return;
    }

    const currentEl = elementRef.current;
    if (!currentEl) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHasStarted(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(currentEl);

    return () => {
      observer.disconnect();
    };
  }, [inViewOnly, triggerKey, text]);

  // Restart typing when triggerKey or text changes
  useEffect(() => {
    // Check reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplayedText(text);
      setIsComplete(true);
      return;
    }

    if (!hasStarted) {
      setDisplayedText('');
      setIsComplete(false);
      return;
    }

    setDisplayedText('');
    setIsComplete(false);

    const startTimer = setTimeout(() => {
      setIsTyping(true);
      let currentIndex = 0;

      const typeTimer = setInterval(() => {
        if (currentIndex < text.length) {
          currentIndex++;
          setDisplayedText(text.slice(0, currentIndex));
        } else {
          clearInterval(typeTimer);
          setIsTyping(false);
          setIsComplete(true);
          if (onComplete) onComplete();
        }
      }, speedInterval);

      return () => clearInterval(typeTimer);
    }, delay);

    return () => clearTimeout(startTimer);
  }, [hasStarted, triggerKey, text, delay, speedInterval]);

  return (
    <Component
      ref={elementRef as any}
      className={`inline-block ${className}`}
      aria-label={text}
    >
      <span>{displayedText}</span>
      {showCursor && (isTyping || !isComplete) && (
        <span
          className="inline-block w-[2px] h-[0.85em] align-middle ml-1 bg-current opacity-80 animate-cursor-blink"
          aria-hidden="true"
        />
      )}
    </Component>
  );
};
