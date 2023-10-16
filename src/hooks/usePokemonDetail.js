import { useState, useEffect } from "react";
import axios from "axios";
import { getColorByOpacity, pokemonType, apiUrl } from "../utils";

const usePokemonDetail = (id) => {
  const [isLoading, setIsLoading] = useState(false);
  const [pokemon, setPokemon] = useState({});

  const fetchPokemon = async (id) => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(`${apiUrl}/${id}`);
      const [{ type }] = data.types;
      const backgroundColor = getColorByOpacity(
        pokemonType[type.name].color,
        1
      );
      const pokemon = {
        id,
        name: data.name.toUpperCase(),
        weight: data.weight,
        height: data.height,
        types: data.types,
        backgroundColor,
        avatar: data.sprites.other["official-artwork"].front_default,
        abilities: data.abilities,
        stats: data.stats,
      };
      setPokemon(pokemon);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching pokemon data:", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemon(id);
  }, [id]);

  return {
    isLoading,
    pokemon,
  };
};

export default usePokemonDetail;
