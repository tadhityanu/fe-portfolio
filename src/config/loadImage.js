import images from "../assets/Image";

 export const loadImage = async (imageKey) => {
    const imageModule = await images[imageKey]();
    return imageModule.default; // Assuming the images are exported as default
};