import styled from 'styled-components'
import RbPopover from 'react-bootstrap/Popover'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'

import { layout } from 'styled-system'

export const Popover = styled(RbPopover)(
  {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1070,
  },
  layout,
)

export const PopoverTrigger = OverlayTrigger
