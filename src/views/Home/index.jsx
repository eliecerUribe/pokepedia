import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "./Card";
import ArrowIcon from "./ArrowIcon";
import { apiUrl } from "../../utils";
import routes from "../../router/routes";
import usePokemons from "../../hooks/usePokemons";
import "./styles.scss";

export default function Home() {
  const [url, setUrl] = useState(apiUrl);
  const navigate = useNavigate();

  const { isLoading, pokemons, pagination } = usePokemons(url);

  const onPagination = (pag) => {
    setUrl(pagination[pag]);
  };

  return (
    <div>
      <ArrowIcon direction="left" onClick={() => onPagination("previous")} />
      <div className="container">
        {isLoading ? (
          <h3>Loading...</h3>
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
      <ArrowIcon direction="right" onClick={() => onPagination("next")} />
    </div>
  );
}
