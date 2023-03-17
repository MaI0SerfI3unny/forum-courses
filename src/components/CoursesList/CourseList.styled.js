import styled from 'styled-components'
import css from '@styled-system/css'

import { Box, Flex } from '@/ui'

export const StudyWrap = styled(Flex)(
  css({
    position: 'relative',
    gap: 'md',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    cursor: 'pointer',
  }),
)

export const ArrowWrap = styled(Box)(
  css({
    top: '50%',
    right: 'xs',
    transform: 'translateY(-50%)',
    position: 'absolute',
  }),
)
