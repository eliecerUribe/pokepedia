import PropTypes from "prop-types";
import Header from "./Header";
import Bio from "./Bio";
import Stats from "./Stats";
import "./styles.scss";

const PokemonDetails = ({
  id,
  name,
  avatar,
  weight,
  height,
  types,
  backgroundColor,
  abilities,
  stats,
}) => {
  return (
    <div
      className="details-container"
      style={{ background: backgroundColor, borderColor: backgroundColor }}
    >
      <Header name={name} id={id} />
      <Bio
        name={name}
        avatar={avatar}
        weight={weight}
        height={height}
        types={types}
        abilities={abilities}
      />
      <Stats stats={stats} backgroundColor={backgroundColor} />
    </div>
  );
};

PokemonDetails.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  weight: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  types: PropTypes.array.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  abilities: PropTypes.array.isRequired,
  stats: PropTypes.array.isRequired,
};

PokemonDetails.defaultProps = {
  id: "",
  name: "",
  avatar: "",
  weight: 0,
  height: 0,
  types: [],
  backgroundColor: "",
  abilities: [],
  stats: [],
};

export default PokemonDetails;
