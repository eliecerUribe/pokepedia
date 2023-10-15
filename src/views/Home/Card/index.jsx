import PropTypes from "prop-types";
import pokeball from "../../../images/pokeball1.svg";
import "./styles.scss";

const Card = ({ id, name, avatar, typeImage, backgroundColor }) => {
  return (
    <div className="card" style={{ background: `${backgroundColor}` }}>
      <div className="name">
        {name.toUpperCase()}
        {typeImage && <img src={typeImage} alt={name} width="12px" />}
      </div>
      <div className="id"># {String(id).padStart(4, 0)}</div>
      <img src={avatar} alt={name} className="avatar" width="200" />
      <img src={pokeball} alt="pokeball" className="background-image" />
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  typeImage: PropTypes.string,
  backgroundColor: PropTypes.string,
};

export default Card;
