import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  width?: number;
  height?: number;
  sizes?: string;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = "",
  style,
  width,
  height,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
}) => {
  // Generate WebP URL for Flickr images
  const getWebPUrl = (originalUrl: string): string => {
    if (originalUrl.includes('flickr.com')) {
      // For Flickr, we can't automatically convert to WebP, but we can optimize the size
      // Replace large size indicators with medium for better performance
      return originalUrl.replace('_k_d.jpg', '_c_d.jpg').replace('_o_d.jpg', '_c_d.jpg');
    }
    return originalUrl;
  };

  // Generate placeholder image (low-quality blur)
  const getPlaceholderUrl = (): string => {
    return `data:image/svg+xml;base64,${btoa(`
      <svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="#F7EDE6"/>
        <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="16" 
              fill="#2D2D2B" text-anchor="middle" dy=".3em">Loading...</text>
      </svg>
    `)}`;
  };

  const optimizedSrc = getWebPUrl(src);

  return (
    <LazyLoadImage
      src={optimizedSrc}
      alt={alt}
      className={className}
      style={style}
      width={width}
      height={height}
      sizes={sizes}
      effect="blur"
      placeholderSrc={getPlaceholderUrl()}
      loading="lazy"
      decoding="async"
      onError={(e) => {
        // Fallback to original URL if optimized version fails
        const imgElement = e.target as HTMLImageElement;
        if (imgElement.src !== src) {
          imgElement.src = src;
        }
      }}
    />
  );
};

export default OptimizedImage;
