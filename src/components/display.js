import PropTypes from 'prop-types';

const Display = ({ result }) => <h3>{result}</h3>;

export default Display;

Display.defaultProps = {
  result: '0',
};

Display.propTypes = {
  result: PropTypes.string,
};
