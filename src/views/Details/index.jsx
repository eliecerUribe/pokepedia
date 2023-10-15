import { useParams } from "react-router-dom";
const Details = () => {
  const { id: pokemonId } = useParams();
  return <div>Detalle {pokemonId}</div>;
};

export default Details;
