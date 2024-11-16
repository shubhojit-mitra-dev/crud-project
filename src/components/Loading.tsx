"use client";

import React, { useEffect } from 'react';
import Image from 'next/image';
import mongo from '@/assets/mongodb.svg';

const Loading = ({ onLoadingComplete }: { onLoadingComplete: () => void }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      onLoadingComplete();
    }, Math.random() * (10000 - 5000) + 5000);

    return () => clearTimeout(timeout);
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-[9999]">
      <div className="relative w-32 h-32 animate-pulse">
        <div className="absolute inset-0 rounded-full bg-green-500/20 animate-ping" />
        <div className="absolute inset-0 rounded-full bg-green-500/40 animate-pulse" />
        <Image 
          src={mongo}
          alt="MongoDB Logo" 
          width={128} 
          height={128}
          className="relative z-10"
        />
      </div>
      <p className="mt-8 text-green-500 text-xl animate-fade">
        Connecting to your database...
      </p>
    </div>
  );
};

export default Loading;