import styled from 'styled-components'
import css from '@styled-system/css'
import { Flex } from '@/ui'

export const TextWrapper = styled(Flex)(
  css({
    alignItems: 'center',
    justifyContent: 'center',
    width: '1.5rem',
    height: '1.5rem',
    cursor: 'pointer',
    position: 'relative',
    bg: 'bg.background',
    borderRadius: '0.25rem',
  }),
)
