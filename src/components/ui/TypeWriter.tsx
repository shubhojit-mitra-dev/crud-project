"use client";

import React, { useState, useEffect } from 'react';

interface TypeWriterProps {
  text: string;
  delay?: number;
  pauseTime?: number;
}

const TypeWriter: React.FC<TypeWriterProps> = ({ 
  text, 
  delay = 100,
  pauseTime = 2000 
}) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) {
      const pauseTimeout = setTimeout(() => {
        setIsPaused(false);
        setIsTyping(false);
      }, pauseTime);
      return () => clearTimeout(pauseTimeout);
    }

    if (isTyping) {
      if (currentIndex < text.length) {
        const timeout = setTimeout(() => {
          setCurrentText(prevText => prevText + text[currentIndex]);
          setCurrentIndex(prevIndex => prevIndex + 1);
        }, delay);
        return () => clearTimeout(timeout);
      } else {
        setIsPaused(true);
      }
    } else {
      if (currentText.length > 0) {
        const timeout = setTimeout(() => {
          setCurrentText(prevText => prevText.slice(0, -1));
        }, delay);
        return () => clearTimeout(timeout);
      } else {
        setIsTyping(true);
        setCurrentIndex(0);
      }
    }
  }, [currentIndex, delay, text, currentText, isTyping, isPaused]);

  return (
    <span className="inline-block">
      {currentText}
      <span 
        className={`inline-block w-[2px] h-[1.2em] bg-current ml-1 ${
          isPaused ? 'animate-blink' : ''
        }`}
        style={{ 
          verticalAlign: 'middle',
          animation: isPaused ? 'blink 1s step-end infinite' : 'none'
        }}
      />
    </span>
  );
};

export default TypeWriter;