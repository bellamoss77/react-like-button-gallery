import React from "react";
import PetsGallery from "./PetsGallery";
import Dropdown from "./Dropdown";
import { getGalleryName } from "./utils";

const galleryFilename = './PetsGallery.js';

const PetsGalleryContainer = () => {
    const galleryName = getGalleryName(galleryFilename);

    return (
        <div>
            <PetsGallery />
            <Dropdown galleryName={galleryName} />
        </div>
    );
};

export default PetsGalleryContainer;