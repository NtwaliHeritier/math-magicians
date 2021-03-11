import PropTypes from 'prop-types';
import '../styles/style.css';

const Display = ({ result }) => <h3 className = "display"  data-testid = "display">{result}</h3>;

export default Display;

Display.defaultProps = {
  result: '0',
};

Display.propTypes = {
  result: PropTypes.string,
};
