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

export default Pagination;
