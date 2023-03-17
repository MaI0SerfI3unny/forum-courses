import styled from 'styled-components'
import { system } from 'styled-system'

import { Box } from '@/ui'

const Grid = styled(Box)(
  {
    display: 'grid',
  },
  system({
    gap: {
      property: 'gap',
      scale: 'space',
    },
  }),
)

Grid.propTypes = Box.propTypes

export default Grid
