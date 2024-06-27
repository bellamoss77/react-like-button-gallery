import React, { useState, useEffect, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import LikeButton from './LikeButton';
import Dropdown from './Dropdown';
import { LikeProvider } from "./LikeContext";
import './Gallery.scss';


const images = [
    {
        src: `${process.env.PUBLIC_URL}/RUINS/AFTON-RUINS_1.png`,
        alt: 'Empty "Inn at Afton" Sign, Afton, VA - June 2024',
        caption: 'Empty "Inn at Afton" Sign, Afton, VA - June 2024',
        id: 1
    }, {
        src: `${process.env.PUBLIC_URL}/RUINS/AFTON-RUINS_2.png`,
        alt: 'Side View, Entryway, Abandoned Inn at Afton - June 2024',
        caption: 'Side View, Entryway, Abandoned Inn at Afton - June 2024',
        id: 2
    }, {
        src: `${process.env.PUBLIC_URL}/RUINS/AFTON-RUINS_3.png`,
        alt: 'Graffiti Sunset, Corner of Abandoned Inn at Afton - June 2024',
        caption: 'Graffiti Sunset, Corner of Abandoned Inn at Afton - June 2024',
        id: 3
    }, {
        src: `${process.env.PUBLIC_URL}/RUINS/AFTON-RUINS_4.png`,
        alt: 'Back Patio of Abandoned Inn at Afton at Sunset - June 2024',
        caption: 'Back Patio of Abandoned Inn at Afton at Sunset - June 2024',
        id: 4
    }, {
        src: `${process.env.PUBLIC_URL}/RUINS/AFTON-RUINS_5.png`,
        alt: 'Overgrown Stairs at Abandoned Inn at Afton - June 2024',
        caption: '"KEEP OUT". "FUCK U". Overgrown Stairs at Abandoned Inn at Afton - June 2024',
        id: 5
    }, {
        src: `${process.env.PUBLIC_URL}/RUINS/AFTON-RUINS_6.png`,
        alt: 'Sunset over Pool Area, Abandoned Inn at Afton - June 2024',
        caption: 'Sunset over Pool Area, Abandoned Inn at Afton - June 2024',
        id: 6
    }, {
        src: `${process.env.PUBLIC_URL}/RUINS/AFTON-RUINS_7.png`,
        alt: 'Sunset over Swimming Pool, Abandoned Inn at Afton - June 2024',
        caption: 'Sunset over Swimming Pool (Angle 1), Abandoned Inn at Afton - June 2024',
        id: 7
    }, {
        src: `${process.env.PUBLIC_URL}/RUINS/AFTON-RUINS_8.png`,
        alt: 'Ivy Encroachment, Abandoned Inn at Afton - June 2024',
        caption: 'Ivy Encroachment, Abandoned Inn at Afton - June 2024',
        id: 8
    }, {
        src: `${process.env.PUBLIC_URL}/RUINS/AFTON-RUINS_9.png`,
        alt: 'Lightshade and Bulb by the Pool, Abandoned Inn at Afton - June 2024',
        caption: 'Lightshade and Bulb by the Pool, Abandoned Inn at Afton - June 2024',
        id: 9
    }, {
        src: `${process.env.PUBLIC_URL}/RUINS/AFTON-RUINS_10.png`,
        alt: 'Overgrown Outdoor Walkway, Abandoned Inn at Afton - June 2024',
        caption: 'Overgrown Outdoor Walkway, Abandoned Inn at Afton - June 2024',
        id: 10
    }, {
        src: `${process.env.PUBLIC_URL}/RUINS/AFTON-RUINS_11.png`,
        alt: 'Sunset Over Pool (Angle 2), Abandoned Inn at Afton - June 2024',
        caption: 'Sunset Over Pool (Angle 2), Abandoned Inn at Afton - June 2024',
        id: 11
    }, {
        src: `${process.env.PUBLIC_URL}/RUINS/AFTON-RUINS_12.png`,
        alt: 'Backside of Abandoned Inn at Afton Around Sunset - June 2024',
        caption: 'Backside of Abandoned Inn at Afton Around Sunset - June 2024',
        id: 12
    }, {
        src: `${process.env.PUBLIC_URL}/RUINS/AFTON-RUINS_13.png`,
        alt: '"Here Be Dragons". Shattered Door to Conference Room, Abandoned Inn at Afton - June 2024',
        caption: '"Here Be Dragons". Shattered Door to Conference Room, Abandoned Inn at Afton - June 2024',
        id: 13
    }, {
        src: `${process.env.PUBLIC_URL}/RUINS/AFTON-RUINS_14.png`,
        alt: 'Graffiti Sunset #2, Abandoned Inn at Afton - June 2024',
        caption: 'Graffiti Sunset #2, Abandoned Inn at Afton - June 2024',
        id: 14
    }, {
        src: `${process.env.PUBLIC_URL}/RUINS/AFTON-RUINS_15.png`,
        alt: 'Graffiti-Covered Wall of Abandoned Inn at Afton - June 2024',
        caption: 'Graffiti-Covered Wall of Abandoned Inn at Afton - June 2024',
        id: 15
    }, {
        src: `${process.env.PUBLIC_URL}/RUINS/AFTON-RUINS_16.png`,
        alt: 'Graffiti-Covered Wall #2 of Abandoned Inn at Afton - June 2024',
        caption: 'Graffiti-Covered Wall #2 of Abandoned Inn at Afton - June 2024',
        id: 16
    }, {
        src: `${process.env.PUBLIC_URL}/RUINS/AFTON-RUINS_17.png`,
        alt: 'Ivy Creeps Along Side of Abandoned Inn at Afton - June 2024',
        caption: 'Ivy Creeps Along Side of Abandoned Inn at Afton - June 2024',
        id: 17
    }, {
        src: `${process.env.PUBLIC_URL}/RUINS/AFTON-RUINS_18.png`,
        alt: 'Hole in Mattress, Abandoned Afton Motor Court (Last Original) Cabin - June 2024',
        caption: 'Hole in Mattress, Abandoned Afton Motor Court (Last Original) Cabin - June 2024',
        id: 18
    }, {
        src: `${process.env.PUBLIC_URL}/RUINS/AFTON-RUINS_19.png`,
        alt: 'Decay - A Room in the Abandoned Afton Motor Court (Last Original) Cabin - June 2024',
        caption: 'Decay - A Room in the Abandoned Afton Motor Court (Last Original) Cabin - June 2024',
        id: 19
    }, {
        src: `${process.env.PUBLIC_URL}/RUINS/AFTON-RUINS_20.png`,
        alt: 'Exposed - Mattress in a Room in the Abandoned Afton Motor Court (Last Original) Cabin - June 2024',
        caption: 'Exposed - Mattress in a Room in the Abandoned Afton Motor Court (Last Original) Cabin - June 2024',
        id: 20
    }, {
        src: `${process.env.PUBLIC_URL}/RUINS/AFTON-RUINS_21.png`,
        alt: 'Honeysuckle Stairs, Abandoned Afton Motor Court (Last Original) Cabin - June 2024',
        caption: 'Honeysuckle Stairs, Abandoned Afton Motor Court (Last Original) Cabin - June 2024',
        id: 21
    }, {
        src: `${process.env.PUBLIC_URL}/RUINS/AFTON-RUINS_22.png`,
        alt: 'Fully Reclaimed, Former Site of Skyline Parkway Motel (Demolished in 2007) - June 2024',
        caption: 'Fully Reclaimed, Former Site of Skyline Parkway Motel (Demolished in 2007) - June 2024',
        id: 22
    }, {
        src: `${process.env.PUBLIC_URL}/RUINS/AFTON-RUINS_23.png`,
        alt: 'Reclamation, Former Site of Skyline Parkway Motel (Demolished in 2007) - June 2024',
        caption: 'Reclamation, Former Site of Skyline Parkway Motel (Demolished in 2007) - June 2024',
        id: 23
    }, {
        src: `${process.env.PUBLIC_URL}/RUINS/AFTON-RUINS_24.png`,
        alt: 'Ivy Swallowing Lamppost, Abandoned Afton Motor Court - June 2024',
        caption: 'Ivy Swallowing Lamppost, Abandoned Afton Motor Court - June 2024',
        id: 24
    }, {
        src: `${process.env.PUBLIC_URL}/RUINS/AFTON-RUINS_25.png`,
        alt: 'Stairs to Now-Demolished Skyline Parkway Motel - June 2024',
        caption: 'Stairs to Now-Demolished Skyline Parkway Motel - June 2024',
        id: 25
    }, {
        src: `${process.env.PUBLIC_URL}/RUINS/AFTON-RUINS_26.png`,
        alt: 'Empty Abandoned Howard Johnson Sign, Afton Mountain - June 2024',
        caption: 'Empty Abandoned Howard Johnson Sign, Afton Mountain - June 2024',
        id: 26
    }, {
        src: `${process.env.PUBLIC_URL}/RUINS/AFTON-RUINS_27.png`,
        alt: 'Return to Nature, Abandoned Afton Motor Court Cabin - June 2024',
        caption: 'Return to Nature, Abandoned Afton Motor Court Cabin - June 2024',
        id: 27
    }, {
        src: `${process.env.PUBLIC_URL}/RUINS/AFTON-RUINS_28.png`,
        alt: 'Missing Roof, Abandoned Afton Motor Court Cabin - June 2024',
        caption: 'Missing Roof, Abandoned Afton Motor Court Cabin - June 2024',
        id: 28
    }, {
        src: `${process.env.PUBLIC_URL}/RUINS/AFTON-RUINS_29.png`,
        alt: 'Precariously Perched, Exposed Bathroom in Abandoned Afton Motor Court Cabin - June 2024',
        caption: 'Precariously Perched, Exposed Bathroom in Abandoned Afton Motor Court Cabin - June 2024',
        id: 29
    }, {
        src: `${process.env.PUBLIC_URL}/RUINS/AFTON-RUINS_30.png`,
        alt: 'Peeling Walls, Abandoned Afton Motor Court Cabin - June 2024',
        caption: 'Peeling Walls, Abandoned Afton Motor Court Cabin - June 2024',
        id: 30
    }, {
        src: `${process.env.PUBLIC_URL}/RUINS/AFTON-RUINS_31.png`,
        alt: '"Save Me". "Save Yourself P****". Abandoned Afton Motor Court Cabin - June 2024',
        caption: '"Save Me". "Save Yourself P****". Abandoned Afton Motor Court Cabin - June 2024',
        id: 31
    }, {
        src: `${process.env.PUBLIC_URL}/RUINS/AFTON-RUINS_32.png`,
        alt: 'Missing Wall Section, Abandoned Afton Motor Court Cabin - June 2024',
        caption: 'Missing Wall Section, Abandoned Afton Motor Court Cabin - June 2024',
        id: 32
    }, {
        src: `${process.env.PUBLIC_URL}/RUINS/AFTON-RUINS_33.png`,
        alt: 'Plant Life Prison, Ivy Engulfs Entrance to Room in Abandoned Afton Motor Court Cabin - June 2024',
        caption: 'Plant Life Prison, Ivy Engulfs Entrance to Room in Abandoned Afton Motor Court Cabin - June 2024',
        id: 33
    }, {
        src: `${process.env.PUBLIC_URL}/RUINS/AFTON-RUINS_34.png`,
        alt: 'Ripped Rooftop, Abandoned Afton Motor Court Cabin - June 2024',
        caption: 'Ripped Rooftop, Abandoned Afton Motor Court Cabin - June 2024',
        id: 34
    }, {
        src: `${process.env.PUBLIC_URL}/RUINS/AFTON-RUINS_35.png`,
        alt: 'Plant Life Prison #2, Ivy Engulfs Entrance to Room in Abandoned Afton Motor Court Cabin - June 2024',
        caption: 'Plant Life Prison #2, Ivy Engulfs Entrance to Room in Abandoned Afton Motor Court Cabin - June 2024',
        id: 35
    }, {
        src: `${process.env.PUBLIC_URL}/RUINS/AFTON-RUINS_36.png`,
        alt: 'Grafitti Lightswitch, Abandoned Afton Motor Court Cabin - June 2024',
        caption: 'Grafitti Lightswitch, Abandoned Afton Motor Court Cabin - June 2024',
        id: 36
    }, {
        src: `${process.env.PUBLIC_URL}/RUINS/AFTON-RUINS_37.png`,
        alt: 'Ivy Crush, Ivy Engulfs Entrance to Room in Abandoned Afton Motor Court Cabin - June 2024',
        caption: 'Ivy Crush, Ivy Engulfs Entrance to Room in Abandoned Afton Motor Court Cabin - June 2024',
        id: 37
    }, {
        src: `${process.env.PUBLIC_URL}/RUINS/AFTON-RUINS_38.png`,
        alt: '"No ?" No-Smoking Sign with Cigarette Faded Away, Abandoned Afton Motor Court Welcome Center - June 2024',
        caption: '"No ?" No-Smoking Sign with Cigarette Faded Away, Abandoned Afton Motor Court Welcome Center - June 2024',
        id: 38
    }, {
        src: `${process.env.PUBLIC_URL}/RUINS/AFTON-RUINS_39.png`,
        alt: 'Fully Exposed - Abandoned Afton Motor Court Cabin - June 2024',
        caption: 'Fully Exposed - Abandoned Afton Motor Court Cabin - June 2024',
        id: 39
    }, {
        src: `${process.env.PUBLIC_URL}/RUINS/AFTON-RUINS_40.png`,
        alt: 'Tree Crashes Through Roof, Abandoned Afton Motor Court Cabin - June 2024',
        caption: 'Tree Crashes Through Roof, Abandoned Afton Motor Court Cabin - June 2024',
        id: 40
    }, {
        src: `${process.env.PUBLIC_URL}/RUINS/AFTON-RUINS_41.png`,
        alt: 'Trees Grow in Motel Room, Abandoned Afton Motor Court Cabin - June 2024',
        caption: 'Trees Grow in Motel Room, Abandoned Afton Motor Court Cabin - June 2024',
        id: 41
    }, {
        src: `${process.env.PUBLIC_URL}/RUINS/AFTON-RUINS_42.png`,
        alt: 'Corner Room - Abandoned Afton Motor Court Cabin - June 2024',
        caption: 'Corner Room - Abandoned Afton Motor Court Cabin - June 2024',
        id: 42
    }, {
        src: `${process.env.PUBLIC_URL}/RUINS/AFTON-RUINS_43.png`,
        alt: 'Wide Open - Missing Roof from Abandoned Afton Motor Court Cabin - June 2024',
        caption: 'Wide Open - Missing Roof from Abandoned Afton Motor Court Cabin - June 2024',
        id: 43
    }, {
        src: `${process.env.PUBLIC_URL}/RUINS/AFTON-RUINS_44.png`,
        alt: 'Crooked Cupola, Abandoned Howard Johnson Restaurant, Afton Mountain - June 2024',
        caption: 'Crooked Cupola, Abandoned Howard Johnson Restaurant, Afton Mountain - June 2024',
        id: 44
    }, {
        src: `${process.env.PUBLIC_URL}/RUINS/AFTON-RUINS_45.png`,
        alt: 'Crooked Cupola #2, Abandoned Howard Johnson Restaurant, Afton Mountain - June 2024',
        caption: 'Crooked Cupola #2, Abandoned Howard Johnson Restaurant, Afton Mountain - June 2024',
        id: 45
    }, {
        src: `${process.env.PUBLIC_URL}/RUINS/AFTON-RUINS_46.png`,
        alt: 'Taking Back, Foliage Covers Side of Abandoned Howard Johnson Restaurant, Afton Mountain - June 2024',
        caption: 'Taking Back, Foliage Covers Side of Abandoned Howard Johnson Restaurant, Afton Mountain - June 2024',
        id: 46
    }, {
        src: `${process.env.PUBLIC_URL}/RUINS/AFTON-RUINS_47.png`,
        alt: 'Service Window View From Kitchen, Abandoned Howard Johnson Restaurant, Afton Mountain - June 2024',
        caption: 'Service Window View From Kitchen, Abandoned Howard Johnson Restaurant, Afton Mountain - June 2024',
        id: 47
    }, {
        src: `${process.env.PUBLIC_URL}/RUINS/AFTON-RUINS_48.png`,
        alt: 'Peeling Employees Only Door to Kitchen, Abandoned Howard Johnson Restaurant, Afton Mountain - June 2024',
        caption: 'Peeling Employees Only Door to Kitchen, Abandoned Howard Johnson Restaurant, Afton Mountain - June 2024',
        id: 48
    }, {
        src: `${process.env.PUBLIC_URL}/RUINS/AFTON-RUINS_49.png`,
        alt: 'Service Counter, Abandoned Howard Johnson Restaurant, Afton Mountain - June 2024',
        caption: 'Service Counter, Abandoned Howard Johnson Restaurant, Afton Mountain - June 2024',
        id: 49
    }, {
        src: `${process.env.PUBLIC_URL}/RUINS/AFTON-RUINS_50.png`,
        alt: 'Empty Breadbasket, Abandoned Howard Johnson Restaurant, Afton Mountain - June 2024',
        caption: 'Empty Breadbasket, Abandoned Howard Johnson Restaurant, Afton Mountain - June 2024',
        id: 50
    }, {
        src: `${process.env.PUBLIC_URL}/RUINS/AFTON-RUINS_51.png`,
        alt: 'Ivy Inside, Ivy Grows Inside Breezeway of Abandoned Howard Johnson Restaurant, Afton Mountain - June 2024',
        caption: 'Ivy Inside, Ivy Grows Inside Breezeway of Abandoned Howard Johnson Restaurant, Afton Mountain - June 2024',
        id: 51
    }, {
        src: `${process.env.PUBLIC_URL}/RUINS/AFTON-RUINS_52.png`,
        alt: 'Front Service Counter, Abandoned Howard Johnson Restaurant, Afton Mountain - June 2024',
        caption: 'Front Service Counter, Abandoned Howard Johnson Restaurant, Afton Mountain - June 2024',
        id: 52
    }, {
        src: `${process.env.PUBLIC_URL}/RUINS/AFTON-RUINS_53.png`,
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