import React, { useState, useEffect, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import LikeButton from './LikeButton';
import Dropdown from './Dropdown';
import { LikeProvider } from './LikeContext';
import './Gallery.scss';

const images = [
    {
        src: `${process.env.PUBLIC_URL}/LANDSCAPE-IMGS/SKYLINE-SUNRISE_1.png`,
        alt: 'sunrise from blue ridge parkway',
        caption: 'Blue Ridge Parkway Sunrise, June 2024',
        id: 1
    },
    // Add the rest of your images here
    {
        src: `${process.env.PUBLIC_URL}/LANDSCAPE-IMGS/SKYLINE-SUNRISE_2.png`,
        alt: 'sunrise from blue ridge parkway',
        caption: 'Blue Ridge Parkway Sunrise, June 2024',
        id: 2
    },
    {
        src: `${process.env.PUBLIC_URL}/LANDSCAPE-IMGS/SKYLINE-SUNRISE_3.png`,
        alt: 'sunrise from blue ridge parkway',
        caption: 'Blue Ridge Parkway Sunrise, June 2024',
        id: 3
    },
    {
        src: `${process.env.PUBLIC_URL}/LANDSCAPE-IMGS/SKYLINE-SUNRISE_4.png`,
        alt: 'sunrise from blue ridge parkway',
        caption: 'Blue Ridge Parkway Sunrise, June 2024',
        id: 4
    },
    {
        src: `${process.env.PUBLIC_URL}/LANDSCAPE-IMGS/SKYLINE-SUNRISE_5.png`,
        alt: 'sunrise from blue ridge parkway',
        caption: 'Blue Ridge Parkway Sunrise, June 2024',
        id: 5
    },
    {
        src: `${process.env.PUBLIC_URL}/LANDSCAPE-IMGS/SKYLINE-SUNRISE_6.png`,
        alt: 'Albemarle County, VA sunrise',
        caption: 'Albemarle County, VA sunrise, June 2024',
        id: 6
    },
    {
        src: `${process.env.PUBLIC_URL}/LANDSCAPE-IMGS/SKYLINE-SUNRISE_7.png`,
        alt: 'Albemarle County, VA sunrise',
        caption: 'Albemarle County, VA sunrise, June 2024',
        id: 7
    },
    {
        src: `${process.env.PUBLIC_URL}/LANDSCAPE-IMGS/SKYLINE-SUNRISE_8.png`,
        alt: 'sunrise from blue ridge parkway',
        caption: 'Blue Ridge Parkway Sunrise, June 2024',
        id: 8
    },
    {
        src: `${process.env.PUBLIC_URL}/LANDSCAPE-IMGS/SKYLINE-SUNRISE_9.png`,
        alt: 'sunrise from blue ridge parkway',
        caption: 'Blue Ridge Parkway Sunrise, June 2024',
        id: 9
    },
    {
        src: `${process.env.PUBLIC_URL}/LANDSCAPE-IMGS/SKYLINE-SUNRISE_10.png`,
        alt: 'sunrise from blue ridge parkway',
        caption: 'Blue Ridge Parkway Sunrise, June 2024',
        id: 10
    },
    {
        src: `${process.env.PUBLIC_URL}/LANDSCAPE-IMGS/SKYLINE-SUNRISE_11.png`,
        alt: 'sunrise from blue ridge parkway',
        caption: 'Blue Ridge Parkway Sunrise, June 2024',
        id: 11
    },
    {
        src: `${process.env.PUBLIC_URL}/LANDSCAPE-IMGS/SKYLINE-SUNSET_1.png`,
        alt: 'sunset from blue ridge parkway',
        caption: 'Blue Ridge Parkway Sunset, June 2024',
        id: 12
    },
    {
        src: `${process.env.PUBLIC_URL}/LANDSCAPE-IMGS/SKYLINE-SUNSET_2.png`,
        alt: 'sunset from blue ridge parkway',
        caption: 'Blue Ridge Parkway Sunset, June 2024',
        id: 13
    },
    {
        src: `${process.env.PUBLIC_URL}/LANDSCAPE-IMGS/SKYLINE-SUNSET_3.png`,
        alt: 'sunset from blue ridge parkway',
        caption: 'Blue Ridge Parkway Sunset, June 2024',
        id: 14
    },
    {
        src: `${process.env.PUBLIC_URL}/LANDSCAPE-IMGS/SKYLINE-SUNSET_4.png`,
        alt: 'sunset from blue ridge parkway',
        caption: 'Blue Ridge Parkway Sunset, June 2024',
        id: 15
    },
    {
        src: `${process.env.PUBLIC_URL}/LANDSCAPE-IMGS/SKYLINE-SUNSET_5.png`,
        alt: 'sunset from blue ridge parkway',
        caption: 'Blue Ridge Parkway Sunset, June 2024',
        id: 16
    },
    {
        src: `${process.env.PUBLIC_URL}/LANDSCAPE-IMGS/SKYLINE-SUNSET_6.png`,
        alt: 'sunset from blue ridge parkway',
        caption: 'Blue Ridge Parkway Sunset, June 2024',
        id: 17
    },
    {
        src: `${process.env.PUBLIC_URL}/LANDSCAPE-IMGS/SKYLINE-SUNSET_7.png`,
        alt: 'sunset from blue ridge parkway',
        caption: 'Blue Ridge Parkway Sunset, June 2024',
        id: 18
    },
    {
        src: `${process.env.PUBLIC_URL}/LANDSCAPE-IMGS/SKYLINE-SUNSET_8.png`,
        alt: 'sunset from blue ridge parkway',
        caption: 'Blue Ridge Parkway Sunset, June 2024',
        id: 19
    },
    {
        src: `${process.env.PUBLIC_URL}/LANDSCAPE-IMGS/SKYLINE-SUNSET_9.png`,
        alt: 'sunset from blue ridge parkway',
        caption: 'Blue Ridge Parkway Sunset, June 2024',
        id: 20
    },
    {
        src: `${process.env.PUBLIC_URL}/LANDSCAPE-IMGS/SKYLINE-SUNSET_10.png`,
        alt: 'sunset from blue ridge parkway',
        caption: 'Blue Ridge Parkway Sunset, June 2024',
        id: 21
    },
    {
        src: `${process.env.PUBLIC_URL}/LANDSCAPE-IMGS/SKYLINE-SUNSET_11.png`,
        alt: 'sunset from Albemarle County, V',
        caption: 'Albemarle County, VA sunset, June 2024',
        id: 22
    },
    {
        src: `${process.env.PUBLIC_URL}/LANDSCAPE-IMGS/SKYLINE-SUNSET_12.png`,
        alt: 'sunset from Albemarle County, V',
        caption: 'Albemarle County, VA sunset, June 2024',
        id: 23
    },
    {
        src: `${process.env.PUBLIC_URL}/LANDSCAPE-IMGS/SKYLINE-SUNSET_13.png`,
        alt: 'sunset from Albemarle County, V',
        caption: 'Albemarle County, VA sunset, June 2024',
        id: 24
    },
    {
        src: `${process.env.PUBLIC_URL}/LANDSCAPE-IMGS/SKYLINE-SUNSET_14.png`,
        alt: 'sunset from blue ridge parkway',
        caption: 'Blue Ridge Parkway Sunset, June 2024',
        id: 25
    }
];

const LandscapeGallery = () => {
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
            <div className='gallery-container'>
                <div className='grid'>
                    {images.map((image, index) => (
                        <div key={image.id} className='grid-item'>
                            <img 
                                src={image.src} 
                                alt={image.alt} 
                                onClick={() => openLightbox(index)} 
                                className='gallery-img' 
                                onLoad={handleImageLoad}
                            />
                            <LikeButton image={image} images={images} />
                        </div>
                    ))}
                </div>
                {currentImage && (
                    <div className='lightbox' onClick={closeLightbox}>
                        <span className='lightbox-close' onClick={closeLightbox}><FontAwesomeIcon icon={faXmark} /></span>
                        <span className='lightbox-prev' onClick={goToPrevious}><FontAwesomeIcon icon={faArrowLeft} /></span>
                        <div className='lightbox-content'>
                            <img src={currentImage.src} alt={currentImage.alt} className='lightbox-img' />
                            <div className='lightbox-caption'>{currentImage.caption}</div>
                            <LikeButton image={currentImage} images={images} />
                        </div>
                        <span className='lightbox-next' onClick={goToNext}><FontAwesomeIcon icon={faArrowRight} /></span>
                    </div>
                )}
                <Dropdown />
            </div>
        </LikeProvider>
    );
};

export default LandscapeGallery;