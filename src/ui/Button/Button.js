import styled from 'styled-components'
import css from '@styled-system/css'
import {
  color,
  space,
  border,
  compose,
  variant,
  typography,
  flexbox,
  system,
} from 'styled-system'
import PropTypes from 'prop-types'

const textTransform = system({
  textTransform: true,
})

const styleProps = compose(
  color,
  space,
  border,
  typography,
  flexbox,
  textTransform,
)

const variants = {
  primary: {
    bg: 'bg.blue',
    border: '2px solid',
    color: 'text.white',
    fontWeight: 'extraBold',
    borderColor: 'border.blue',
    padding: '0.875rem 2.375rem',
    ':hover': {
      bg: 'transparent',
      color: 'text.blue',
    },
  },
  secondary: {
    bg: 'transparent',
    fontWeight: 'extraBold',
    border: '2px solid',
    color: 'text.blue',
    borderColor: 'border.blue',
    padding: '0.875rem 2.375rem',
    ':hover': {
      color: 'text.white',
      bg: 'bg.blue',
    },
  },
  primarySmall: {
    bg: 'bg.green',
    border: '1px solid',
    color: 'text.white',
    fontWeight: 'normal',
    borderColor: 'border.green',
    padding: '0.5rem 0.75rem',
    ':hover': {
      bg: 'transparent',
      color: 'text.dark',
    },
  },
  secondarySmall: {
    bg: 'transparent',
    border: '1px solid',
    color: 'text.dark',
    fontWeight: 'normal',
    borderColor: 'border.green',
    padding: '0.5rem 0.75rem',
    ':hover': {
      bg: 'bg.green',
      color: 'text.white',
    },
  },
  secondarySmallRed: {
    bg: 'transparent',
    border: '1px solid',
    color: 'text.dark',
    fontWeight: 'normal',
    borderColor: 'border.red',
    padding: '0.5rem 0.75rem',
    ':hover': {
      bg: 'bg.red',
      color: 'text.white',
    },
  },
  transparent: {
    padding: '0',
    bg: 'transparent',
  },
  link: {
    padding: '0',
    bg: 'transparent',
    color: 'text.blueLight',
    fontWeight: '500',
    justifyContent: 'flex-start',
  },
  socialLink: {
    bg: 'bg.stroke',
    color: 'text.dark',
    textTransform: 'uppercase',
    fontWeight: '500',
    padding: '0.875rem 1.375rem',
    ':hover': {
      color: 'text.blue',
    },
  },
  disabled: {
    bg: 'bg.grayLight',
    border: '2px solid',
    color: 'text.white',
    fontWeight: 'extraBold',
    borderColor: 'border.grayLight',
    padding: '0.875rem 2.375rem',
  },
}

const size = {
  28: {
    py: 'xxs',
    px: 'sm',
  },
  32: {
    py: '0.375rem',
    px: 'lg',
  },
}

const Button = styled.button(
  css({
    fontFamily: 'Poppins, sans-serif',
    borderRadius: '1',
    boxSizing: 'border-box',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: '.25s linear',
    fontSize: 'sm',
  }),
  variant({
    variants,
  }),
  variant({
    prop: 'size',
    variants: size,
  }),

  styleProps,
  ({ sx }) => sx,
)

const sizePropTypes = PropTypes.oneOf([28, '28', 32, '32'])

const variantPropTypes = PropTypes.oneOf([
  'primary',
  'secondary',
  'primarySmall',
  'secondarySmall',
  'secondarySmallRed',
  'transparent',
  'socialLink',
  'disabled',
  'link',
])

Button.propTypes = {
  variant: PropTypes.oneOfType([
    variantPropTypes,
    PropTypes.arrayOf(variantPropTypes),
  ]).isRequired,
  size: PropTypes.oneOfType([sizePropTypes, PropTypes.arrayOf(sizePropTypes)]),
}

Button.defaultProps = {
  variant: 'primary',
}
export default Button
