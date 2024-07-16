import React, { useState, useEffect, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import LikeButton from "./LikeButton";
import Dropdown from "./Dropdown";
import { LikeProvider } from "./LikeContext";
import './Gallery.scss';

const images = [
    {
        src: process.env.PUBLIC_URL + '/NATURE2/BIRD_1.png',
        alt: 'Cardinal in Flight, Central Virginia - July 2024',
        caption: 'Cardinal in Flight, Central Virginia - July 2024',
        id: 1
    }, {
        src: process.env.PUBLIC_URL + '/NATURE2/BIRD_2.png',
        alt: 'Songbird on Feeder, Central Virginia - July 2024',
        caption: 'Songbird on Feeder, Central Virginia - July 2024',
        id: 2
    }, {
        src: process.env.PUBLIC_URL + '/NATURE2/BIRD_3.png',
        alt: 'Songbird on Feeder, Central Virginia - July 2024',
        caption: 'Songbird on Feeder, Central Virginia - July 2024',
        id: 3
    }, {
        src: process.env.PUBLIC_URL + '/NATURE2/BIRD_3_BW.png',
        alt: 'Songbird on Feeder (Black & White), Central Virginia - July 2024',
        caption: 'Songbird on Feeder, Central Virginia - July 2024',
        id: 4
    }, {
        src: process.env.PUBLIC_URL + '/NATURE2/BIRD_5.png',
        alt: 'Female Cardinal on Feeder, Central Virginia - July 2024',
        caption: 'Female Cardinal on Feeder, Central Virginia - July 2024',
        id: 5
    }, {
        src: process.env.PUBLIC_URL + '/NATURE2/BIRD_6.png',
        alt: 'Bird in Flight, Central Virginia - July 2024',
        caption: 'Bird in Flight, Central Virginia - July 2024',
        id: 6
    }, {
        src: process.env.PUBLIC_URL + '/NATURE2/BIRD_7.png',
        alt: 'Yellow Breasted Wren on Branch, Central Virginia - July 2024',
        caption: 'Yellow Breasted Wren on Branch, Central Virginia - July 2024',
        id: 7
    }, {
        src: process.env.PUBLIC_URL + '/NATURE2/BIRD_8.png',
        alt: 'Songbird on Feeder, Central Virginia - July 2024',
        caption: 'Songbird on Feeder, Central Virginia - July 2024',
        id: 8
    }, {
        src: process.env.PUBLIC_URL + '/NATURE2/BIRD_10.png',
        alt: 'Songbird on Feeder, Central Virginia - July 2024',
        caption: 'Songbird on Feeder, Central Virginia - July 2024',
        id: 10
    }, {
        src: process.env.PUBLIC_URL + '/NATURE2/BIRD_11.png',
        alt: 'Songbird on Feeder, Central Virginia - July 2024',
        caption: 'Songbird on Feeder, Central Virginia - July 2024',
        id: 11
    }, {
        src: process.env.PUBLIC_URL + '/NATURE2/BIRD_12.png',
        alt: 'Songbird with Seed on Feeder, Central Virginia - July 2024',
        caption: 'Songbird with Seed on Feeder, Central Virginia - July 2024',
        id: 12
    }, {
        src: process.env.PUBLIC_URL + '/NATURE2/BIRD_13.png',
        alt: 'Songbird on Feeder, Central Virginia - July 2024',
        caption: 'Songbird on Feeder, Central Virginia - July 2024',
        id: 13
    }, {
        src: process.env.PUBLIC_URL + '/NATURE2/BIRD_14.png',
        alt: 'Songbird Silhouette, Central Virginia - July 2024',
        caption: 'Songbird Silhouette, Central Virginia - July 2024',
        id: 14
    }, {
        src: process.env.PUBLIC_URL + '/NATURE2/BIRD_15.png',
        alt: 'Shadowy Songbird, Central Virginia - July 2024',
        caption: 'Shadowy Songbird, Central Virginia - July 2024',
        id: 15
    }, {
        src: process.env.PUBLIC_URL + '/NATURE2/BIRD_16.png',
        alt: 'Lady Cardinal in Bush, Central Virginia - July 2024',
        caption: 'Lady Cardinal in Bush, Central Virginia - July 2024',
        id: 16
    }, {
        src: process.env.PUBLIC_URL + '/NATURE2/BIRD_17.png',
        alt: 'Lady Cardinal in Bush, Central Virginia - July 2024',
        caption: 'Lady Cardinal in Bush, Central Virginia - July 2024',
        id: 17
    }, {
        src: process.env.PUBLIC_URL + '/NATURE2/BIRD_18.png',
        alt: 'Cardinal on Feeder, Central Virginia - July 2024',
        caption: 'Cardinal on Feeder, Central Virginia - July 2024',
        id: 18
    }, {
        src: process.env.PUBLIC_URL + '/NATURE2/BIRD_19.png',
        alt: 'Cardinal on Feeder, Central Virginia - July 2024',
        caption: 'Cardinal on Feeder, Central Virginia - July 2024',
        id: 19
    }, {
        src: process.env.PUBLIC_URL + '/NATURE2/BIRD_20.png',
        alt: 'Songbird on Feeder, Central Virginia - July 2024',
        caption: 'Yellow Breasted Wren on Feeder, Central Virginia - July 2024',
        id: 20
    }, {
        src: process.env.PUBLIC_URL + '/NATURE2/BIRD_21.png',
        alt: 'Songbird on Feeder, Central Virginia - July 2024',
        caption: 'Yellow Breasted Wren on Feeder, Central Virginia - July 2024',
        id: 21
    }, {
        src: process.env.PUBLIC_URL + '/NATURE2/BIRD_22.png',
        alt: 'Yellow Breasted Wren on Feeder, Central Virginia - July 2024',
        caption: 'Yellow Breasted Wren on Feeder, Central Virginia - July 2024',
        id: 22
    }, {
        src: process.env.PUBLIC_URL + '/NATURE2/BIRD_23.png',
        alt: 'Yellow Breasted Wren on Feeder, Central Virginia - July 2024',
        caption: 'Yellow Breasted Wren on Feeder, Central Virginia - July 2024',
        id: 23
    }, {
        src: process.env.PUBLIC_URL + '/NATURE2/BIRD_25.png',
        alt: 'Yellow Breasted Wren on Feeder, Central Virginia - July 2024',
        caption: 'Yellow Breasted Wren on Feeder, Central Virginia - July 2024',
        id: 25
    }, {
        src: process.env.PUBLIC_URL + '/NATURE2/BIRD_22.png',
        alt: 'Yellow Breasted Wren on Feeder, Central Virginia - July 2024',
        caption: 'Yellow Breasted Wren on Feeder, Central Virginia - July 2024',
        id: 22
    }, {
        src: process.env.PUBLIC_URL + '/NATURE2/BIRD_26.png',
        alt: 'Cardinal on Tree, Central Virginia - July 2024',
        caption: 'Cardinal on Tree, Central Virginia - July 2024',
        id: 26
    }, {
        src: process.env.PUBLIC_URL + '/NATURE2/BIRD_27.png',
        alt: 'bird on power line after storm - July 2024',
        caption: 'Bird on Powerline Against Stormy Sky, Central Virginia - July 2024',
        id: 27
    }, {
        src: process.env.PUBLIC_URL + '/NATURE2/BIRD_28.png',
        alt: 'bird with catch in beak, Central Virginia - July 2024',
        caption: 'Hunting Bird, Central Virginia - July 2024',
        id: 28
    }, {
        src: process.env.PUBLIC_URL + '/NATURE2/BLACK-EYED-SUSANS.png',
        alt: 'Black Eyed Susans, Central Virginia - July 2024',
        caption: 'Black Eyed Susans, Central Virginia - July 2024',
        id: 29
    }, {
        src: process.env.PUBLIC_URL + '/NATURE2/COLORFUL-CLOUDS_1.png',
        alt: 'Saturated Storm Clouds, Central Virginia - July 2024',
        caption: 'Saturated Storm Clouds, Central Virginia - July 2024',
        id: 30
    }, {
        src: process.env.PUBLIC_URL + '/NATURE2/COLORFUL-CLOUDS_2.png',
        alt: 'Saturated Storm Clouds, Central Virginia - July 2024',
        caption: 'Saturated Storm Clouds, Central Virginia - July 2024',
        id: 31
    }, {
        src: process.env.PUBLIC_URL + '/NATURE2/COLORFUL-CLOUDS_3.png',
        alt: 'Saturated Storm Clouds, Central Virginia - July 2024',
        caption: 'Saturated Storm Clouds, Central Virginia - July 2024',
        id: 32
    }, {
        src: process.env.PUBLIC_URL + '/NATURE2/KSP-JULY_1.png',
        alt: 'Dignified Driftwood, Kiptopeke State Park, Cape Charles, Virginia - July 2024',
        caption: 'Dignified Driftwood, Kiptopeke State Park, Cape Charles, Virginia - July 2024',
        id: 33
    }, {
        src: process.env.PUBLIC_URL + '/NATURE2/SH_1.png',
        alt: 'Great Falls,  Shenandoah National Park near Sugar Hollow, Virginia - July 2024',
        caption: 'Great Falls,  Shenandoah National Park near Sugar Hollow, Virginia - July 2024',
        id: 34
    }, {
        src: process.env.PUBLIC_URL + '/NATURE2/SH_2.png',
        alt: 'Great Falls,  Shenandoah National Park near Sugar Hollow, Virginia - July 2024',
        caption: 'Great Falls,  Shenandoah National Park near Sugar Hollow, Virginia - July 2024',
        id: 35
    }, {
        src: process.env.PUBLIC_URL + '/NATURE2/SH_3.png',
        alt: 'Great Falls,  Shenandoah National Park near Sugar Hollow, Virginia - July 2024',
        caption: 'Great Falls,  Shenandoah National Park near Sugar Hollow, Virginia - July 2024',
        id: 36
    }, {
        src: process.env.PUBLIC_URL + '/NATURE2/SH_4.png',
        alt: 'Great Falls,  Shenandoah National Park near Sugar Hollow, Virginia - July 2024',
        caption: 'Great Falls,  Shenandoah National Park near Sugar Hollow, Virginia - July 2024',
        id: 37
    }, {
        src: process.env.PUBLIC_URL + '/NATURE2/SH_5.png',
        alt: 'Great Falls,  Shenandoah National Park near Sugar Hollow, Virginia - July 2024',
        caption: 'Great Falls,  Shenandoah National Park near Sugar Hollow, Virginia - July 2024',
        id: 38
    }, {
        src: process.env.PUBLIC_URL + '/NATURE2/SH_6.png',
        alt: 'Great Falls,  Shenandoah National Park near Sugar Hollow, Virginia - July 2024',
        caption: 'Great Falls,  Shenandoah National Park near Sugar Hollow, Virginia - July 2024',
        id: 39
    }, {
        src: process.env.PUBLIC_URL + '/NATURE2/SH_7.png',
        alt: 'Moormans River,  Shenandoah National Park near Sugar Hollow, Virginia - July 2024',
        caption: 'Moormans River,  Shenandoah National Park near Sugar Hollow, Virginia - July 2024',
        id: 40
    }, {
        src: process.env.PUBLIC_URL + '/NATURE2/SH_8.png',
        alt: 'Great Falls,  Shenandoah National Park near Sugar Hollow, Virginia - July 2024',
        caption: 'Great Falls,  Shenandoah National Park near Sugar Hollow, Virginia - July 2024',
        id: 41
    }, {
        src: process.env.PUBLIC_URL + '/NATURE2/SH_11.png',
        alt: 'Great Falls,  Shenandoah National Park near Sugar Hollow, Virginia - July 2024',
        caption: 'Great Falls,  Shenandoah National Park near Sugar Hollow, Virginia - July 2024',
        id: 42
    }, {
        src: process.env.PUBLIC_URL + '/NATURE2/SH_12.png',
        alt: 'Great Falls,  Shenandoah National Park near Sugar Hollow, Virginia - July 2024',
        caption: 'Great Falls,  Shenandoah National Park near Sugar Hollow, Virginia - July 2024',
        id: 43
    }, {
        src: process.env.PUBLIC_URL + '/NATURE2/SH_13.png',
        alt: 'Great Falls,  Shenandoah National Park near Sugar Hollow, Virginia - July 2024',
        caption: 'Great Falls,  Shenandoah National Park near Sugar Hollow, Virginia - July 2024',
        id: 44
    }, {
        src: process.env.PUBLIC_URL + '/NATURE2/SH_14.png',
        alt: 'Great Falls,  Shenandoah National Park near Sugar Hollow, Virginia - July 2024',
        caption: 'Great Falls,  Shenandoah National Park near Sugar Hollow, Virginia - July 2024',
        id: 45
    }, {
        src: process.env.PUBLIC_URL + '/NATURE2/SH_15.png',
        alt: 'Great Falls,  Shenandoah National Park near Sugar Hollow, Virginia - July 2024',
        caption: 'Great Falls,  Shenandoah National Park near Sugar Hollow, Virginia - July 2024',
        id: 46
    }, {
        src: process.env.PUBLIC_URL + '/NATURE2/SH_16.png',
        alt: 'Great Falls,  Shenandoah National Park near Sugar Hollow, Virginia - July 2024',
        caption: 'Great Falls,  Shenandoah National Park near Sugar Hollow, Virginia - July 2024',
        id: 47
    }, {
        src: process.env.PUBLIC_URL + '/NATURE2/SH_17.png',
        alt: 'Great Falls,  Shenandoah National Park near Sugar Hollow, Virginia - July 2024',
        caption: 'Great Falls,  Shenandoah National Park near Sugar Hollow, Virginia - July 2024',
        id: 48
    }, {
        src: process.env.PUBLIC_URL + '/NATURE2/SH_18.png',
        alt: 'Great Falls,  Shenandoah National Park near Sugar Hollow, Virginia - July 2024',
        caption: 'Great Falls,  Shenandoah National Park near Sugar Hollow, Virginia - July 2024',
        id: 49
    }, {
        src: process.env.PUBLIC_URL + '/NATURE2/STORM-HUE.png',
        alt: 'Sepia Storm Dusk, Central Virginia Virginia - July 2024',
        caption: 'Sepia Storm Dusk, Central Virginia Virginia - July 2024',
        id: 50
    }
];

const NatureGallery2 = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(false);

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

    useEffect((e) => {
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
            window.removeEventListener('keydown', handleKeyDown)
        };
    }, [currentImageIndex, goToNext, goToPrevious]);

    const handleImageLoad = (e) => {
        const { naturalWidth, naturalHeight } = e.target;
        const parentElement = e.target.parentElement;
        if (naturalHeight > naturalWidth) {
            parentElement.classList.add('vertical');
        } else if (naturalHeight === naturalWidth) {
            parentElement.classList.add('square');
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

export default NatureGallery2;