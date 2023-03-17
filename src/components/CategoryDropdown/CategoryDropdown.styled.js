import css from '@styled-system/css'
import styled from 'styled-components'
import { Box } from '@/ui'

export const CategoryDropdownStyles = styled(Box)(
  css({
    position: 'absolute',
    left: 0,
    top: 'calc(100% + 0.5rem)',
    zIndex: 10,
    width: '100%',
  }),
)
