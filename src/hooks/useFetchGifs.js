import { useEffect, useState } from "react";
import { getImages } from "../helpers/getImages";

export const useFetchGifs = ( category ) => {

    const [gifImages, setGifImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getGiphyImages = async() => {
        const newImages = await getImages(category);
        setGifImages(newImages);
        setIsLoading(false);
    };

    useEffect(() => {
      getGiphyImages();    
    }, []);

    return {
        gifImages,
        isLoading
    }
}
