import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { PortfolioItem } from './types';

interface ImageSliderProps {
  images: PortfolioItem[];
  onImageClick: (image: PortfolioItem) => void;
}

export default function ImageSlider({ images, onImageClick }: ImageSliderProps) {
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -current.offsetWidth : current.offsetWidth;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative group">
      <button
        onClick={() => scroll('left')}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>

      <div
  ref={scrollRef}
  className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory gap-6"
  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} // Adicionado para ocultar a barra de rolagem
>

        {images.map((item, index) => (
          <div
            key={index}
            className="flex-none w-80 snap-start cursor-pointer transform hover:scale-105 transition-transform duration-300"
            onClick={() => onImageClick(item)}
          >
            <div className="relative aspect-video rounded-xl overflow-hidden">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                <p className="text-white text-lg font-medium">{item.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={() => scroll('right')}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>
    </div>
  );
}