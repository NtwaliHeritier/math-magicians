import Button from './button';

const ButtonPanel = (props) => {
  const handleClick = (buttonName) => {
    return props.clickHandler(buttonName);
  }

  return <div>
    <div>
      <Button buttonName="AC" clickHandler = {handleClick} />
      <Button buttonName="+/-" clickHandler = {handleClick} />
      <Button buttonName="%" clickHandler = {handleClick} />
      <Button buttonName="÷" clickHandler = {handleClick} />
    </div>
    <div>
      <Button buttonName="7" clickHandler = {handleClick} />
      <Button buttonName="8" clickHandler = {handleClick} />
      <Button buttonName="9" clickHandler = {handleClick} />
      <Button buttonName="x" clickHandler = {handleClick} />
    </div>
    <div>
      <Button buttonName="4" clickHandler = {handleClick} />
      <Button buttonName="5" clickHandler = {handleClick} />
      <Button buttonName="6" clickHandler = {handleClick} />
      <Button buttonName="-" clickHandler = {handleClick} />
    </div>
    <div>
      <Button buttonName="1" clickHandler = {handleClick} />
      <Button buttonName="2" clickHandler = {handleClick} />
      <Button buttonName="3" clickHandler = {handleClick} />
      <Button buttonName="+" clickHandler = {handleClick} />
    </div>
    <div>
      <Button buttonName="0" clickHandler = {handleClick} />
      <Button buttonName="." clickHandler = {handleClick}/>
      <Button buttonName="=" clickHandler = {handleClick}/>
    </div>
  </div>
};

export default ButtonPanel;
