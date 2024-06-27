import React, { useCallback, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import LikeButton from "./LikeButton";
import Dropdown from "./Dropdown";
import { LikeProvider } from "./LikeContext";
import './Gallery.scss';

const images = [
    {
        src: `${process.env.PUBLIC_URL}/NATURE/BIRD-JUNE_1.png`,
        alt: 'bird',
        caption: 'Small Brown Bird on Bush, Central VA - June 2024',
        id: 1
    }, {
        src: `${process.env.PUBLIC_URL}/NATURE/BUNNY-JUNE_1.png`,
        alt: 'bunny',
        caption: 'Bunny in Shade, Central VA - June 2024',
        id: 2
    }, {
        src: `${process.env.PUBLIC_URL}/NATURE/BUNNY-JUNE_2.png`,
        alt: 'bunny',
        caption: 'Bunny in Shade #2, Central VA - June 2024',
        id: 3
    }, {
        src: `${process.env.PUBLIC_URL}/NATURE/FLOWERS-JUNE_1.png`,
        alt: 'pink lily',
        caption: 'Pink Lily, Central VA - June 2024',
        id: 4
    }, {
        src: `${process.env.PUBLIC_URL}/NATURE/FLOWERS-JUNE_2.png`,
        alt: 'pink lilies',
        caption: 'Pink Lilies, Central VA - June 2024',
        id: 5
    }, {
        src: `${process.env.PUBLIC_URL}/NATURE/FLOWERS-JUNE_3.png`,
        alt: 'tiger lilies',
        caption: 'Tiger Lilies, Central VA - June 2024',
        id: 6
    }, {
        src: `${process.env.PUBLIC_URL}/NATURE/FLOWERS-JUNE_4.png`,
        alt: 'tiger lilies',
        caption: 'Tiger Lilies #2, Central VA - June 2024',
        id: 7
    }, {
        src: `${process.env.PUBLIC_URL}/NATURE/FLOWERS-JUNE_5.png`,
        alt: 'yellow lily',
        caption: 'Yellow Lily, Central VA - June 2024',
        id: 8
    }, {
        src: `${process.env.PUBLIC_URL}/NATURE/FLOWERS-JUNE_6.png`,
        alt: 'pink lilies',
        caption: 'Pink Lilies, Central VA - June 2024',
        id: 9
    }, {
        src: `${process.env.PUBLIC_URL}/NATURE/FLOWERS-JUNE_7.png`,
        alt: 'yellow lilies',
        caption: 'Yellow Lilies, Central VA - June 2024',
        id: 10
    }, {
        src: `${process.env.PUBLIC_URL}/NATURE/FLOWERS-JUNE_8.png`,
        alt: 'white wildflowers',
        caption: 'Wildflowers #1, Central VA - June 2024',
        id: 11
    }, {
        src: `${process.env.PUBLIC_URL}/NATURE/FLOWERS-JUNE_9.png`,
        alt: 'white wildflowers',
        caption: 'Wildflowers #2, Central VA - June 2024',
        id: 12
    }, {
        src: `${process.env.PUBLIC_URL}/NATURE/FLOWERS-JUNE_10.png`,
        alt: 'white wildflowers',
        caption: 'Wildflowers #3, Central VA - June 2024',
        id: 13
    }, {
        src: `${process.env.PUBLIC_URL}/NATURE/WILDLIFE-JUNE_1.png`,
        alt: 'two birds on a power line',
        caption: 'Two Birds on a Power Line, Afton, VA - June 2024',
        id: 14
    }, {
        src: `${process.env.PUBLIC_URL}/NATURE/WILDLIFE-JUNE_2.png`,
        alt: 'two birds on a power line',
        caption: 'Two Birds on a Power Line #2, Afton, VA - June 2024',
        id: 15
    }, {
        src: `${process.env.PUBLIC_URL}/NATURE/NATURE-JUNE_1.png`,
        alt: 'watering hole',
        caption: 'Watering Hole, Sugar Hollow, VA- June 2024',
        id: 16
    }, {
        src: `${process.env.PUBLIC_URL}/NATURE/NATURE-JUNE_5.png`,
        alt: 'watering hole',
        caption: 'Watering Hole #2, Sugar Hollow, VA- June 2024',
        id: 17
    }, {
        src: `${process.env.PUBLIC_URL}/NATURE/NATURE-JUNE_6.png`,
        alt: 'mountain stream',
        caption: 'Mountain Stream, Sugar Hollow, VA- June 2024',
        id: 18
    }, {
        src: `${process.env.PUBLIC_URL}/NATURE/NATURE-JUNE_7.png`,
        alt: 'Boulder in mountain stream',
        caption: 'Boulder in Mountain Stream, Sugar Hollow, VA- June 2024',
        id: 16
    }
]

const NatureGallery = () => {
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

export default NatureGallery;