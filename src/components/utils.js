export const getGalleryName = (filename) => {
    const parts = filename.split('/');
    const file = parts[parts.length - 1];
    const galleryName = file.split('.')[0].replace(/-/g, ' ');
    return galleryName.charAt(0).toUpperCase() + galleryName.slice(1);
  };
  