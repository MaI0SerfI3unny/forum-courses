import styled from 'styled-components'
import css from '@styled-system/css'
import { NavLink } from '@/ui'

export const MenuItem = styled(NavLink)(({ isActive }) =>
  css({
    boxSizing: 'border-box',
    cursor: 'pointer',
    textDecoration: 'none',
    position: 'relative',
    color: isActive ? 'text.blueLight' : 'text.dark',
    transition: '0.2s linear',
    textTransform: 'uppercase',
    fontWeight: 'normal',
    fontSize: 'sm',
    lineHeight: 'md',
    '::before, ::after': {
      position: 'absolute',
      content: '""',
      left: '50%',
      transform: 'translateX(-50%)',
      backgroundColor: 'bg.green',
      height: '0.125rem',
      opacity: isActive ? '1' : '0',
      transition: '0.2s linear',
    },
    '::before': {
      top: '-0.6rem',
      width: ' 0.75rem',
    },
    '::after': {
      bottom: '-0.6rem',
      width: ' 2rem',
    },
    ':hover': {
      color: 'text.blueLight',
    },
    '@media (max-width:1400px)': {
      width: 'fit-content',
    },
  }),
)
