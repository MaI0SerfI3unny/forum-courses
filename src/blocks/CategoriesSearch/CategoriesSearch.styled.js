import { Box } from '@/ui'

import styled from 'styled-components'
import css from '@styled-system/css'

export const CategoriesSearchWrap = styled(Box)(
  css({
    position: 'relative',
    display: 'flex',
    alignItems: ' center',
    gap: 'lg',
    backgroundColor: 'bg.white',
    p: 'xs',
    borderRadius: 2,
    border: '1px solid',
    borderColor: 'border.stroke',
    boxSizing: 'border-box',
    width: '100%',
    '@media (max-width:1400px)': {
      gap: 'md',
    },
  }),
)
