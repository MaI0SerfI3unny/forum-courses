import styled from 'styled-components'
import { system, variant } from 'styled-system'
import Box from '../Box'

const variants = {
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  columnCenter: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  column: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  rowBetween: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
}

const Flex = styled(Box).withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) =>
    !['wrap', 'column'].includes(prop) && defaultValidatorFn(prop),
})(
  ({ wrap, column }) => ({
    display: 'flex',
    ...(wrap && { flexWrap: 'wrap' }),
    ...(column && { flexDirection: 'column' }),
  }),
  system({
    gap: {
      property: 'gap',
      scale: 'space',
    },
  }),
  variant({
    variants,
  }),
)

export default Flex
