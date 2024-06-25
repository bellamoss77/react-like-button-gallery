import React from "react";
import LandscapeGallery from "./LandscapeGallery";
import Dropdown from "./Dropdown";
import { getGalleryName } from "./utils";

const galleryFileName = './LandscapeGallery.js';

const LandscapeGalleryContainer = () => {
    const galleryName = getGalleryName(galleryFileName);

    return (
        <div>
            <LandscapeGallery />
            <Dropdown galleryName={galleryName} />
        </div>
    );
};

export default LandscapeGalleryContainer