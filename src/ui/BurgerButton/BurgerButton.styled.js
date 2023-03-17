import styled from 'styled-components'
import css from '@styled-system/css'
import { Box } from '@/ui'

export const LineOne = styled(Box)(({ open }) =>
  css({
    transform: open ? 'translateY(5px) rotate(45deg) ' : 'rotate(0)',
    width: '1.25rem',
    height: '0.125rem',
    transition: 'all 0.3s linear',
    bg: open ? 'bg.blue' : 'bg.blue',
    borderRadius: 1,
  }),
)

export const LineTwo = styled(Box)(({ open }) =>
  css({
    transform: open ? 'translateX(100%)' : 'translateX(0)',
    width: '1rem',
    height: '0.125rem',
    opacity: open ? 0 : 1,
    transition: 'all 0.3s linear',
    bg: open ? 'bg.blue' : 'bg.blue',
    borderRadius: 1,
  }),
)

export const LineThree = styled(Box)(({ open }) =>
  css({
    transform: open ? 'translateY(-7px) rotate(-45deg) ' : 'rotate(0)',
    width: open ? '1.25rem' : '0.75rem',
    height: '0.125rem',
    transition: 'all 0.3s linear',
    bg: open ? 'bg.blue' : 'bg.blue',
    borderRadius: 1,
  }),
)
