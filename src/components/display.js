import PropTypes from 'prop-types';

const Display = props => {
  const { result } = props;
  return <h3>{result}</h3>;
};

export default Display;

Display.propTypes = {
  result: PropTypes.string,
};
