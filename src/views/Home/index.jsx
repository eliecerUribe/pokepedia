import { useEffect, useState } from "react";
import axios from "axios";
import { apiUrl, pokemonType, getColorByOpacity } from "./utils";
import leftArrow from "../../images/leftArrow.svg";
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
  const [url, setUrl] = useState(apiUrl);
  const [pagination, setPagination] = useState({});

  const fetchPokemons = async (url) => {
    try {
      setIsLoading(true);
      const response = await axios.get(url);
      const { results, next, previous } = response.data;
      const pokemons = await Promise.all(transformData(results));
      setPokemons(pokemons);
      setPagination({ previous, next });
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemons(url);
  }, [url]);

  const onPagination = (pag) => {
    setUrl(pagination[pag]);
  };

  return (
    <div className="container">
      <img
        className="arrow left"
        src={leftArrow}
        alt="leftArrow"
        onClick={() => onPagination("previous")}
      />
      <img
        className="arrow right"
        src={leftArrow}
        alt="rightArrow"
        onClick={() => onPagination("next")}
      />
      {isLoading ? (
        <div>cargando...</div>
      ) : (
        pokemons.map((pokemon, id) => (
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
        ))
      )}
    </div>
  );
}
