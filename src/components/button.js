import PropTypes from 'prop-types';

const Button = props => { 
const handleClick = (buttonName)=> {
  props.clickHandler(buttonName);
}

return <button onClick = {()=>handleClick(props.buttonName)}>{props.buttonName}</button>
};

export default Button;

Button.propTypes = {
  buttonName: PropTypes.string,
};
