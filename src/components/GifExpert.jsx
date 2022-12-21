import { useState } from "react";
import { NavBar, SearchBox, GridResults } from "../components"; //Estoy llamando los componentes desde un archivo de barril (index.js dentro de components)

export const GifExpert = () => {

    const [categories, setCategories] = useState([]);

    return (
        <>
            <NavBar/>
            <div className="container mx-auto px-12 py-6">                
                <h1 className="text-4xl font-extrabold text-indigo-600">GifExpert</h1>
                <SearchBox setCategories={ setCategories } />
                {   categories.map((cat) => (
                        <GridResults key={ cat } category={ cat }/>
                    ))                                          
                }
            </div>        
        </>
    );
};
