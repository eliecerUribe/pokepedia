import { useParams } from "react-router-dom";
import PokemonDetails from "./PokemonDetails";
import usePokemonDetail from "../../hooks/usePokemonDetail";

const Details = () => {
  const { id } = useParams();
  const { isLoading, pokemon } = usePokemonDetail(id);

  if (isLoading) {
    return <h3>Loading...</h3>;
  }
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
