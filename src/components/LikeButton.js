import React, { useContext } from "react";
import { LikeContext } from "./LikeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as SolidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
//import './LikeButton.scss';

const LikeButton = ({ image, images }) => {
    const { likes, handleLikeClick } = useContext(LikeContext);
    const liked = likes[image.id];

    return (
        <button 
            className={`like-btn ${liked ? 'liked' : ''}`}
            onClick={() => handleLikeClick(image.id, images)}
        >
            <FontAwesomeIcon icon={liked ? SolidHeart : regularHeart} />
        </button>
    )
}

export default LikeButton;