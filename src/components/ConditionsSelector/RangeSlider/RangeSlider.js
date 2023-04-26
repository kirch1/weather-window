import PropTypes from 'prop-types';
import "./RangeSlider.css";
import { Checkbox, Slider } from '@mui/material';

const RangeSlider = ({ title, min, max, values, setRange }) => {

  return (
    <div className="range-slider-parent">
      <p className="range-slider-title">{title}</p>
      <div className='range-slider-row'>
        <Checkbox size='small'/>
        <p className='range-slider-value'>{values[0]}</p>
        <Slider
              className='range-slider'
              disabled={false}
              size='small'
              value={values}
              min={min}
              max={max}
              onChange={(e) => {setRange(e.target.value)}}
              />
        <p className='range-slider-value'>{values[1]}</p>
      </div>
    </div>
  );
};

export default RangeSlider;

RangeSlider.propTypes = {
  title: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
  values: PropTypes.arrayOf(PropTypes.number),
  setRange: PropTypes.func
}
