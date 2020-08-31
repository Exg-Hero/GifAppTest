


export const getGifs = async (categoria) => {
    const url =
      `https://api.giphy.com/v1/gifs/search?q=${encodeURI(categoria)}&limit=10&api_key=RAfjRiIuzXB1B1aUcGytKXP5qrIoxmoP`;
    const resp = fetch(url);
    const { data } = await (await resp).json();
    const gifs = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url,
      };
    });
    return gifs;

  };