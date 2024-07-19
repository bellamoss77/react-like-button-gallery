import React, { useContext } from "react";
import { LikeContext } from "./LikeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as SolidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';

const LikeButton = ({ image, images }) => {
    const { likes, handleLikeClick } = useContext(LikeContext);
    const liked = image ? likes[image.id] : false;

    return (
        <button 
            className={`like-btn ${liked ? 'liked' : ''}`}
            onClick={() => image && handleLikeClick(image.id, images)}
        >
            <FontAwesomeIcon icon={liked ? SolidHeart : regularHeart} />
        </button>
    )
}

export default LikeButton;
