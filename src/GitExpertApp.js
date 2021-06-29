import React, {useState} from 'react'; // ejecutar rafc
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';



export const GifExpertApp = (  ) => {

     const [categories, setCategories] = useState(['Death Note']);
    // const handleAdd = () => {
    //     //setCategories([...categories, 'Nuevo']);
    //     setCategories( cats => [...cats, 'Nuevo']);

    //    xq no funciona ? setCategories( cats => cats.push('nuevo'));

    // }

return  (
    <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories = {setCategories}/>
        <hr/>
        <ol>
        {
         categories.map(category =>
             <GifGrid  key = {category}
             category = {category} />
         )
        
        }  
        
         </ol>

         {/* <button onClick={handleAdd}>Agregar</button> */}
    </>
    

    );

}

