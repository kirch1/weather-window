import './ConditionsSelector.css';

const ConditionsSelector = () => {
  return(
    <div className='conditions-selector-parent'>
      <p className='condition-selector-label'>Min Temp</p>
      <p className='condition-selector-label'>Max Temp</p>
      <p className='condition-selector-label'>Daytime</p>
      <p className='condition-selector-label'>Nightime</p>
      <p className='condition-selector-label'>Min Wind</p>
      <p className='condition-selector-label'>Max Wind</p>
    </div>
  )
}

export default ConditionsSelector;
