import styled from 'styled-components'
import PropTypes from 'prop-types'
import css from '@styled-system/css'
import { color, space, border, layout, compose, variant } from 'styled-system'

const styleProps = compose(color, space, border, layout)

const variants = {
  primary: {
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
        borderRadius: '0.125rem',
        height: '0.625rem',
        width: '0.625rem',
        bg: 'bg.green',
        opacity: 1,
      },
    },
  },
  secondary: {
    height: 'lg',
    width: 'lg',
    minWidth: 'lg',
    ':checked': {
      borderColor: 'border.red',
      ':after': {
        position: 'absolute',
        content: `""`,
        left: '50%',
        top: '50%',
        transform: 'translate(-50%,-50%)',
        borderRadius: '0.125rem',
        height: '0.625rem',
        width: '0.625rem',
        bg: 'bg.red',
        opacity: 1,
      },
    },
  },
  toggle: {
    height: '0.875rem',
    width: 'lg',
    position: 'relative',
    bg: 'bg.grayMedium',
    borderRadius: 3,
    borderColor: 'border.grayMedium',
    ':checked': {
      borderColor: 'bg.green',
      bg: 'bg.green',
      ':after': {
        left: '0.625rem',
        bg: 'bg.white',
      },
    },
    ':after': {
      left: '0',
      top: '50%',
      borderRadius: 5,
      position: 'absolute',
      height: '0.625rem',
      width: '0.625rem',
      content: `""`,
      bg: 'bg.white',
      transform: 'translateY(-50%)',
      transition: '0.3s',
    },
  },
}

const CheckBox = styled.input.attrs({
  type: 'checkbox',
})(
  css({
    borderRadius: '0.25rem',
    boxSizing: 'border-box',
    cursor: 'pointer',
    border: 'solid',
    appearance: 'none',
    backgroundColor: 'transparent',
    borderWidth: '0.125rem',
    borderColor: 'border.grayDark',
    margin: 0,
    transition: '0.25s',
    position: 'relative',
  }),
  variant({
    variants,
  }),

  styleProps,
  ({ sx }) => sx,
)

CheckBox.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary', 'toggle']).isRequired,
}

CheckBox.defaultProps = { variant: 'primary' }

export default CheckBox
