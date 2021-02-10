import PropTypes from 'prop-types';
import '../styles/style.css';

const Button = ({ buttonName, clickHandler }) => {
  const handleClick = buttonName => {
    clickHandler(buttonName);
  };

  return <button onClick={() => handleClick(buttonName)} className = {buttonName === "AC" ? "blue" : ""}>{buttonName}</button>;
};

export default Button;

Button.propTypes = {
  buttonName: PropTypes.string,
};
