import Button from './button';
import '../styles/style.css';

const ButtonPanel = props => {
  const handleClick = buttonName => props.clickHandler(buttonName);

  return (
    <div className='button-panel'>
      <div style={{width: '100%'}}>
        <Button buttonName="AC" clickHandler={handleClick}/>
        <Button buttonName="+/-" clickHandler={handleClick} />
        <Button buttonName="%" clickHandler={handleClick} />
        <Button buttonName="÷" clickHandler={handleClick} />
      </div>
      <div style={{width: '100%'}}>
        <Button buttonName="7" clickHandler={handleClick} />
        <Button buttonName="8" clickHandler={handleClick} />
        <Button buttonName="9" clickHandler={handleClick} />
        <Button buttonName="x" clickHandler={handleClick} />
      </div>
      <div style={{width: '100%'}}>
        <Button buttonName="4" clickHandler={handleClick} />
        <Button buttonName="5" clickHandler={handleClick} />
        <Button buttonName="6" clickHandler={handleClick} />
        <Button buttonName="-" clickHandler={handleClick} />
      </div>
      <div style={{width: '100%'}}>
        <Button buttonName="1" clickHandler={handleClick} />
        <Button buttonName="2" clickHandler={handleClick} />
        <Button buttonName="3" clickHandler={handleClick} />
        <Button buttonName="+" clickHandler={handleClick} />
      </div>
      <div style={{width: '100%'}}>
        <Button buttonName="0" clickHandler={handleClick} />
        <Button buttonName="." clickHandler={handleClick} />
        <Button buttonName="=" clickHandler={handleClick} />
      </div>
    </div>
  );
};

export default ButtonPanel;
