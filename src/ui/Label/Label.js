import styled from 'styled-components'
import {
  color,
  space,
  border,
  layout,
  compose,
  variant,
  typography,
} from 'styled-system'
import css from '@styled-system/css'
import PropTypes from 'prop-types'

const styleProps = compose(color, space, border, layout, typography)

const variants = {
  blue: {
    color: 'text.blueLight',
    borderColor: 'border.blueLight',
    backgroundPosition: '100% 0',
    backgroundSize: '202% auto',
    backgroundImage:
      'linear-gradient(to right, #1C8DCC, #1C8DCC 50%, transparent 50%)',
    transition: 'all .25s linear',
    ':hover': {
      color: 'text.white',
      backgroundPosition: '0 0',
    },
  },
  red: {
    color: 'text.red',
    borderColor: 'border.red',
    backgroundPosition: '100% 0',
    backgroundSize: '202% auto',
    backgroundImage:
      'linear-gradient(to right, #E36060, #E36060 50%, transparent 50%)',
    transition: 'all .25s linear',
    ':hover': {
      color: 'text.white',
      backgroundPosition: '0 0',
    },
  },
  yellow: {
    color: 'text.yellow',
    borderColor: 'border.yellow',
    cursor: 'default',
  },
}

const Label = styled.span(
  css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '0.625rem',
    fontWeight: 'normal',
    lineHeight: '0.625rem',
    bg: 'transparent',
    boxSizing: 'border-box',
    border: '1px solid',
    borderRadius: 1,
    transition: 'all .25s linear',
    py: '0.313rem',
    px: 'xs',
    cursor: 'pointer',
    textTransform: 'uppercase',
  }),
  variant({
    variants,
  }),

  styleProps,
  ({ sx }) => sx,
)

Label.propTypes = {
  variant: PropTypes.oneOf(['blue', 'red', 'yellow']).isRequired,
}
Label.defaultProps = {
  variant: 'blue',
}
export default Label
