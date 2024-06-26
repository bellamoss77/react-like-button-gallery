import React, { useState, useEffect, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import LikeButton from './LikeButton';
import Dropdown from './Dropdown';
import { LikeProvider } from "./LikeContext";
import './Gallery.scss';


const images = [
    {
        src: 'https://github.com/bellamoss77/like-button-gallery/blob/main/Images/RUINS/AFTON-RUINS_1.png?raw=true',
        alt: 'Empty "Inn at Afton" Sign, Afton, VA - June 2024',
        caption: 'Empty "Inn at Afton" Sign, Afton, VA - June 2024',
        id: 1
    }, {
        src: 'https://github.com/bellamoss77/like-button-gallery/blob/main/Images/RUINS/AFTON-RUINS_2.png?raw=true',
        alt: 'Side View, Entryway, Abandoned Inn at Afton - June 2024',
        caption: 'Side View, Entryway, Abandoned Inn at Afton - June 2024',
        id: 2
    }, {
        src: 'https://github.com/bellamoss77/like-button-gallery/blob/main/Images/RUINS/AFTON-RUINS_3.png?raw=true',
        alt: 'Graffiti Sunset, Corner of Abandoned Inn at Afton - June 2024',
        caption: 'Graffiti Sunset, Corner of Abandoned Inn at Afton - June 2024',
        id: 3
    }, {
        src: 'https://github.com/bellamoss77/like-button-gallery/blob/main/Images/RUINS/AFTON-RUINS_4.png?raw=true',
        alt: 'Back Patio of Abandoned Inn at Afton at Sunset - June 2024',
        caption: 'Back Patio of Abandoned Inn at Afton at Sunset - June 2024',
        id: 4
    }, {
        src: 'https://github.com/bellamoss77/like-button-gallery/blob/main/Images/RUINS/AFTON-RUINS_5.png?raw=true',
        alt: 'Overgrown Stairs at Abandoned Inn at Afton - June 2024',
        caption: '"KEEP OUT". "FUCK U". Overgrown Stairs at Abandoned Inn at Afton - June 2024',
        id: 5
    }, {
        src: 'https://github.com/bellamoss77/like-button-gallery/blob/main/Images/RUINS/AFTON-RUINS_6.png?raw=true',
        alt: 'Sunset over Pool Area, Abandoned Inn at Afton - June 2024',
        caption: 'Sunset over Pool Area, Abandoned Inn at Afton - June 2024',
        id: 6
    }, {
        src: 'https://github.com/bellamoss77/like-button-gallery/blob/main/Images/RUINS/AFTON-RUINS_7.png?raw=true',
        alt: 'Sunset over Swimming Pool, Abandoned Inn at Afton - June 2024',
        caption: 'Sunset over Swimming Pool (Angle 1), Abandoned Inn at Afton - June 2024',
        id: 7
    }, {
        src: 'https://github.com/bellamoss77/like-button-gallery/blob/main/Images/RUINS/AFTON-RUINS_8.png?raw=true',
        alt: 'Ivy Encroachment, Abandoned Inn at Afton - June 2024',
        caption: 'Ivy Encroachment, Abandoned Inn at Afton - June 2024',
        id: 8
    }, {
        src: 'https://github.com/bellamoss77/like-button-gallery/blob/main/Images/RUINS/AFTON-RUINS_9.png?raw=true',
        alt: 'Lightshade and Bulb by the Pool, Abandoned Inn at Afton - June 2024',
        caption: 'Lightshade and Bulb by the Pool, Abandoned Inn at Afton - June 2024',
        id: 9
    }, {
        src: 'https://github.com/bellamoss77/like-button-gallery/blob/main/Images/RUINS/AFTON-RUINS_10.png?raw=true',
        alt: 'Overgrown Outdoor Walkway, Abandoned Inn at Afton - June 2024',
        caption: 'Overgrown Outdoor Walkway, Abandoned Inn at Afton - June 2024',
        id: 10
    }, {
        src: 'https://github.com/bellamoss77/like-button-gallery/blob/main/Images/RUINS/AFTON-RUINS_11.png?raw=true',
        alt: 'Sunset Over Pool (Angle 2), Abandoned Inn at Afton - June 2024',
        caption: 'Sunset Over Pool (Angle 2), Abandoned Inn at Afton - June 2024',
        id: 11
    }, {
        src: 'https://github.com/bellamoss77/like-button-gallery/blob/main/Images/RUINS/AFTON-RUINS_12.png?raw=true',
        alt: 'Backside of Abandoned Inn at Afton Around Sunset - June 2024',
        caption: 'Backside of Abandoned Inn at Afton Around Sunset - June 2024',
        id: 12
    }, {
        src: 'https://github.com/bellamoss77/like-button-gallery/blob/main/Images/RUINS/AFTON-RUINS_13.png?raw=true',
        alt: '"Here Be Dragons". Shattered Door to Conference Room, Abandoned Inn at Afton - June 2024',
        caption: '"Here Be Dragons". Shattered Door to Conference Room, Abandoned Inn at Afton - June 2024',
        id: 13
    }, {
        src: 'https://github.com/bellamoss77/like-button-gallery/blob/main/Images/RUINS/AFTON-RUINS_14.png?raw=true',
        alt: 'Graffiti Sunset #2, Abandoned Inn at Afton - June 2024',
        caption: 'Graffiti Sunset #2, Abandoned Inn at Afton - June 2024',
        id: 14
    }, {
        src: 'https://github.com/bellamoss77/like-button-gallery/blob/main/Images/RUINS/AFTON-RUINS_15.png?raw=true',
        alt: 'Graffiti-Covered Wall of Abandoned Inn at Afton - June 2024',
        caption: 'Graffiti-Covered Wall of Abandoned Inn at Afton - June 2024',
        id: 15
    }, {
        src: 'https://github.com/bellamoss77/like-button-gallery/blob/main/Images/RUINS/AFTON-RUINS_16.png?raw=true',
        alt: 'Graffiti-Covered Wall #2 of Abandoned Inn at Afton - June 2024',
        caption: 'Graffiti-Covered Wall #2 of Abandoned Inn at Afton - June 2024',
        id: 16
    }, {
        src: 'https://github.com/bellamoss77/like-button-gallery/blob/main/Images/RUINS/AFTON-RUINS_17.png?raw=true',
        alt: 'Ivy Creeps Along Side of Abandoned Inn at Afton - June 2024',
        caption: 'Ivy Creeps Along Side of Abandoned Inn at Afton - June 2024',
        id: 17
    }, {
        src: 'https://github.com/bellamoss77/like-button-gallery/blob/main/Images/RUINS/AFTON-RUINS_18.png?raw=true',
        alt: 'Hole in Mattress, Abandoned Afton Motor Court (Last Original) Cabin - June 2024',
        caption: 'Hole in Mattress, Abandoned Afton Motor Court (Last Original) Cabin - June 2024',
        id: 18
    }, {
        src: 'https://github.com/bellamoss77/like-button-gallery/blob/main/Images/RUINS/AFTON-RUINS_19.png?raw=true',
        alt: 'Decay - A Room in the Abandoned Afton Motor Court (Last Original) Cabin - June 2024',
        caption: 'Decay - A Room in the Abandoned Afton Motor Court (Last Original) Cabin - June 2024',
        id: 19
    }, {
        src: 'https://github.com/bellamoss77/like-button-gallery/blob/main/Images/RUINS/AFTON-RUINS_20.png?raw=true',
        alt: 'Exposed - Mattress in a Room in the Abandoned Afton Motor Court (Last Original) Cabin - June 2024',
        caption: 'Exposed - Mattress in a Room in the Abandoned Afton Motor Court (Last Original) Cabin - June 2024',
        id: 20
    }, {
        src: 'https://github.com/bellamoss77/like-button-gallery/blob/main/Images/RUINS/AFTON-RUINS_21.png?raw=true',
        alt: 'Honeysuckle Stairs, Abandoned Afton Motor Court (Last Original) Cabin - June 2024',
        caption: 'Honeysuckle Stairs, Abandoned Afton Motor Court (Last Original) Cabin - June 2024',
        id: 21
    }, {
        src: 'https://github.com/bellamoss77/like-button-gallery/blob/main/Images/RUINS/AFTON-RUINS_22.png?raw=true',
        alt: 'Fully Reclaimed, Former Site of Skyline Parkway Motel (Demolished in 2007) - June 2024',
        caption: 'Fully Reclaimed, Former Site of Skyline Parkway Motel (Demolished in 2007) - June 2024',
        id: 22
    }, {
        src: 'https://github.com/bellamoss77/like-button-gallery/blob/main/Images/RUINS/AFTON-RUINS_23.png?raw=true',
        alt: 'Reclamation, Former Site of Skyline Parkway Motel (Demolished in 2007) - June 2024',
        caption: 'Reclamation, Former Site of Skyline Parkway Motel (Demolished in 2007) - June 2024',
        id: 23
    }, {
        src: 'https://github.com/bellamoss77/like-button-gallery/blob/main/Images/RUINS/AFTON-RUINS_24.png?raw=true',
        alt: 'Ivy Swallowing Lamppost, Abandoned Afton Motor Court - June 2024',
        caption: 'Ivy Swallowing Lamppost, Abandoned Afton Motor Court - June 2024',
        id: 24
    }, {
        src: 'https://github.com/bellamoss77/like-button-gallery/blob/main/Images/RUINS/AFTON-RUINS_25.png?raw=true',
        alt: 'Stairs to Now-Demolished Skyline Parkway Motel - June 2024',
        caption: 'Stairs to Now-Demolished Skyline Parkway Motel - June 2024',
        id: 25
    }, {
        src: 'https://github.com/bellamoss77/like-button-gallery/blob/main/Images/RUINS/AFTON-RUINS_26.png?raw=true',
        alt: 'Empty Abandoned Howard Johnson Sign, Afton Mountain - June 2024',
        caption: 'Empty Abandoned Howard Johnson Sign, Afton Mountain - June 2024',
        id: 26
    }, {
        src: 'https://github.com/bellamoss77/like-button-gallery/blob/main/Images/RUINS/AFTON-RUINS_27.png?raw=true',
        alt: 'Return to Nature, Abandoned Afton Motor Court Cabin - June 2024',
        caption: 'Return to Nature, Abandoned Afton Motor Court Cabin - June 2024',
        id: 27
    }, {
        src: 'https://github.com/bellamoss77/like-button-gallery/blob/main/Images/RUINS/AFTON-RUINS_28.png?raw=true',
        alt: 'Missing Roof, Abandoned Afton Motor Court Cabin - June 2024',
        caption: 'Missing Roof, Abandoned Afton Motor Court Cabin - June 2024',
        id: 28
    }, {
        src: 'https://github.com/bellamoss77/like-button-gallery/blob/main/Images/RUINS/AFTON-RUINS_29.png?raw=true',
        alt: 'Precariously Perched, Exposed Bathroom in Abandoned Afton Motor Court Cabin - June 2024',
        caption: 'Precariously Perched, Exposed Bathroom in Abandoned Afton Motor Court Cabin - June 2024',
        id: 29
    }, {
        src: 'https://github.com/bellamoss77/like-button-gallery/blob/main/Images/RUINS/AFTON-RUINS_30.png?raw=true',
        alt: 'Peeling Walls, Abandoned Afton Motor Court Cabin - June 2024',
        caption: 'Peeling Walls, Abandoned Afton Motor Court Cabin - June 2024',
        id: 30
    }, {
        src: 'https://github.com/bellamoss77/like-button-gallery/blob/main/Images/RUINS/AFTON-RUINS_31.png?raw=true',
        alt: '"Save Me". "Save Yourself P****". Abandoned Afton Motor Court Cabin - June 2024',
        caption: '"Save Me". "Save Yourself P****". Abandoned Afton Motor Court Cabin - June 2024',
        id: 31
    }, {
        src: 'https://github.com/bellamoss77/like-button-gallery/blob/main/Images/RUINS/AFTON-RUINS_32.png?raw=true',
        alt: 'Missing Wall Section, Abandoned Afton Motor Court Cabin - June 2024',
        caption: 'Missing Wall Section, Abandoned Afton Motor Court Cabin - June 2024',
        id: 32
    }, {
        src: 'https://github.com/bellamoss77/like-button-gallery/blob/main/Images/RUINS/AFTON-RUINS_33.png?raw=true',
        alt: 'Plant Life Prison, Ivy Engulfs Entrance to Room in Abandoned Afton Motor Court Cabin - June 2024',
        caption: 'Plant Life Prison, Ivy Engulfs Entrance to Room in Abandoned Afton Motor Court Cabin - June 2024',
        id: 33
    }, {
        src: 'https://github.com/bellamoss77/like-button-gallery/blob/main/Images/RUINS/AFTON-RUINS_34.png?raw=true',
        alt: 'Ripped Rooftop, Abandoned Afton Motor Court Cabin - June 2024',
        caption: 'Ripped Rooftop, Abandoned Afton Motor Court Cabin - June 2024',
        id: 34
    }, {
        src: 'https://github.com/bellamoss77/like-button-gallery/blob/main/Images/RUINS/AFTON-RUINS_35.png?raw=true',
        alt: 'Plant Life Prison #2, Ivy Engulfs Entrance to Room in Abandoned Afton Motor Court Cabin - June 2024',
        caption: 'Plant Life Prison #2, Ivy Engulfs Entrance to Room in Abandoned Afton Motor Court Cabin - June 2024',
        id: 35
    }, {
        src: 'https://github.com/bellamoss77/like-button-gallery/blob/main/Images/RUINS/AFTON-RUINS_36.png?raw=true',
        alt: 'Grafitti Lightswitch, Abandoned Afton Motor Court Cabin - June 2024',
        caption: 'Grafitti Lightswitch, Abandoned Afton Motor Court Cabin - June 2024',
        id: 36
    }, {
        src: 'https://github.com/bellamoss77/like-button-gallery/blob/main/Images/RUINS/AFTON-RUINS_37.png?raw=true',
        alt: 'Ivy Crush, Ivy Engulfs Entrance to Room in Abandoned Afton Motor Court Cabin - June 2024',
        caption: 'Ivy Crush, Ivy Engulfs Entrance to Room in Abandoned Afton Motor Court Cabin - June 2024',
        id: 37
    }, {
        src: 'https://github.com/bellamoss77/like-button-gallery/blob/main/Images/RUINS/AFTON-RUINS_38.png?raw=true',
        alt: '"No ?" No-Smoking Sign with Cigarette Faded Away, Abandoned Afton Motor Court Welcome Center - June 2024',
        caption: '"No ?" No-Smoking Sign with Cigarette Faded Away, Abandoned Afton Motor Court Welcome Center - June 2024',
        id: 38
    }, {
        src: 'https://github.com/bellamoss77/like-button-gallery/blob/main/Images/RUINS/AFTON-RUINS_39.png?raw=true',
        alt: 'Fully Exposed - Abandoned Afton Motor Court Cabin - June 2024',
        caption: 'Fully Exposed - Abandoned Afton Motor Court Cabin - June 2024',
        id: 39
    }, {
        src: 'https://github.com/bellamoss77/like-button-gallery/blob/main/Images/RUINS/AFTON-RUINS_40.png?raw=true',
        alt: 'Tree Crashes Through Roof, Abandoned Afton Motor Court Cabin - June 2024',
        caption: 'Tree Crashes Through Roof, Abandoned Afton Motor Court Cabin - June 2024',
        id: 40
    }, {
        src: 'https://github.com/bellamoss77/like-button-gallery/blob/main/Images/RUINS/AFTON-RUINS_41.png?raw=true',
        alt: 'Trees Grow in Motel Room, Abandoned Afton Motor Court Cabin - June 2024',
        caption: 'Trees Grow in Motel Room, Abandoned Afton Motor Court Cabin - June 2024',
        id: 41
    }, {
        src: 'https://github.com/bellamoss77/like-button-gallery/blob/main/Images/RUINS/AFTON-RUINS_42.png?raw=true',
        alt: 'Corner Room - Abandoned Afton Motor Court Cabin - June 2024',
        caption: 'Corner Room - Abandoned Afton Motor Court Cabin - June 2024',
        id: 42
    }, {
        src: 'https://github.com/bellamoss77/like-button-gallery/blob/main/Images/RUINS/AFTON-RUINS_43.png?raw=true',
        alt: 'Wide Open - Missing Roof from Abandoned Afton Motor Court Cabin - June 2024',
        caption: 'Wide Open - Missing Roof from Abandoned Afton Motor Court Cabin - June 2024',
        id: 43
    }, {
        src: 'https://github.com/bellamoss77/like-button-gallery/blob/main/Images/RUINS/AFTON-RUINS_44.png?raw=true',
        alt: 'Crooked Cupola, Abandoned Howard Johnson Restaurant, Afton Mountain - June 2024',
        caption: 'Crooked Cupola, Abandoned Howard Johnson Restaurant, Afton Mountain - June 2024',
        id: 44
    }, {
        src: 'https://github.com/bellamoss77/like-button-gallery/blob/main/Images/RUINS/AFTON-RUINS_45.png?raw=true',
        alt: 'Crooked Cupola #2, Abandoned Howard Johnson Restaurant, Afton Mountain - June 2024',
        caption: 'Crooked Cupola #2, Abandoned Howard Johnson Restaurant, Afton Mountain - June 2024',
        id: 45
    }, {
        src: 'https://github.com/bellamoss77/like-button-gallery/blob/main/Images/RUINS/AFTON-RUINS_46.png?raw=true',
        alt: 'Taking Back, Foliage Covers Side of Abandoned Howard Johnson Restaurant, Afton Mountain - June 2024',
        caption: 'Taking Back, Foliage Covers Side of Abandoned Howard Johnson Restaurant, Afton Mountain - June 2024',
        id: 46
    }, {
        src: 'https://github.com/bellamoss77/like-button-gallery/blob/main/Images/RUINS/AFTON-RUINS_47.png?raw=true',
        alt: 'Service Window View From Kitchen, Abandoned Howard Johnson Restaurant, Afton Mountain - June 2024',
        caption: 'Service Window View From Kitchen, Abandoned Howard Johnson Restaurant, Afton Mountain - June 2024',
        id: 47
    }, {
        src: 'https://github.com/bellamoss77/like-button-gallery/blob/main/Images/RUINS/AFTON-RUINS_48.png?raw=true',
        alt: 'Peeling Employees Only Door to Kitchen, Abandoned Howard Johnson Restaurant, Afton Mountain - June 2024',
        caption: 'Peeling Employees Only Door to Kitchen, Abandoned Howard Johnson Restaurant, Afton Mountain - June 2024',
        id: 48
    }, {
        src: 'https://github.com/bellamoss77/like-button-gallery/blob/main/Images/RUINS/AFTON-RUINS_49.png?raw=true',
        alt: 'Service Counter, Abandoned Howard Johnson Restaurant, Afton Mountain - June 2024',
        caption: 'Service Counter, Abandoned Howard Johnson Restaurant, Afton Mountain - June 2024',
        id: 49
    }, {
        src: 'https://github.com/bellamoss77/like-button-gallery/blob/main/Images/RUINS/AFTON-RUINS_50.png?raw=true',
        alt: 'Empty Breadbasket, Abandoned Howard Johnson Restaurant, Afton Mountain - June 2024',
        caption: 'Empty Breadbasket, Abandoned Howard Johnson Restaurant, Afton Mountain - June 2024',
        id: 50
    }, {
        src: 'https://github.com/bellamoss77/like-button-gallery/blob/main/Images/RUINS/AFTON-RUINS_51.png?raw=true',
        alt: 'Ivy Inside, Ivy Grows Inside Breezeway of Abandoned Howard Johnson Restaurant, Afton Mountain - June 2024',
        caption: 'Ivy Inside, Ivy Grows Inside Breezeway of Abandoned Howard Johnson Restaurant, Afton Mountain - June 2024',
        id: 51
    }, {
        src: 'https://github.com/bellamoss77/like-button-gallery/blob/main/Images/RUINS/AFTON-RUINS_52.png?raw=true',
        alt: 'Front Service Counter, Abandoned Howard Johnson Restaurant, Afton Mountain - June 2024',
        caption: 'Front Service Counter, Abandoned Howard Johnson Restaurant, Afton Mountain - June 2024',
        id: 52
    }, {
        src: 'https://github.com/bellamoss77/like-button-gallery/blob/main/Images/RUINS/AFTON-RUINS_53.png?raw=true',
        alt: 'Abandoned Howard Johnson Sign, Afton Mountain - June 2024',
        caption: 'Abandoned Howard Johnson Sign, Afton Mountain - June 2024',
        id: 53
    }
];

const RuinsGallery = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(null);

    const openLightbox = (index) => {
        setCurrentImageIndex(index);
    };

    const closeLightbox = () => {
        setCurrentImageIndex(null);
    };

    const goToPrevious = useCallback((e) => {
        e.stopPropagation();
        setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length);
    }, [currentImageIndex]);

    const goToNext = useCallback((e) => {
        e.stopPropagation();
        setCurrentImageIndex((currentImageIndex + 1) % images.length);
    }, [currentImageIndex]);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowLeft') {
                goToPrevious(e);
            } else if (e.key === 'ArrowRight') {
                goToNext(e);
            } else if (e.key === 'Escape') {
                closeLightbox();
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
                        <div className="lightbox-content">
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

export default RuinsGallery;