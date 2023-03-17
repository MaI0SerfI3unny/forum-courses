import { Box } from '@/ui'
import styled from 'styled-components'
import css from '@styled-system/css'

export const ButtonWrap = styled(Box)(({ isActive }) =>
  css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: isActive ? 'bg.yellow' : 'bg.green',
    gap: '2.313rem',
    py: 'xs',
    px: 'sm',
    borderRadius: 1,
    cursor: 'pointer',
    transition: '.25s linear',
    boxSizing: 'border-box',
  }),
)
