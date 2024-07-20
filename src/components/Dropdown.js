import React, { useContext, useState, useRef, useEffect } from 'react';
import { LikeContext } from './LikeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { gsap } from 'gsap';
import SendEmailModal from './SendEmailModal';

const Dropdown = ({ galleryName }) => {
    const {
        likedImages, dropdownVisible, setDropdownVisible,
        dropdownContentVisible, setDropdownContentVisible
    } = useContext(LikeContext);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    const iconRef = useRef(null);

    useEffect(() => {
        if (likedImages.length > 0) {
            setDropdownVisible(true);
        } else {
            setDropdownVisible(false);
            setDropdownContentVisible(false);
        }
    }, [likedImages, setDropdownVisible, setDropdownContentVisible]);

    useEffect(() => {
        if (dropdownVisible) {
            gsap.to(iconRef.current, { duration: 0.5, opacity: 1, display: 'block' });
        } else {
            gsap.to(iconRef.current, { duration: 0.5, opacity: 0, display: 'none' });
        }
    }, [dropdownVisible]);

    useEffect(() => {
        if (dropdownContentVisible) {
            gsap.to(dropdownRef.current, { duration: 0.5, right: 80, opacity: 1, display: 'flex' });
        } else {
            gsap.to(dropdownRef.current, { duration: 0.5, right: -300, opacity: 0, display: 'none' });
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

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <>
            <div className='liked-dropdown'>
                <div 
                    className='liked-dropdown-icon' 
                    ref={iconRef}
                    onClick={() => setDropdownContentVisible(!dropdownContentVisible)}
                >
                    <FontAwesomeIcon icon={faHeart} />
                    <FontAwesomeIcon 
                        icon={dropdownContentVisible ? faArrowRight : faArrowLeft} 
                        className='liked-dropdown-arrow' 
                    />
                </div>
                <div className='liked-dropdown-content' ref={dropdownRef}>
                    <ul>
                        {likedImages.map(image => (
                            <li key={image.id}>{image.caption} (ID: {image.id})</li>
                        ))}
                    </ul>
                    <button className="send-btn" onClick={openModal}>Send list to email</button>
                </div>
            </div>
            <SendEmailModal 
                isOpen={modalIsOpen} 
                onRequestClose={closeModal} 
                likedImages={likedImages}
                galleryName={galleryName}
            />
        </>
    );
};

export default Dropdown;
