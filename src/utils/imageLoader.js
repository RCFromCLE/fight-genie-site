// Dynamically import all images from the public backgrounds folder
const imageModules = import.meta.glob('/public/fight_genie_backgrounds/*');

// Extract the public URLs (which are the keys in the object returned by glob)
const BACKGROUND_IMAGES = Object.keys(imageModules);

// Optional: Sort the images alphabetically if needed, otherwise they might appear in an arbitrary order
BACKGROUND_IMAGES.sort(); 

export { BACKGROUND_IMAGES };
