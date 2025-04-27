import React, { useState, useEffect } from 'react'; // Added useEffect
import { Link } from 'react-router-dom';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { BACKGROUND_IMAGES } from '../utils/imageLoader.js'; // Import dynamic image list

// Removed hardcoded BACKGROUND_IMAGES array

const ImageGallery = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const openModal = (index) => {
    setSelectedImageIndex(index);
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
  };

  const showNext = (e) => {
    e.stopPropagation(); // Prevent closing modal when clicking buttons
    setSelectedImageIndex((prevIndex) => (prevIndex + 1) % BACKGROUND_IMAGES.length);
  };

  const showPrev = (e) => {
    e.stopPropagation(); // Prevent closing modal when clicking buttons
    setSelectedImageIndex((prevIndex) => (prevIndex - 1 + BACKGROUND_IMAGES.length) % BACKGROUND_IMAGES.length);
  };

  // Handle keyboard navigation in modal
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (selectedImageIndex !== null) {
        if (event.key === 'ArrowRight') {
          showNext(event);
        } else if (event.key === 'ArrowLeft') {
          showPrev(event);
        } else if (event.key === 'Escape') {
          closeModal();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedImageIndex]); // Re-run effect when selectedImageIndex changes

  return (
    <div className="min-h-screen bg-black text-white p-4 sm:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold hero-gradient">Background Gallery</h1>
          <Link to="/" className="text-gray-400 hover:text-gray-200 transition-colors flex items-center">
            <ChevronLeft className="w-5 h-5 mr-1" /> Back to Home
          </Link>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {BACKGROUND_IMAGES.map((src, index) => (
            <div
              key={src}
              className="aspect-square bg-gray-800 rounded-lg overflow-hidden cursor-pointer group relative hover:opacity-80 transition-opacity"
              onClick={() => openModal(index)}
            >
              <img
                src={src}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all flex items-center justify-center">
                 {/* Optional: Add an icon or text on hover */}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal/Lightbox */}
      {selectedImageIndex !== null && (
        <div
          className="fixed inset-0 bg-[rgba(0,0,0,0.8)] flex items-center justify-center z-50 p-4" // Changed background class
          onClick={closeModal} // Close modal on background click
        >
          {/* Previous Button */}
          <button
            onClick={showPrev}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-700/50 hover:bg-gray-600/70 text-white p-3 rounded-full z-60 transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Image Container */}
          <div className="relative max-w-full max-h-full flex items-center justify-center">
             <img
               src={BACKGROUND_IMAGES[selectedImageIndex]}
               alt={`Gallery image ${selectedImageIndex + 1}`}
               className="max-w-full max-h-[90vh] object-contain block"
               onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking image
             />
          </div>


          {/* Next Button */}
          <button
            onClick={showNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-700/50 hover:bg-gray-600/70 text-white p-3 rounded-full z-60 transition-colors"
            aria-label="Next image"
          >
            <ChevronRight size={24} />
          </button>

          {/* Close Button */}
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 bg-gray-700/50 hover:bg-gray-600/70 text-white p-2 rounded-full z-60 transition-colors"
            aria-label="Close gallery view"
          >
            <X size={24} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
