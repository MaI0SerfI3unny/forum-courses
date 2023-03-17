import css from '@styled-system/css'
import styled from 'styled-components'
import { Flex } from '@/ui'

export const CommentsContainer = styled(Flex)(
  css({
    overflow: 'auto',
    paddingRight: '2rem',
    flexDirection: 'column',
    '::-webkit-scrollbar': {
      width: '0.125rem',
    },
    '::-webkit-scrollbar-track': {
      background: '#DAE2F9',
      borderRadius: 1,
    },
    '::-webkit-scrollbar-thumb': {
      background: '#1C8DCC',
      borderRadius: 1,
    },
  }),
)
