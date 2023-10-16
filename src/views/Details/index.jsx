import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import PokemonDetails from "./PokemonDetails";
import { getColorByOpacity, pokemonType } from "../../utils";
import { apiUrl } from "../../utils";

const Details = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState({});

  const fetchPokemon = async (id) => {
    const { data } = await axios.get(`${apiUrl}/${id}`);
    const [{ type }] = data.types;
    const backgroundColor = getColorByOpacity(pokemonType[type.name].color, 1);
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
  };

  useEffect(() => {
    fetchPokemon(id);
  }, [id]);

  return (
    <PokemonDetails
      id={pokemon.id}
      name={pokemon.name}
      avatar={pokemon.avatar}
      weight={pokemon.weight}
      height={pokemon.height}
      types={pokemon.types}
      backgroundColor={pokemon.backgroundColor}
      abilities={pokemon.abilities}
      stats={pokemon.stats}
    />
  );
};

export default Details;
