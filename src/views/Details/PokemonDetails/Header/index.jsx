import PropTypes from "prop-types";
import arrow from "../../../../images/arrow_back.svg";
import "./styles.scss";

const Header = ({ id, name }) => {
  return (
    <div className="header">
      <img src={arrow} width="40" alt="arrow-back" />
      <div className="name">{name}</div>
      <div className="id"># {String(id).padStart(4, 0)}</div>
    </div>
  );
};

Header.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Header;