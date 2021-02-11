import PropTypes from 'prop-types';
import '../styles/style.css';

const Button = ({ buttonName, clickHandler }) => {
  const handleClick = buttonName => {
    clickHandler(buttonName);
  };

  const operations = ['+', '-', 'x', '=', '÷'];
  const color = operations.indexOf(buttonName) !== -1 ? 'color' : '';

  return <button onClick={() => handleClick(buttonName)} className = {color} style = {{padding: '2em 0', fontWeight: 'bolder', width: buttonName == '0'? '50%' : '25%'}}>{buttonName}</button>;
};

export default Button;

Button.propTypes = {
  buttonName: PropTypes.string,
};
