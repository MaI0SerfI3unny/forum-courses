import styled from 'styled-components'
import Box from '../Box'
import { variant } from 'styled-system'

const variants = {
  primary: {
    bg: 'bg.white',
  },
  secondary: {
    bg: 'bg.background',
  },
  dashed: {
    bg: 'bg.white',
    border: '1px dashed',
    borderColor: 'border.low',
  },
  border: {
    bg: 'bg.white',
    border: '1px solid',
    borderColor: 'border.stroke',
  },
  lightBlue: {
    bg: 'bg.bluePaper',
  },
  background: {
    bg: 'bg.background',
  },
}
const shadow = {
  main: {
    boxShadow: '0px 0px 20px rgba(63, 69, 131, 0.1)',
  },
  tooltip: {
    boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)',
  },
  popup: {
    boxShadow: '0px 15px 40px rgba(0, 0, 0, 0.15)',
  },
}
const radius = {
  r1: {
    borderRadius: '0.25rem',
  },
  r2: {
    borderRadius: '0.5rem',
  },
  r3: {
    borderRadius: '0.625rem',
  },
}
const border = {
  primary: {
    border: '1px solid',
    borderColor: 'border.stroke',
  },
}

export const Paper = styled(Box)(
  variant({
    variants,
  }),
  variant({
    prop: 'shadow',
    variants: shadow,
  }),
  variant({
    prop: 'radius',
    variants: radius,
  }),
  variant({
    prop: 'border',
    variants: border,
  }),
)

Paper.propTypes = Box.propTypes

Paper.defaultProps = {
  variant: 'primary',
  radius: 'r2',
}

export default Paper
