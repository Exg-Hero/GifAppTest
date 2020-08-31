import { getGifs } from "../componentes/helpers/getGifs";
const { useState, useEffect } = require("react");

export const useFetchGifs = (categoria) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getGifs(categoria).then((imgs) => {


    setState({
      data: imgs,
      loading: false,
    });
    });
  }, [categoria]);

  return state;
};
