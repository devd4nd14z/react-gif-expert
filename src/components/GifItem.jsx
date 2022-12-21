export const GifItem = ({ image }) => {

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="resize h-52" src={ image.url } alt="Sunset in the mountains"/>
            <div className="px-4 py-4">
                <div className="font-bold text-sm mb-2 capitalize">{ image.title }</div>                
            </div>            
        </div>
    );
    
}
