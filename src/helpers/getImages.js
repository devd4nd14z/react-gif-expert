export const getImages = async ( category ) => {

    const apiKey = 'HWKYX7oltxXVf88y5ZeZs8OmUJIimpwf';
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${ apiKey }&q=${ category }&limit=12`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifImages = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    return gifImages;
    
}