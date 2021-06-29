import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';
// import { getGif } from '../helpers/getGifs';

export const GifGrid = ({category}) => {


    
    const {data:images,loading} = useFetchGifs(category);
    // useEffect(() => 
    // {
    //     getGif(category).then(setImages);

    // },[category])

    

    // como esta en este nivel se ejecuta siempre.
    //getGif ();
    return (
        <>  
        <h3> {category}</h3>
        {loading && <p>Loading</p>}
        <div className = "card-grid">
            {
            images.map(img => (
                <GifGridItem key = {img.id}
                {... img} />

            )) }



        </div>
        </> 
    )
}
