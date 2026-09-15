import React, { useState } from 'react';

interface SmartImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  fallbackSrc?: string;
  alt: string;
}

export const SmartImage: React.FC<SmartImageProps> = ({
  src,
  fallbackSrc,
  alt,
  className = '',
  ...props
}) => {
  const [currentSrc, setCurrentSrc] = useState<string>(src);
  const [hasFailed, setHasFailed] = useState<boolean>(false);

  // If primary src changes (e.g. active slide changes), reset
  React.useEffect(() => {
    setCurrentSrc(src);
    setHasFailed(false);
  }, [src]);

  const handleError = () => {
    if (!hasFailed && fallbackSrc && currentSrc !== fallbackSrc) {
      setHasFailed(true);
      setCurrentSrc(fallbackSrc);
    }
  };

  return (
    <img
      src={currentSrc}
      alt={alt}
      className={className}
      onError={handleError}
      referrerPolicy="no-referrer"
      {...props}
    />
  );
};
