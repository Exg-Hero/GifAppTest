import React,{useState} from "react";
import { AddCategoria } from "./componentes/AddCategoria";
import { GifGrid } from "./componentes/GifGrid";

export const GifExpertApp = () => {
  //const categorias = ["One Punch", "Samuray X", "Dragon Ball"];
      const [categorias, setCategorias] = useState(["One Punch"]);
    // const handleAdd=()=>{
    //     setCategorias([...categorias,'Dora la exploradora']);
    // }
  return (
    <>
      <h2>GifExpertApp</h2>
      <hr />
      {/* <AddCategoria></AddCategoria> */}
      <AddCategoria setCategorias={setCategorias}></AddCategoria>
      <ul>
        {categorias.map((categorias) => <GifGrid key={categorias} categoria={categorias}></GifGrid>
        )}
      </ul>
    </>
  );
};
