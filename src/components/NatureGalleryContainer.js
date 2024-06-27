import React from "react";
import LandscapeGallery from "./LandscapeGallery";
import Dropdown from "./Dropdown";
import { getGalleryName } from "./utils";

const galleryFilename = './NatureGallery.js';

const LandscapeGalleryContainer = () => {
    const galleryName = getGalleryName(galleryFilename);

    return (
        <div>
            <LandscapeGallery />
            <Dropdown galleryName={galleryName} />
        </div>
    );
};

export default LandscapeGalleryContainer;