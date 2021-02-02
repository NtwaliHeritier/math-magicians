import PropTypes from 'prop-types';

const Button = props => {
 return <button>{props.buttonName}</button>;
};

export default Button;

Button.propTypes = {
  buttonName: PropTypes.string,
};
