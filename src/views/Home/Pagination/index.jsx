import PropTypes from "prop-types";
import leftArrow from "../../../images/leftArrow.svg";
import "./styles.scss";

const Pagination = ({ onPreviousClick, onNextClick }) => {
  return (
    <>
      <img
        className="arrow left"
        src={leftArrow}
        alt="leftArrow"
        onClick={onPreviousClick}
      />
      <img
        className="arrow right"
        src={leftArrow}
        alt="rightArrow"
        onClick={onNextClick}
      />
    </>
  );
};

Pagination.propTypes = {
  onPreviousClick: PropTypes.func.isRequired,
  onNextClick: PropTypes.func.isRequired,
};

export default Pagination;
