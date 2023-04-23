import PropTypes from 'prop-types';
import "./RangeInput.css";

const RangeInput = ({ title, min, max, values, setRange }) => {

  return (
    <div className="range-input-parent">
      <p className="range-input-title">{title}</p>
      <div className="dual-input">
        <input
          className="range-condition-input"
          type="number"
          min={min}
          max={values[1] - 1}
          value={values[0]}
          onChange={(e) => setRange([e.target.valueAsNumber, values[1]])}
        />
        <input
          className="range-condition-input"
          type="number"
          min={values[0] + 1}
          max={max}
          value={values[1]}
          onChange={(e) => setRange([values[0], e.target.valueAsNumber])}
        />
      </div>
    </div>
  );
};

export default RangeInput;

RangeInput.propTypes = {
  title: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
  values: PropTypes.arrayOf(PropTypes.number),
  setRange: PropTypes.func
}
