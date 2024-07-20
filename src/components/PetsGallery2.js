import React, { useState, useEffect, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import LikeButton from "./LikeButton";
import Dropdown from "./Dropdown";
import { LikeProvider } from "./LikeContext";
import './Gallery.scss';

const PetsGallery2 = () => {
const [currentImageIndex, setCurrentImageIndex] = useState(null);

    const images = [
        {
            src: process.env.PUBLIC_URL + '/PETS2/APOLLO-ATHENA-JULY_1.png',
            height: 600,
            width: 900,
            alt: 'dogs on shore of chesapeake bay',
            caption: 'Playtime on the Chesapeake Bay, Kiptopeke State Park - Cape Charles, VA (July 2024)',
            loading: 'lazy',
            id: 1
        }, {
            src: process.env.PUBLIC_URL + '/PETS2/APOLLO-ATHENA-JULY_2.png',
            height: 600,
            width: 900, 
            alt: 'dogs on shore of chesapeake bay',
            caption: 'Playtime on the Chesapeake Bay, Kiptopeke State Park - Cape Charles, VA (July 2024)',
            loading: 'lazy',
            id: 2
        }, {
            src: process.env.PUBLIC_URL + '/PETS2/ATHENA-JULY_1.png',
            height: 600,
            width: 900,
            alt: 'dog laying in grass',
            caption: 'Athena in the Sun - Central VA (July 2024)',
            loading: 'lazy',
            id: 3
        }, {
            src: process.env.PUBLIC_URL + '/PETS2/ATHENA-JULY_2.png',
            height: 600,
            width: 900,
            alt: 'dog laying in grass from behind',
            caption: 'Athena in the Sun #2 - Central, VA (July 2024)',
            loading: 'lazy',
            id: 4
        }, {
            src: process.env.PUBLIC_URL + '/PETS2/ATHENA-JULY_3.png',
            height: 450,
            width: 450,
            alt: 'dog laying in grass from behind',
            caption: 'Athena in the Sun #3 - Central, VA (July 2024)',
            loading: 'lazy',
            id: 5
        }, {
            src: process.env.PUBLIC_URL + '/PETS2/ATHENA-JULY_4.png',
            height: 450,
            width: 450,
            alt: 'dog sitting in yard',
            caption: 'Waiting and Wanting - Central Virginia (July 2024)',
            loading: 'lazy',
            id: 6
        }, {
            src: process.env.PUBLIC_URL + '/PETS2/ATHENA-JULY_5.png',
            height: 600,
            width: 900,
            alt: 'dog drinking water off plastic bin under sepia skies',
            caption: 'Sepia Skies Après la Tempête - Central VA (July 2024)',
            loading: 'lazy',
            id: 7
        }, {
            src: process.env.PUBLIC_URL + '/PETS2/ATHENA-JULY_6.png',
            height: 450,
            width: 450,
            alt: 'dog on shore of bay',
            caption: 'Athena by the Bay, Kiptopeke State Park - Cape Charles, VA (July 2024)',
            loading: 'lazy',
            id: 8
        }, {
            src: process.env.PUBLIC_URL + '/PETS2/SH-Apollo_1.png',
            height: 600,
            width: 900,
            alt: 'dog on rocks at great falls',
            caption: 'Apollo on the Rocks, Great Falls - Shenandoah National Park, VA (June 2024)',
            loading: 'lazy',
            id: 9
        }, {
            src: process.env.PUBLIC_URL + '/PETS2/SH-Apollo_2.png',
            height: 450,
            width: 450,
            alt: 'dog wading into watering hole',
            caption: 'Wading Days - Shenandoah National Park Near Sugar Hollow, VA (June 2024)',
            loading: 'lazy',
            id: 10
        }, {
            src: process.env.PUBLIC_URL + '/PETS2/SH-Athena_1.png',
            height: 600,
            width: 900,
            alt: 'dog wading in pool at base of waterfall',
            caption: 'Waterfall Wanderings (Athena) - Great Falls, Shenandoah National Park, VA (July 2024)',
            loading: 'lazy',
            id: 11
        }, {
            src: process.env.PUBLIC_URL + '/PETS2/SH-Apollo_3.png',
            height: 600,
            width: 900,
            alt: 'dog on rocks at great falls',
            caption: 'Apollo on the Rocks #2, Great Falls - Shenandoah National Park, VA (June 2024)',
            loading: 'lazy',
            id: 12
        }, {
            src: process.env.PUBLIC_URL + '/PETS2/SH-Athena_2.png',
            height: 600,
            width: 900,
            alt: 'dog wading in pool at base of waterfall (black and white)',
            caption: 'Waterfall Wanderings #2 (Athena) - Great Falls, Shenandoah National Park, VA (July 2024)',
            loading: 'lazy',
            id: 13
        }, {
            src: process.env.PUBLIC_URL + '/PETS2/SH-Apollo_4.png',
            height: 600,
            width: 900,
            alt: 'dog on rocks at great falls',
            caption: 'Apollo on the Rocks #3, Great Falls - Shenandoah National Park, VA (June 2024)',
            loading: 'lazy',
            id: 14
        }, {
            src: process.env.PUBLIC_URL + '/PETS2/SH-Athena_3.png',
            height: 600,
            width: 900,
            alt: 'dog wading in pool at base of waterfall',
            caption: 'Waterfall Wanderings #3 (Athena) - Great Falls, Shenandoah National Park, VA (July 2024)',
            loading: 'lazy',
            id: 15
        }, {
            src: process.env.PUBLIC_URL + '/PETS2/SH-Athena_4.png',
            height: 600,
            width: 900,
            alt: 'dog wading in pool at base of waterfall',
            caption: 'Waterfall Wanderings #4 (Athena) - Great Falls, Shenandoah National Park, VA (July 2024)',
            loading: 'lazy',
            id: 16
        }, {
            src: process.env.PUBLIC_URL + '/PETS2/SH-Apollo_5.png',
            height: 600,
            width: 900,
            alt: 'dog wading in pool at base of waterfall',
            caption: 'Waterfall Wanderings #5 (Apollo) - Great Falls, Shenandoah National Park, VA (July 2024)',
            loading: 'lazy',
            id: 17
        }, {
            src: process.env.PUBLIC_URL + '/PETS2/SH-Athena_5.png',
            height: 600,
            width: 900,
            alt: 'dog against colorful rock background',
            caption: 'Pondering (Athena) - Great Falls, Shenandoah National Park, VA (July 2024)',
            loading: 'lazy',
            id: 18
        }, {
            src: process.env.PUBLIC_URL + '/PETS2/SH-Athena_6.png',
            height: 600,
            width: 900,
            alt: 'dog staring up at man with sandwich',
            caption: 'New Friends (Athena) - Great Falls, Shenandoah National Park, VA (July 2024)',
            loading: 'lazy',
            id: 19
        }, {
            src: process.env.PUBLIC_URL + '/PETS2/SH-Athena_7.png',
            height: 450,
            width: 450,
            alt: 'dog wading through water',
            caption: 'Watery Walk (Athena) - Shenandoah National Park Near Sugar Hollow, VA (June 2024)',
            loading: 'lazy',
            id: 20
        }, {
            src: process.env.PUBLIC_URL + '/PETS2/SH-Athena_8.png',
            height: 450,
            width: 450,
            alt: 'dog looking out over rock',
            caption: 'Lookout (Athena) - Great Falls, Shenandoah National Park Near Sugar Hollow, VA (July 2024)',
            loading: 'lazy',
            id: 21
        }, {
            src: process.env.PUBLIC_URL + '/PETS2/SH-Apollo_6.png',
            height: 600,
            width: 900,
            alt: 'dog wading through water',
            caption: 'Watery Walk #2 (Apollo) - Shenandoah National Park Near Sugar Hollow, VA (June 2024)',
            loading: 'lazy',
            id: 22
        }, {
            src: process.env.PUBLIC_URL + '/PETS2/SH-Athena_9.png',
            height: 600,
            width: 900,
            alt: 'dog on rocks',
            caption: 'Athena on the Rocks - Shenandoah National Park Near Sugar Hollow, VA (June 2024)',
            loading: 'lazy',
            id: 23
        }, {
            src: process.env.PUBLIC_URL + '/PETS2/SH-Athena-Apollo_1.png',
            height: 600,
            width: 900,
            alt: 'dogs wading in rocky river',
            caption: 'Rocky River Ramblings - Shenandoah National Park Near Sugar Hollow, VA (June 2024)',
            loading: 'lazy',
            id: 24
        }, {
            src: process.env.PUBLIC_URL + '/PETS2/SH-Athena-Apollo_2.png',
            height: 600,
            width: 900,
            alt: 'one dog swimming and the other wading in water',
            caption: 'Summer Swim - Shenandoah National Park Near Sugar Hollow, VA (June 2024)',
            loading: 'lazy',
            id: 25
        }
    ];

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
        } else if (naturalWidth > naturalHeight) {
            parentElement.classList.add('horizontal');
        } else {
            parentElement.classList.add('square');
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
                            <img
                                src={currentImage.src}
                                alt={currentImage.alt}
                                className="lightbox-img"
                            />
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

export default PetsGallery2;