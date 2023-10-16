import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Card from "./Card";
import Pagination from "./Pagination";
import { transformData } from "./utils";
import { apiUrl } from "../../utils";
import routes from "../../router/routes";
import "./styles.scss";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  const [url, setUrl] = useState(apiUrl);
  const [pagination, setPagination] = useState({});
  const navigate = useNavigate();

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
            onClick={() => navigate(`${routes.DETAILS}/${pokemon.id}`)}
          />
        ))
      )}
    </div>
  );
}
