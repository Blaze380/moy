import React from 'react';
import { X } from 'lucide-react';
import { PortfolioItem } from './types';

interface ImageModalProps {
  isOpen: boolean;
  image: PortfolioItem | null;
  onClose: () => void;
}

export default function ImageModal({ isOpen, image, onClose }: ImageModalProps) {
  if (!isOpen || !image) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90">
     <div className="relative max-w-7xl w-full mx-4 lg:w-[25rem]">

        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-[#CCFF00] transition-colors"
        >
          <X className="w-8 h-8" />
        </button>
        
        <div className="bg-[#1A1A1A] rounded-xl overflow-hidden">
          <img
            src={image.fullSize}
            alt={image.title}
            className="w-full h-auto lg:max-w-4xl xl:max-w-5xl"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-white mb-2">{image.title}</h3>
            <p className="text-gray-400">{image.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}