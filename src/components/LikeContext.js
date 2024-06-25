import React, { createContext, useState } from 'react';

export const LikeContext = createContext();

export const LikeProvider = ({ children }) => {
    const [likes, setLikes] = useState({});
    const [likedImages, setLikedImages] = useState([]);
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [dropdownContentVisible, setDropdownContentVisible] = useState(false);

    const handleLikeClick = (id, images) => {
        setLikes((prevLikes) => {
            const newLikes = {
                ...prevLikes,
                [id]: !prevLikes[id],
            };
            updateLikedImages(newLikes, images);
            return newLikes;
        });
    };

    const updateLikedImages = (newLikes, images) => {
        const liked = Object.keys(newLikes)
        .filter(key => newLikes[key])
        .map(id => images.find(img => img.id === Number(id)));
        setLikedImages(liked);
        setDropdownVisible(liked.length > 0);
        setDropdownContentVisible(false);
    };

    return (
        <LikeContext.Provider value={{ likes, handleLikeClick, likedImages, dropdownVisible, setDropdownVisible, dropdownContentVisible, setDropdownContentVisible }}>
            {children}
        </LikeContext.Provider>
    );
};