import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GrifGidItem } from "./GrifGidItem";


export const GifGrid = ({ categoria }) => {
const {data:imagenes,loading} = useFetchGifs(categoria);
  return (
      <>
    <h3 className="animate__animated animate__bounce animate__fadeIn">{categoria}</h3>
    {loading && <p className="animate__animated animate__bounce animate__flash">Cargando...</p>}
    <div className='card-grid'>
      {imagenes.map((imagen) => (
        <GrifGidItem key={imagen.id} {...imagen} />
      ))}
    </div>
    </>
  );
};
