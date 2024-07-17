import React, { useState, useRef } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Lightbox from "yet-another-react-lightbox";
import Captions from 'yet-another-react-lightbox/plugins/captions';
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'yet-another-react-lightbox/styles.css';
import Dropdown from "./Dropdown";
import LikeButton from "./LikeButton";
import { LikeProvider } from "./LikeContext";
import './Gallery2.scss';

const PetsGallery2 = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(false);
    const captionsRef = React.useRef(null);

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

    const handleOpen = (index) => {
        setCurrentImageIndex(index);
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    const handleNext = () => {
        const nextIndex = (currentImageIndex + 1) % images.length;
        setCurrentImageIndex(nextIndex);
    };

    const handlePrev = () => {
        const prevIndex = (currentImageIndex - 1 + images.length) % images.length;
        setCurrentImageIndex(prevIndex);
    };

    return (
        <LikeProvider>
            <div className="gallery">
                <div className="photo-album">
                    {images.map((image, index) => {
                        const isVertical = image.height > image.width;
                        const isSquare = image.height === image.width;
                        const itemClass = isSquare ? 'photo-item-square' : (isVertical ? 'photo-item-vertical' : 'photo-item-horizontal');
                        return (
                            <div key={index} className={`photo-item ${itemClass}`} onClick={() => handleOpen(index)}>
                                <LazyLoadImage
                                    src={image.src}
                                    alt={image.alt}
                                    width='100%'
                                    height='auto'
                                    effect='blur'
                                    style={{ objectFit: 'cover' }}
                                />
                                <LikeButton className="gallery-item-like-btn"/>
                            </div>
                        );
                    })}
                </div>
                {isOpen && (
                    <Lightbox
                        plugins={[Captions]}
                        captions={{ ref: captionsRef }}
                        index={currentImageIndex}
                        on={{ view: ({ index: currentImageIndex }) => setCurrentImageIndex(currentImageIndex) }}
                        open={isOpen}
                        close={handleClose}
                        slides={images.map(image => ({
                            src: image.src,
                            alt: image.alt,
                            title: image.caption,
                            width: image.width,
                            height: image.height,
                            content: (
                                <div style={{ position: 'relative' }}>
                                    <img src={image.src} alt={image.alt} style={{ width: '100%', height: 'auto' }} />
                                    <LikeButton className="lightbox-like-btn"/>
                                </div>
                            )
                        }))}
                        currentIndex={currentImageIndex}
                        onPrev={handlePrev}
                        onNext={handleNext}
                        keyboard={{
                            close: 'Escape',
                            next: 'ArrowRight',
                            prev: 'ArrowLeft'
                        }}
                    />
                )}
                <Dropdown />
            </div>
        </LikeProvider>
    );
};

export default PetsGallery2;