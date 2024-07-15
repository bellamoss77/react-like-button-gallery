import React, { useState, useEffect, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import LikeButton from './LikeButton';
import Dropdown from './Dropdown';
import { LikeProvider } from "./LikeContext";
import './Gallery.scss';

const images = [
    {
        src: process.env.PUBLIC_URL + '/LANDSCAPE2/CP-JULY_1.png',
        alt: 'Colonial Parkway, VA - July 2024',
        caption: 'Colonial Parkway, VA - July 2024',
        id: 1
    }, {
        src: process.env.PUBLIC_URL + '/LANDSCAPE2/CP-JULY_2.png',
        alt: 'Colonial Parkway, VA - July 2024',
        caption: 'Colonial Parkway, VA - July 2024',
        id: 2
    }, {
        src: process.env.PUBLIC_URL + '/LANDSCAPE2/CP-JULY_3.png',
        alt: 'Colonial Parkway, VA - July 2024',
        caption: 'Colonial Parkway, VA - July 2024',
        id: 3
    }, {
        src: process.env.PUBLIC_URL + '/LANDSCAPE2/CP-JULY_4.png',
        alt: 'Colonial Parkway, VA - July 2024',
        caption: 'Colonial Parkway, VA - July 2024',
        id: 4
    }, {
        src: process.env.PUBLIC_URL + '/LANDSCAPE2/DUSK_1.png',
        alt: 'Sepia Dusk, Central Virginia - July 2024',
        caption: 'Sepia Dusk, Central Virginia - July 2024',
        id: 5
    }, {
        src: process.env.PUBLIC_URL + '/LANDSCAPE2/KSP-JULY_2.png',
        alt: 'Kiptopeke State Park, Cape Charles, VA - July 2024',
        caption: 'Kiptopeke State Park, Cape Charles, VA - July 2024',
        id: 6
    }, {
        src: process.env.PUBLIC_URL + '/LANDSCAPE2/KSP-JULY_3.png',
        alt: 'Kiptopeke State Park, Cape Charles, VA - July 2024',
        caption: 'Kiptopeke State Park, Cape Charles, VA - July 2024',
        id: 7
    }, {
        src: process.env.PUBLIC_URL + '/LANDSCAPE2/KSP-JULY_4.png',
        alt: 'Kiptopeke State Park, Cape Charles, VA - July 2024',
        caption: 'Kiptopeke State Park, Cape Charles, VA - July 2024',
        id: 8
    } 
];

const LandscapeGallery2 = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(null);

    const openLightbox = (index) => {
        setCurrentImageIndex(index);
    };

    const closeLightbox = (e) => {
        if (e) e.stopPropagation();
        setCurrentImageIndex(null);
    };

    const goToPrevious = useCallback((e) => {
        e.stopPropagation();
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    }, []);

    const goToNext = useCallback((e) => {
        e.stopPropagation();
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, []);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowLeft') {
                goToPrevious(e);
            } else if (e.key === 'ArrowRight') {
                goToNext(e);
            } else if (e.key === 'Escape') {
                closeLightbox(e);
            }
        };

        if (currentImageIndex !== null) {
            window.addEventListener('keydown', handleKeyDown);
        } else {
            window.removeEventListener('keydown', handleKeyDown);
        }

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [currentImageIndex, goToNext, goToPrevious]);

    const handleImageLoad = (e) => {
        const { naturalWidth, naturalHeight } = e.target;
        const parentElement = e.target.parentElement;
        if (naturalHeight > naturalWidth) {
            parentElement.classList.add('vertical');
        } else {
            parentElement.classList.add('horizontal');
        }
    };

    const currentImage = currentImageIndex !== null ? images[currentImageIndex] : null;

    return (
        <LikeProvider>
            <div className="gallery-container">
                <div className="grid">
                    {images.map((image, index) => (
                        <div key={image.id} className="grid-item">
                            <img
                                src={image.src}
                                alt={image.alt}
                                onClick={() => openLightbox(index)}
                                className="gallery-img"
                                onLoad={handleImageLoad}
                            />
                            <LikeButton image={image} images={images} />
                        </div>
                    ))}
                </div>
                {currentImage && (
                    <div className="lightbox" onClick={closeLightbox}>
                        <span className="lightbox-close" onClick={closeLightbox}>
                            <FontAwesomeIcon icon={faXmark} />
                        </span>
                        <span className="lightbox-prev" onClick={goToPrevious}>
                            <FontAwesomeIcon icon={faArrowLeft} />
                        </span>
                        <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                            <img src={currentImage.src} alt={currentImage.alt} className="lightbox-img" />
                            <div className="lightbox-caption">
                                {currentImage.caption}
                            </div>
                            <LikeButton image={currentImage} images={images} />
                        </div>
                        <span className="lightbox-next" onClick={goToNext}>
                            <FontAwesomeIcon icon={faArrowRight} />
                        </span>
                    </div>
                )}
                <Dropdown />
            </div>
        </LikeProvider>
    );
};

export default LandscapeGallery2;