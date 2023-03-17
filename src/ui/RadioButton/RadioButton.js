import styled from 'styled-components'
import PropTypes from 'prop-types'
import css from '@styled-system/css'
import { color, space, border, layout, compose, variant } from 'styled-system'

const styleProps = compose(color, space, border, layout)

const variants = {
  default: {
    height: 'lg',
    width: 'lg',
    minWidth: 'lg',
    ':checked': {
      borderColor: 'border.green',
      ':after': {
        position: 'absolute',
        content: `""`,
        left: '50%',
        top: '50%',
        transform: 'translate(-50%,-50%)',
        borderRadius: 5,
        height: 'sm',
        width: 'sm',
        bg: 'bg.green',
        opacity: 1,
      },
    },
  },
}

const CheckBox = styled.input.attrs({
  type: 'radio',
})(
  css({
    borderRadius: 5,
    boxSizing: 'border-box',
    cursor: 'pointer',
    border: 'solid',
    appearance: 'none',
    backgroundColor: 'transparent',
    borderWidth: '0.125rem',
    borderColor: 'border.grayDark',
    margin: 0,
    transition: '0.2s',
    position: 'relative',
  }),
  variant({
    variants,
  }),
  styleProps,
  ({ sx }) => sx,
)

CheckBox.propTypes = {
  variant: PropTypes.oneOf(['default', 'toggle']).isRequired,
}

CheckBox.defaultProps = { variant: 'default' }

export default CheckBox
