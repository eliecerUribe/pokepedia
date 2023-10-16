import PropTypes from "prop-types";
import leftArrow from "../../../images/chevron_left.svg";
import "./styles.scss";

const ArrowIcon = ({ direction, onClick }) => {
  return (
    <img
      className={`arrow ${direction}`}
      src={leftArrow}
      alt={`${direction} arrow`}
      onClick={onClick}
    />
  );
};

ArrowIcon.propTypes = {
  direction: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default ArrowIcon;
