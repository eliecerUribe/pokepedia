import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import Pagination from "./Pagination";
import { apiUrl, pokemonType, getColorByOpacity } from "./utils";
import "./styles.scss";

const transformData = (data) =>
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
      <Pagination
        onPreviousClick={() => onPagination("previous")}
        onNextClick={() => onPagination("next")}
      />
      {isLoading ? (
        <div>cargando...</div>
      ) : (
        pokemons.map((pokemon, id) => (
          <Card
            key={`card-${id}`}
            id={pokemon.id}
            name={pokemon.name}
            avatar={pokemon.avatar}
            typeImage={pokemon.typeImage}
            backgroundColor={pokemon.backgroundColor}
          />
        ))
      )}
    </div>
  );
}
