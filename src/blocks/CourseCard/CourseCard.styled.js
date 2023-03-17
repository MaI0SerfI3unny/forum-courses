import styled from 'styled-components'
import css from '@styled-system/css'
import { Flex, Box } from '@/ui'

export const CourseCardWrap = styled(Flex)(
  css({
    position: 'relative',
    gap: 'md',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    cursor: 'pointer',
  }),
)

export const ArrowWrap = styled(Box)(
  css({
    top: '11%',
    right: '-3rem',
    position: 'absolute',
  }),
)
