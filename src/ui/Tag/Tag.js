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
  normal: {
    bg: 'bg.white',
    color: 'text.grayDark',
    fontSize: '0.688rem',
    fontWeight: 'normal',
    borderColor: 'border.stroke',
    borderRadius: 1,
    textTransform: 'uppercase',
    cursor: 'pointer',
    py: 'xxs',
    px: 'xs',
    ':hover': {
      color: 'text.white',
      bg: 'bg.blueLight',
    },
  },
  small: {
    bg: 'bg.white',
    color: 'text.grayDark',
    fontSize: '0.688rem',
    fontWeight: 'bold',
    borderColor: 'border.background',
    borderRadius: 1,
    py: '0.09rem',
    px: 'xs',
    cursor: 'pointer',
    ':hover': {
      color: 'text.white',
      bg: 'bg.blueLight',
    },
  },
  number: {
    bg: 'bg.stroke',
    color: 'text.dark',
    fontWeight: 'light',
    fontSize: 'xxs',
    borderColor: 'border.background',
    minWidth: '1.875rem',
    minHeight: '1.875rem',
    borderRadius: 5,
  },
  numberSyllabus: {
    bg: 'bg.blueLight',
    color: 'text.white',
    fontWeight: 'bold',
    fontSize: '0.688rem',
    borderColor: 'border.background',
    py: '0.219rem',
    px: '0.625rem',
    borderRadius: 1,
    cursor: 'pointer',
    ':hover': {
      color: 'text.blueLight',
      bg: 'bg.white',
      borderColor: 'border.blueLight',
    },
  },
  darkBlue: {
    bg: 'transparent',
    border: '1px solid',
    borderRadius: 1,
    color: 'text.dark',
    borderColor: 'border.dark',
    py: '0.219rem',
    px: '0.625rem',
    textTransform: 'uppercase',
    cursor: 'pointer',
    fontSize: '0.678rem',
  },
  darkBlueFull: {
    bg: 'bg.dark',
    border: '1px solid',
    borderRadius: 1,
    color: 'text.white',
    borderColor: 'border.dark',
    py: '0.219rem',
    px: '0.625rem',
    textTransform: 'uppercase',
    cursor: 'pointer',
    fontSize: '0.678rem',
  },
}

const Tag = styled.span(
  css({
    fontFamily: 'Poppins, sans-serif',
    lineHeight: 'sm',
    boxSizing: 'border-box',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid',
    transition: '0.25s linear',
  }),
  variant({
    variants,
  }),

  styleProps,
  ({ sx }) => sx,
)

Tag.propTypes = {
  variant: PropTypes.oneOf([
    'normal',
    'small',
    'number',
    'numberSyllabus',
    'darkBlue',
    'darkBlueFull',
  ]).isRequired,
}
Tag.defaultProps = {
  variant: 'normal',
}
export default Tag
