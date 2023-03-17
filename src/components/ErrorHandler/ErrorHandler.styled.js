import styled from 'styled-components'
import css from '@styled-system/css'
import { Flex } from '@/ui'

export const Wrapper = styled(Flex)(
  css({
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  }),
)
