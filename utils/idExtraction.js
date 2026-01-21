function extractPublicId(imageUrl) {

    if (!imageUrl || typeof imageUrl !== "string") return null;

    const cleanUrl = imageUrl.split("?")[0];
    const parts = cleanUrl.split('/');
    const uploadIndex = parts.indexOf('upload');

    if (uploadIndex === -1) return null;

    // Skip 'upload' and any transformation parameters (they start with letters like 'w_', 'h_', etc.)
    let startIndex = uploadIndex + 1;
    
    // Skip version (starts with 'v' followed by digits)
    if (parts[startIndex] && parts[startIndex].match(/^v\d+$/)) {
        startIndex++;
    }

    const pathParts = parts.slice(startIndex);
    const publicId = pathParts.join('/').replace(/\.[^/.]+$/, '');

    return publicId;
}

module.exports = extractPublicId;

