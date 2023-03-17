import styled from 'styled-components'
import {
  color,
  space,
  typography,
  shadow,
  layout,
  compose,
  variant,
  system,
} from 'styled-system'
import PropTypes from 'prop-types'

const style = system({
  textTransform: true,
  cursor: true,
})

const styleText = compose(color, space, typography, layout, shadow, style)

export const variants = {
  button: {
    fontFamily: 'Poppins, sans-serif',
    color: 'text.dark',
    lineHeight: 'md',
    fontWeight: 'extraBold',
    fontSize: 'sm',
  },
  body11m: {
    fontFamily: 'Poppins, sans-serif',
    color: 'text.dark',
    lineHeight: 'sm',
    fontWeight: 'normal',
    fontSize: '0.688rem',
  },
  body12r: {
    fontFamily: 'Poppins, sans-serif',
    color: 'text.dark',
    lineHeight: 'sm',
    fontWeight: 'light',
    fontSize: 'xxs',
  },
  body12m: {
    fontFamily: 'Poppins, sans-serif',
    color: 'text.dark',
    lineHeight: '150%',
    fontWeight: 'normal',
    fontSize: 'xxs',
  },
  body12sb: {
    fontFamily: 'Poppins, sans-serif',
    color: 'text.dark',
    lineHeight: '1.125rem',
    fontWeight: 'bold',
    fontSize: 'xxs',
  },
  body14m: {
    fontFamily: 'Poppins, sans-serif',
    color: 'text.dark',
    lineHeight: 'md',
    fontWeight: 'normal',
    fontSize: 'sm',
  },
  body14sb: {
    fontFamily: 'Poppins, sans-serif',
    color: 'text.dark',
    lineHeight: 'lg',
    fontWeight: 'bold',
    fontSize: 'sm',
  },
  body16sb: {
    fontFamily: 'Poppins, sans-serif',
    color: 'text.dark',
    lineHeight: 'md',
    fontWeight: 'bold',
    fontSize: 'md',
  },
  caption10r: {
    fontFamily: 'Poppins, sans-serif',
    color: 'text.dark',
    lineHeight: 'sm',
    fontWeight: 'light',
    fontSize: '0.625rem',
  },
  intro: {
    fontFamily: 'Poppins, sans-serif',
    color: 'text.dark',
    lineHeight: '3.5rem',
    fontWeight: 'extraLight',
    fontSize: '3.5rem',
  },
  introMobile: {
    fontFamily: 'Poppins, sans-serif',
    color: 'text.dark',
    lineHeight: '2.25rem',
    fontWeight: 'extraLight',
    fontSize: '1.75rem',
  },
  H4mCaps: {
    fontFamily: 'Poppins, sans-serif',
    fontStyle: 'normal',
    lineHeight: '1.25rem',
    fontSize: '0.825rem',
    textTransform: 'uppercase',
    color: 'text.dark',
  },
  textSmallMedium: {
    fontFamily: 'Poppins, sans-serif',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 'xxs',
    lineHeight: '150%',
  },
  H3m: {
    fontFamily: 'Poppins, sans-serif',
    fontStyle: 'normal',
    fontWeight: 'normal',
    lineHeight: '1.688rem',
    fontSize: '1.125rem',
    color: 'text.dark',
  },
}

const variantsKeys = Object.keys(variants)

const variantsSelect = {
  default: {},
  active: {
    textDecoration: 'underline',
  },
}

const Text = styled.p(
  {
    padding: 0,
    margin: 0,
  },
  variant({
    variants,
  }),
  variant({
    variants: variantsSelect,
    prop: 'active',
  }),
  styleText,
  ({ sx }) => sx,
)

const variantPropTypes = PropTypes.oneOf(variantsKeys)

Text.propTypes = {
  as: PropTypes.node,
  sx: PropTypes.object,
  variant: PropTypes.oneOfType([
    variantPropTypes,
    PropTypes.arrayOf(variantPropTypes),
  ]),
}

Text.defaultProps = {
  variant: 'body14m',
}

export default Text
