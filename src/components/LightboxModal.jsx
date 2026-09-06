import React, { useState, useEffect } from 'react';

const internshipImages = Array.from({ length: 7 }, (_, i) => ({
    src: `/images/internship_${i + 1}.jpg`,
    caption: `Uttar Pradesh Police Cyber Security Internship - Photo ${i + 1}`
}));

export default function LightboxModal({ isOpen, onClose, currentImgIndex, setCurrentImgIndex }) {
    const [isLoading, setIsLoading] = useState(true);

    // Reset loading state and trigger preload when image index or modal state changes
    useEffect(() => {
        if (isOpen) {
            setIsLoading(true);

            // Preload current image
            const currentImg = new Image();
            currentImg.src = internshipImages[currentImgIndex].src;
            if (currentImg.complete) {
                setIsLoading(false);
            } else {
                currentImg.onload = () => setIsLoading(false);
                currentImg.onerror = () => setIsLoading(false);
            }

            // Preload next and prev images in background
            const nextIndex = (currentImgIndex + 1) % internshipImages.length;
            const prevIndex = (currentImgIndex - 1 + internshipImages.length) % internshipImages.length;
            
            const nextImg = new Image();
            nextImg.src = internshipImages[nextIndex].src;
            const prevImg = new Image();
            prevImg.src = internshipImages[prevIndex].src;
        }
    }, [isOpen, currentImgIndex]);

    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                onClose();
            } else if (e.key === 'ArrowRight') {
                setCurrentImgIndex((prev) => (prev + 1) % internshipImages.length);
            } else if (e.key === 'ArrowLeft') {
                setCurrentImgIndex((prev) => (prev - 1 + internshipImages.length) % internshipImages.length);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, onClose, setCurrentImgIndex]);

    if (!isOpen) return null;

    const currentImg = internshipImages[currentImgIndex];

    const showNextImage = (e) => {
        e.stopPropagation();
        setIsLoading(true);
        setCurrentImgIndex((prev) => (prev + 1) % internshipImages.length);
    };

    const showPrevImage = (e) => {
        e.stopPropagation();
        setIsLoading(true);
        setCurrentImgIndex((prev) => (prev - 1 + internshipImages.length) % internshipImages.length);
    };

    return (
        <div 
            id="imageModal" 
            className="image-modal open" 
            style={{ display: 'flex' }}
            onClick={onClose}
            aria-hidden="false"
        >
            <button 
                className="modal-close" 
                id="modalClose" 
                aria-label="Close image popup" 
                onClick={onClose}
            >
                &times;
            </button>
            
            {/* Navigation Buttons */}
            <button 
                className="modal-prev" 
                id="modalPrev" 
                aria-label="Previous image" 
                onClick={showPrevImage}
            >
                &#10094;
            </button>
            <button 
                className="modal-next" 
                id="modalNext" 
                aria-label="Next image" 
                onClick={showNextImage}
            >
                &#10095;
            </button>
            
            <div className="modal-content-wrapper" onClick={(e) => e.stopPropagation()}>
                <div className="modal-counter" id="modalCounter">
                    {currentImgIndex + 1} / {internshipImages.length}
                </div>
                
                <div className="modal-image-container">
                    {isLoading && (
                        <div className="modal-image-loader">
                            <div className="loader-scanline"></div>
                            <div className="cyber-spinner">
                                <div className="spinner-outer-ring"></div>
                                <div className="spinner-inner-ring"></div>
                                <div className="spinner-core-dot"></div>
                            </div>
                            <div className="loader-status">
                                <span className="loader-glitch-text">
                                    DECRYPTING MEDIA NODE [{String(currentImgIndex + 1).padStart(2, '0')} / {String(internshipImages.length).padStart(2, '0')}]
                                </span>
                                <div className="loader-progress-bar">
                                    <div className="loader-progress-fill"></div>
                                </div>
                            </div>
                        </div>
                    )}
                    <img 
                        className={`modal-image ${isLoading ? 'loading' : 'loaded'}`} 
                        id="modalImage" 
                        src={currentImg.src} 
                        alt={currentImg.caption}
                        onLoad={() => setIsLoading(false)}
                        onError={() => setIsLoading(false)}
                    />
                </div>
                
                <div className="modal-caption" id="modalCaption">
                    {currentImg.caption}
                </div>
            </div>
        </div>
    );
}

