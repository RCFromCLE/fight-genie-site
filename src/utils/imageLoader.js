// Use import.meta.glob to get the URLs of the images without importing them
const imageModules = import.meta.glob('/public/fight_genie_backgrounds/*', { eager: false, as: 'url' });

// The values in the object returned by glob are promises that resolve to the URLs
// We need to handle these promises (though for 'url' it might resolve immediately in build)
// A simpler approach for just getting URLs is to rely on Vite resolving them directly.
// Let's adjust how we extract the URLs. The keys are the original glob paths,
// and the values are the resolved public URLs (or promises resolving to them).
// For static URLs from /public, the keys themselves are what we need after removing '/public'.

const BACKGROUND_IMAGES = Object.keys(imageModules).map(path => path.replace('/public', ''));

// Optional: Sort the images alphabetically if needed, otherwise they might appear in an arbitrary order
BACKGROUND_IMAGES.sort(); 

export { BACKGROUND_IMAGES };
