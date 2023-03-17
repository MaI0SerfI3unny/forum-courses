import styled from 'styled-components'
import css from '@styled-system/css'
import { Box, Heading } from '@/ui'

export const TabItem = styled(Box)(({ isActive }) =>
  css({
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    ':before,:after': {
      position: 'absolute',
      content: '""',
      left: '50%',
      transform: 'translateX(-50%)',
      backgroundColor: 'bg.green',
      height: '0.125rem',
      opacity: isActive ? '1' : '0',
      transition: '0.2s linear',
    },
    ':before': {
      top: '-0.6rem',
      width: ' 0.75rem',
    },
    ':after': {
      bottom: '-0.6rem',
      width: ' 2rem',
    },
    [Heading]: {
      ':hover': {
        color: 'text.blueLight',
      },
    },
    ':hover:before, :hover:after': {
      opacity: '1',
    },
  }),
)
