import PropTypes from "prop-types";
import "./ConditionsSelector.css";
import RangeSlider from "./RangeSlider/RangeSlider";

const ConditionsSelector = ({ conditions, setConditions }) => {
  const conditionsDisplay = Object.keys(conditions).map((key) => {
    return <RangeSlider
      key={key}
      conditionKey={key}
      conditions={conditions}
      setConditions={setConditions}
    />;
  });

  return (
    <div className="card conditions-selector-card">
      <p className="card-title">Select Desired Conditions</p>
      <form className="conditions-selector-flex">
        {conditionsDisplay}
      </form>
    </div>
  );
};

export default ConditionsSelector;

ConditionsSelector.propTypes = {
  conditions: PropTypes.shape({
    conditions: PropTypes.object,
    setConditions: PropTypes.func
  }),
};
