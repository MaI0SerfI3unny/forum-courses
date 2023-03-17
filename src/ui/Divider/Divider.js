import styled from 'styled-components'
import css from '@styled-system/css'
import { Flex, Box } from '@/ui'
import PropTypes from 'prop-types'

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

const styleProps = compose(color, space, border, typography, flexbox, system)

const variants = {
  vertical: {
    width: '1px',
    height: '100%',
  },
  horizontal: {
    width: '100%',
    height: '1px',
  },
}

const Border = styled(Box)(
  css({
    bg: '#DDDDDD',
  }),
  variant({
    variants,
  }),

  styleProps,
  ({ sx }) => sx,
)

const Divider = ({ variant, ...props }) => {
  return (
    <Flex alignItems="center">
      <Border variant={variant} {...props} />
    </Flex>
  )
}

Divider.propTypes = {
  variant: PropTypes.string,
}

Divider.defaultProps = {
  variant: 'vertical',
}

export default Divider
