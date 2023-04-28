import PropTypes from 'prop-types';
import { Checkbox, Slider } from '@mui/material';
import "./RangeSlider.css";

const RangeSlider = ({ conditionKey, conditions, setConditions }) => {
  const { title, min, max, values, enabled } = conditions[conditionKey];

  const conditionChange = (newValue, name) => {
    setConditions({
      ...conditions,
      [conditionKey]: {
        ...conditions[conditionKey],
        [name]: newValue
      }
    })
  }

  return (
    <div className="range-slider-parent">
      <p className="range-slider-title">{title}</p>
      <div className='range-slider-row'>
        <Checkbox size='small' checked={enabled} onChange={(e) => conditionChange(e.target.checked, 'enabled')}/>
        <p className='range-slider-value'>{enabled ? values[0] : '-'}</p>
        <Slider
              className='range-slider'
              disabled={!enabled}
              size='small'
              value={values}
              min={min}
              max={max}
              onChange={(e) => conditionChange(e.target.value, 'values')}
              />
        <p className='range-slider-value'>{enabled ? values[1] : '-'}</p>
      </div>
    </div>
  );
};

export default RangeSlider;

RangeSlider.propTypes = {
  condition: PropTypes.object
}
