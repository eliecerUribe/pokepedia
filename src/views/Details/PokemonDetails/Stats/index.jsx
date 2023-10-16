import PropTypes from "prop-types";
import "./styles.scss";

const Stats = ({ stats, backgroundColor }) => {
  return (
    <div className="body" style={{ borderColor: backgroundColor }}>
      <div className="title">Base Stats</div>
      <div className="stats">
        <div className="labels">
          <div>HP</div>
          <div>ATK</div>
          <div>DEF</div>
          <div>S.ATK</div>
          <div>S.DEF</div>
          <div> SPEED</div>
        </div>
        <div className="line" />
        <div className="values">
          {stats?.map((stat, id) => (
            <div key={`stat-${id}`}>{stat.base_stat}</div>
          ))}
        </div>
        <div className="charts">
          {stats?.map((stat, id) => (
            <div className="chart" key={`chart-${id}`}>
              <div
                style={{ backgroundColor, width: `${stat.base_stat / 2}%` }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

Stats.propTypes = {
  stats: PropTypes.array.isRequired,
  backgroundColor: PropTypes.string.isRequired,
};

export default Stats;
