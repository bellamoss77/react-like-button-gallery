import React, { useState, useEffect, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import LikeButton from "./LikeButton";
import Dropdown from "./Dropdown";
import { LikeProvider } from "./LikeContext";
import './Gallery.scss';

const images = [
    {
        src: `${process.env.PUBLIC_URL}/PETS/APOLLO-JUNE_1.png`, 
        alt: 'dog',
        caption: 'Apollo, June 2024',
        id: 1
    }, {
        src: `${process.env.PUBLIC_URL}/PETS/APOLLO-JUNE_2.png`, 
        alt: 'dog',
        caption: 'Apollo #2, June 2024',
        id: 2
    }, {
        src: `${process.env.PUBLIC_URL}/PETS/APOLLO-JUNE_3.png`, 
        alt: 'dog',
        caption: 'Apollo #3, June 2024',
        id: 3
    }, {
        src: `${process.env.PUBLIC_URL}/PETS/ATHENA-JUNE_1.png`, 
        alt: 'dog',
        caption: 'Athena, June 2024',
        id: 4
    }, {
        src: `${process.env.PUBLIC_URL}/PETS/ATHENA-JUNE_2.png`, 
        alt: 'dog',
        caption: 'Athena #2, June 2024',
        id: 5
    }, {
        src: `${process.env.PUBLIC_URL}/PETS/ATHENA-JUNE_3.png`, 
        alt: 'dog',
        caption: 'Athena #3, June 2024',
        id: 6
    }, {
        src: `${process.env.PUBLIC_URL}/PETS/ATHENA-JUNE_4.png`, 
        alt: 'dog',
        caption: 'Athena #4, June 2024',
        id: 7
    }, {
        src: `${process.env.PUBLIC_URL}/PETS/ATHENA-JUNE_5.png`, 
        alt: 'dog',
        caption: 'Athena #5, June 2024',
        id: 8
    }, {
        src: `${process.env.PUBLIC_URL}/PETS/ATHENA-JUNE_6.png`, 
        alt: 'dog',
        caption: 'Athena #6, June 2024',
        id: 9
    }, {
        src: `${process.env.PUBLIC_URL}/PETS/ATHENA-JUNE_7.png`, 
        alt: 'dog',
        caption: 'Athena #7, June 2024',
        id: 10
    }, {
        src: `${process.env.PUBLIC_URL}/PETS/ATHENA-JUNE_8.png`, 
        alt: 'dog',
        caption: 'Athena #8, June 2024',
        id: 11
    }, {
        src: `${process.env.PUBLIC_URL}/PETS/ATHENA-JUNE_9.png`, 
        alt: 'dog',
        caption: 'Athena #9, June 2024',
        id: 12
    }, {
        src: `${process.env.PUBLIC_URL}/PETS/ATHENA-JUNE_10.png`, 
        alt: 'dog',
        caption: 'Athena #10, June 2024',
        id: 13
    }, {
        src: `${process.env.PUBLIC_URL}/PETS/ATHENA-JUNE_11.png`, 
        alt: 'dog',
        caption: 'Athena #11, June 2024',
        id: 14
    }, {
        src: `${process.env.PUBLIC_URL}/PETS/ATHENA-JUNE_12.png`, 
        alt: 'dog',
        caption: 'Athena #12, June 2024',
        id: 15
    }, {
        src: `${process.env.PUBLIC_URL}/PETS/ATHENA-JUNE_13.png`, 
        alt: 'dog',
        caption: 'Athena #13, June 2024',
        id: 16
    }, {
        src: `${process.env.PUBLIC_URL}/PETS/ATHENA-JUNE_14.png`, 
        alt: 'dog',
        caption: 'Athena #14, June 2024',
        id: 17
    }, {
        src: `${process.env.PUBLIC_URL}/PETS/DOG-JUNE_1.png`, 
        alt: 'dog',
        caption: 'Golden Retriever, June 2024',
        id: 18
    }
];

const PetsGallery = () => {
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
                            <div className="lightbox-caption">{currentImage.caption}</div>
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
    )

};

export default PetsGallery;