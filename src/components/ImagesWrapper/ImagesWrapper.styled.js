import css from '@styled-system/css'
import styled from 'styled-components'
import { Box } from '@/ui'

export const Label = styled.label(
  css({
    cursor: 'pointer',
    position: 'relative',
    '>div:first-child': {
      position: 'absolute',
      zIndex: -1,
      opacity: '0',
    },
  }),
)

export const ImageItem = styled(Box)(
  css({
    position: 'relative',
    button: {
      position: 'absolute',
      top: '-0.8rem',
      right: '-0.8rem',
      zIndex: 5,
      transition: '0.2s',
      opacity: 0,
      bg: 'bg.white',
      borderRadius: '50%',
    },
    ':hover': {
      button: {
        opacity: 1,
      },
    },
  }),
)
