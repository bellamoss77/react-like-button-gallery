import React, { createContext, useState } from 'react';

export const LikeContext = createContext();

export const LikeProvider = ({ children }) => {
    const [likedImages, setLikedImages] = useState([]);
    const [likes, setLikes] = useState({});
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [dropdownContentVisible, setDropdownContentVisible] = useState(false);

    const handleLikeClick = (imageId, images) => {
        setLikes((prevLikes) => {
            const newLikes = { ...prevLikes };
            newLikes[imageId] = !newLikes[imageId];
            if (newLikes[imageId]) {
                setLikedImages((prevLikedImages) => [
                    ...prevLikedImages,
                    images.find((img) => img.id === imageId),
                ]);
            } else {
                setLikedImages((prevLikedImages) =>
                    prevLikedImages.filter((img) => img.id !== imageId)
                );
            }
            return newLikes;
        });
        if (Object.values(likes).filter(like => like).length === 1) {
            setDropdownVisible(true);
        }
    };

    return (
        <LikeContext.Provider value={{
            likedImages,
            setLikedImages,
            likes,
            handleLikeClick,
            dropdownVisible,
            setDropdownVisible,
            dropdownContentVisible,
            setDropdownContentVisible
        }}>
            {children}
        </LikeContext.Provider>
    );
};
