import React, { useContext, useEffect, useRef } from 'react';
import { LikeContext } from './LikeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as SolidHeart, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { gsap } from 'gsap';

const Dropdown = () => {
    const { likedImages, dropdownVisible, setDropdownVisible, dropdownContentVisible, setDropdownContentVisible } = useContext(LikeContext);
    const dropdownRef = useRef(null);
    const iconRef = useRef(null);

    useEffect(() => {
        if (dropdownVisible) {
            gsap.to(iconRef.current, { duration: 0.5, opacity: 1, display: 'block' });
        } else {
            gsap.to(iconRef.current, { duration: 0.5, opacity: 0, display: 'none' });
        }
    }, [dropdownVisible]);

    useEffect(()=> {
        if (dropdownContentVisible) {
            gsap.to(dropdownRef.current, { duration: 0.5, right: 40, opacity: 1, display: 'flex' })
        } else {
            gsap.to(dropdownRef.current, { duration: 0.5, right: -300, opacity: 0, display: 'none' })
        }
    }, [dropdownContentVisible]);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                setDropdownContentVisible(false);
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [setDropdownContentVisible]);

    const handleEmailClick = () => {
        //placeholder for email sending functionality
        alert('Send list to email clicked');
    };

    return (
        <div className='dropdown'>
            <div className='dropdown-icon' ref={iconRef} onClick={() => setDropdownContentVisible(!dropdownContentVisible)}>
                <FontAwesomeIcon icon={SolidHeart} />
                <FontAwesomeIcon icon={dropdownContentVisible ? faArrowRight : faArrowLeft} className='dropdown-arrow' /> 
            </div>
            <div className='dropdown-content' ref={dropdownRef}>
                <ul>
                    {likedImages.map(image => (
                        <li key={image.id}>{image.caption} (ID: {image.id})</li>
                    ))}
                </ul>
                <button className='send-btn' onClick={handleEmailClick}>Send List to Artist</button>
            </div>
        </div>
    );
};

export default Dropdown;