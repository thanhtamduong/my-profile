import { useState } from 'react';
import { LotusMotif } from './LotusMotif';

interface SmartImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackLabel?: string;
  loading?: 'lazy' | 'eager';
}

/**
 * Hiển thị ảnh kèm hiệu ứng tải mượt và khung dự phòng mang họa tiết hoa sen
 * trong trường hợp đường dẫn mạng bị gián đoạn.
 */
export function SmartImage({
  src,
  alt,
  className = 'w-full h-full object-cover',
  fallbackLabel,
  loading = 'lazy',
}: SmartImageProps) {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  if (hasError) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#FCE7F0] via-[#FFF5F8] to-[#D7F0E0] p-6 text-center text-[#145335] ${className}`}
        role="img"
        aria-label={alt}
      >
        <LotusMotif className="w-12 h-12 mb-2 opacity-90" />
        <p className="text-xs font-semibold text-[#103F2B]/80 line-clamp-2">
          {fallbackLabel || alt}
        </p>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full overflow-hidden bg-[#FCE7F0]/40">
      {!isLoaded && (
        <div
          className="absolute inset-0 animate-pulse bg-gradient-to-r from-[#FCE7F0]/60 via-[#EEF9F2]/60 to-[#FCE7F0]/60"
          aria-hidden="true"
        />
      )}
      <img
        src={src}
        alt={alt}
        loading={loading}
        draggable={false}
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        className={`${className} select-none transition-opacity duration-500 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  );
}

