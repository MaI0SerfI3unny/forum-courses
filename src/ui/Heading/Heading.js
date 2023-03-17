import React from 'react'
import styled from 'styled-components'
import {
  space,
  color,
  typography,
  shadow,
  layout,
  variant,
  compose,
  system,
} from 'styled-system'
import PropTypes from 'prop-types'

const headingVariantBase = {
  color: 'text.dark',
  fontWeight: 'bold',
  lineHeight: 'lg',
  fontFamily: 'Poppins, sans-serif',
}

const variants = {
  h1: {
    ...headingVariantBase,
    fontSize: '2.5rem',
    fontWeight: 'normal',
    lineHeight: '3.5rem',
  },
  h2: {
    ...headingVariantBase,
    fontSize: 'xxl',
    fontWeight: 'bold',
    lineHeight: 'lg',
  },
  h3m: {
    ...headingVariantBase,
    fontSize: '1.125rem',
    fontWeight: 'normal',
    lineHeight: '150%',
  },
  h3sb: {
    ...headingVariantBase,
    fontSize: '1.125rem',
    fontWeight: 'bold',
    lineHeight: 'lg',
  },
  h4m: {
    ...headingVariantBase,
    fontSize: 'sm',
    fontWeight: 'normal',
    lineHeight: 'md',
    color: 'text.grayDark',
  },
  h4sb: {
    ...headingVariantBase,
    fontSize: 'sm',
    fontWeight: 'bold',
    lineHeight: 'lg',
    color: 'text.grayDark',
  },
  H4mCaps: {
    fontFamily: 'Poppins, sans-serif',
    fontStyle: 'normal',
    lineHeight: '1.25rem',
    fontSize: '0.825rem',
    textTransform: 'uppercase',
    color: 'text.dark',
  },
  h5: {
    ...headingVariantBase,
    fontSize: 'sm',
    fontWeight: 'normal',
    lineHeight: '150%',
    color: 'text.grayDark',
  },
}

const variantsKeys = Object.keys(variants)

const style = system({
  textTransform: true,
  whiteSpace: true,
  cursor: true,
})

const tags = {
  h3m: 'h3',
  h3sb: 'h3',
  h4m: 'h4',
  h4sb: 'h4',
  H4mCaps: 'h4',
}

const HeadingBase = ({
  variant,
  as,
  sx,
  // eslint-disable-next-line no-unused-vars
  textAlign,
  // eslint-disable-next-line no-unused-vars
  textTransform,
  // eslint-disable-next-line no-unused-vars
  whiteSpace,
  ...props
}) => {
  const Component = as ?? tags[variant] ?? variant
  return <Component variant={variant} sx={sx} {...props} />
}
const StyleHeading = compose(space, color, typography, shadow, layout, style)

const Heading = styled(HeadingBase)(
  (props) => ({
    padding: 0,
    margin: 0,
    textTransform: props.uppercase ? 'uppercase' : 'inherit',
  }),
  variant({
    variants,
  }),
  StyleHeading,
  ({ sx }) => sx,
)

HeadingBase.propTypes = {
  textAlign: PropTypes.string,
  textTransform: PropTypes.string,
  whiteSpace: PropTypes.string,
  as: PropTypes.node,
  variant: PropTypes.oneOf(variantsKeys).isRequired,
  sx: PropTypes.object,
  children: PropTypes.node,
  uppercase: PropTypes.any,
}

Heading.defaultProps = {
  variant: 'h3m',
}

export default Heading
