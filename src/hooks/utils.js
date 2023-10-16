import axios from "axios";
import { pokemonType, getColorByOpacity } from "../utils";

export const transformData = (data) =>
  data.map(async (elem) => {
    const { name, url } = elem;
    const { data } = await axios.get(url);
    const avatar = data.sprites.other["official-artwork"].front_default;
    const [{ type }] = data.types;
    const backgroundColor = getColorByOpacity(
      pokemonType[type.name].color,
      0.85
    );

    return {
      name,
      id: data.id,
      avatar,
      types: data.types,
      typeColor: pokemonType[type.name].color,
      typeImage: pokemonType[type.name].img,
      backgroundColor,
    };
  });
