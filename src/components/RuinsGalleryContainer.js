import React from "react";
import RuinsGallery from "./RuinsGallery";
import Dropdown from "./Dropdown";
import { getGalleryName } from "./utils";

const galleryFilename = './RuinsGallery.js';

const RuinsGalleryContainer = () => {
    const galleryName = getGalleryName(galleryFilename);

    return (
        <div>
            <RuinsGallery />
            <Dropdown galleryName={galleryName} />
        </div>
    );
};

export default RuinsGalleryContainer;