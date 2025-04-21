import { useState } from 'react';
import { PortfolioItem } from './types';

const portfolioItems: PortfolioItem[] = [
  { 
    title: "E-vision",
    description: " ",
    thumbnail: "/portifolio/1.png",
    fullSize: "/portifolio/1.png",
    category: "Design"
  },
  { 
    title: "E-MozStore",
    description: " ",
    thumbnail: "/portifolio/5.png",
    fullSize: "/portifolio/5.png",
    category: "Design"
  },
  { 
    title: "E-Tech",
    description: " ",
    thumbnail: "/portifolio/05.png",
    fullSize: "/portifolio/05.png",
    category: "Design"
  },
  { 
    title: "E-Tech",
    description: " ",
    thumbnail: "/portifolio/07.png",
    fullSize: "/portifolio/07.png",
    category: "Design"
  },
  { 
    title: "E-MozStore",
    description: " ",
    thumbnail: "/portifolio/11.png",
    fullSize: "/portifolio/11.png",
    category: "Design"
  },
  { 
    title: "E-Gaming",
    description: " ",
    thumbnail: "/portifolio/13.png",
    fullSize: "/portifolio/13.png",
    category: "Design"
  },

  { 
    title: "E-Shot",
    description: " ",
    thumbnail: "/portifolio/17.png",
    fullSize: "/portifolio/17.png",
    category: "Design"
  },
  { 
    title: "MOY",
    description: " ",
    thumbnail: "/portifolio/21.png",
    fullSize: "/portifolio/21.png",
    category: "Design"
  },
  { 
    title: "Vision Design",
    description: " ",
    thumbnail: "/portifolio/22.png",
    fullSize: "/portifolio/22.png",
    category: "Design"
  },
  { 
    title: "MOY",
    description: " ",
    thumbnail: "/portifolio/23.png",
    fullSize: "/portifolio/23.png",
    category: "Design"
  },
  { 
    title: "Orbit Members",
    description: " ",
    thumbnail: "/portifolio/24.jpg",
    fullSize: "/portifolio/24.jpg",
    category: "Design"
  },
  { 
    title: "CMMF",
    description: " ",
    thumbnail: "/portifolio/25.png",
    fullSize: "/portifolio/25.png",
    category: "Design"
  },
  { 
    title: "CMMF",
    description: " ",
    thumbnail: "/portifolio/26.png",
    fullSize: "/portifolio/26.png",
    category: "Design"
  }
];

export function usePortfolio() {
  const [currentImage, setCurrentImage] = useState<PortfolioItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = (image: PortfolioItem) => {
    setCurrentImage(image);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCurrentImage(null);
  };

  return {
    currentImage,
    isModalOpen,
    handleImageClick,
    handleCloseModal,
    portfolioItems
  };
}