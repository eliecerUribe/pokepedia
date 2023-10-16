import PropTypes from "prop-types";
import weightImg from "../../../../images/weight.svg";
import heightImg from "../../../../images/straighten.svg";
import "./styles.scss";

const Bio = ({ name, avatar, weight, height, types, abilities }) => {
  return (
    <div className="bio">
      <div className="main-info">
        <div className="title">Weight</div>
        <div className="weight">
          <img src={weightImg} alt="weight" width="24" /> {weight} kg
        </div>
        <div className="title">Height</div>
        <div className="height">
          <img src={heightImg} alt="height" width="24" /> {height} m
        </div>
        <div className="types">
          {types?.map(({ type }) => (
            <div className="type" key={type.name}>
              {type.name}
            </div>
          ))}
        </div>
      </div>
      <img src={avatar} alt={name} width="265" />
      <div className="abilities">
        <div className="title">Abilities</div>
        {abilities?.map(({ ability }) => (
          <div className="ability" key={ability.name}>
            {ability.name.charAt(0).toUpperCase() + ability.name.slice(1)}
          </div>
        ))}
      </div>
    </div>
  );
};

Bio.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  weight: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  types: PropTypes.array.isRequired,
  abilities: PropTypes.array.isRequired,
};

export default Bio;
