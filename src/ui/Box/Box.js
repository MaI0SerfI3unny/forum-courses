import styled from 'styled-components'
import {
  color,
  space,
  border,
  layout,
  position,
  flexbox,
  grid,
  compose,
  system,
  background,
} from 'styled-system'

const cursor = system({
  cursor: true,
})

const styleProps = compose(
  color,
  space,
  border,
  layout,
  position,
  flexbox,
  grid,
  cursor,
  background,
)

const Box = styled.div(
  {
    boxSizing: 'border-box',
  },
  system({
    transition: {
      property: 'transition',
    },
  }),
  styleProps,
  ({ sx }) => sx,
)

export default Box
