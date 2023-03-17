import styled from 'styled-components'
import PropTypes from 'prop-types'
import {
  color,
  space,
  border,
  layout,
  position,
  compose,
  variant,
} from 'styled-system'

const styleProps = compose(color, space, border, layout, position)

const variants = {
  default: {
    background: 'transparent',
    border: 'none',
  },
  isFavorite: {
    padding: '0.5rem',
    border: '1px solid',
    borderColor: 'border.stroke',
    borderRadius: '50%',
    backgroundColor: 'bg.white',
  },
}

const IconButton = styled.button(
  {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxSizing: 'border-box',
    outline: 'none',
    cursor: 'pointer',
    padding: 0,
  },
  variant({
    variants,
  }),
  styleProps,
  ({ sx }) => sx,
)

IconButton.propTypes = {
  variant: PropTypes.oneOf(['default', 'isFavorite', 'border']).isRequired,
}

IconButton.defaultProps = {
  variant: 'default',
}

export default IconButton
