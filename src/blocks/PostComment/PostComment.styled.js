import css from '@styled-system/css'
import styled from 'styled-components'
import { Flex } from '@/ui'

export const PostCommentContainer = styled(Flex)(
  css({
    height: '35rem',
    gap: '2.5rem',
    overflow: 'auto',
    paddingRight: '0.864rem',
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
