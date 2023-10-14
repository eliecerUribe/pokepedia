import PropTypes from "prop-types";
import pokeball from "../../images/pokeball.svg";
import "./styles.scss";

const MainBar = ({ title }) => (
  <div className="app-bar">
    <img src={pokeball} alt="" width="40px" />
    <div className="title">{title}</div>
  </div>
);

MainBar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default MainBar;
