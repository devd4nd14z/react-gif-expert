import { useEffect, useState } from "react";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GridResults = ({ category }) => {

    const { gifImages, isLoading } = useFetchGifs ( category ); //Se obtienen los datos desde un custom hook (../hooks/useFetchGifs)

    return (        
        <div className="w-full mt-6 border-0">
            <div className="block rounded-lg shadow-lg bg-white text-center">

                {   //Muestra mensaje de cargando mientras se obtienen los resultados del fetch API
                    isLoading && ( <p className="font-bold text-left text-red-600">Cargando...</p> ) 
                } 

                <div className="py-3 px-6 border-gray-300 rounded-t-lg bg-gray-200">
                    <h1 className="text-3xl font-bold text-left">{category}</h1>
                </div>
                <div className="p-6 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-6 gap-6">
                    {   gifImages.map((gif) => (
                            <GifItem key={ gif.id } image={ gif }/>
                        ))
                    }                     
                </div>                    

            </div>
        </div>        
    );
};
