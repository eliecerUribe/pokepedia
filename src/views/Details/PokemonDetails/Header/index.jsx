import PropTypes from "prop-types";
import { getFormattedId } from "../../../../utils";
import arrow from "../../../../images/arrow_back.svg";
import "./styles.scss";

const Header = ({ id, name, onClickBack }) => {
  const formattedId = getFormattedId(id);

  return (
    <div className="header">
      <img src={arrow} width="40" alt="arrow-back" onClick={onClickBack} />
      <div className="name">{name}</div>
      <div className="id">{formattedId}</div>
    </div>
  );
};

Header.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onClickBack: PropTypes.func.isRequired,
};

export default Header;
