"use client";

import React, { useState } from 'react';

interface FallbackImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc: string;
}

export default function FallbackImage({ src, fallbackSrc, alt, className, ...props }: FallbackImageProps) {
  const [imgSrc, setImgSrc] = useState(src);
  
  return (
    <img
      {...props}
      src={imgSrc || fallbackSrc}
      alt={alt}
      className={className}
      onError={() => {
        setImgSrc(fallbackSrc);
      }}
    />
  );
}
