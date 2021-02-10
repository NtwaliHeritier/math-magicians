import PropTypes from 'prop-types';

const Button = ({ buttonName, clickHandler }) => {
  const handleClick = buttonName => {
    clickHandler(buttonName);
  };

  return <button onClick={() => handleClick(buttonName)}>{buttonName}</button>;
};

export default Button;

Button.propTypes = {
  buttonName: PropTypes.string,
};
