import { useEffect, useState } from "react";
import axios from "axios";
import { apiUrl, pokemonType, getColorByOpacity } from "./utils";
import "./styles.scss";

const transformData = (data) =>
  data.map(async (elem) => {
    const { name, url } = elem;
    const { data } = await axios.get(url);
    const avatar = data.sprites.other["official-artwork"].front_default;
    const [{ type }] = data.types;
    const backgroundColor = getColorByOpacity(pokemonType[type.name], 0.85);

    return {
      name,
      id: data.id,
      avatar,
      types: data.types,
      typeColor: pokemonType[type.name],
      backgroundColor,
    };
  });

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);

  const fetchPokemons = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(`${apiUrl}/pokemon`);
      const { results } = response.data;
      const pokemons = await Promise.all(transformData(results));
      setPokemons(pokemons);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  if (isLoading) return <div>cargando...</div>;

  return (
    <div className="container">
      {pokemons.map((pokemon, id) => (
        <div
          key={`card-${id}`}
          className="card"
          style={{ background: `${pokemon.backgroundColor}` }}
        >
          <div className="name">{pokemon.name.toUpperCase()}</div>
          <div className="id"># {String(pokemon.id).padStart(4, 0)}</div>
          <img
            src={pokemon.avatar}
            alt={pokemon.name}
            className="avatar"
            width="200"
          />
        </div>
      ))}
    </div>
  );
}
