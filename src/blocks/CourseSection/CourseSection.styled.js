import styled from 'styled-components'
import css from '@styled-system/css'

import { Box, Flex } from '@/ui'

export const CourseSectionWrap = styled(Flex)(
  css({
    position: 'relative',
    cursor: 'pointer',
  }),
)

export const ArrowWrap = styled(Box)(
  css({
    top: '50%',
    right: '-0.5rem',
    transform: 'translateY(-50%)',
    position: 'absolute',
  }),
)
