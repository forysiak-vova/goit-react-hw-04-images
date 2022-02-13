import { ButtonLoad } from './Button.styled';
import PropTypes from 'prop-types';
const Button = ({ nextClick, children, loading }) => {
  return (
    <ButtonLoad type="button" onClick={nextClick}>
      {loading && <span>{children}</span>}
      {!loading && <span>Load more</span>}
    </ButtonLoad>
  );
};

Button.propTypes = {
  nextClick: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;
