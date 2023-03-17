import styled from 'styled-components'
import { Flex } from '@/ui'
import css from '@styled-system/css'

const MainContainerPage = styled(Flex)(
  css({
    minHeight: 'calc(100vh - 2rem)',
    pt: '12.5rem',
    pb: '4.5rem',
    backgroundColor: 'bg.background',
    justifyContent: 'center',
    '@media (max-width:576px)': {
      minHeight: 'calc(100vh - 3.75rem)',
    },
  }),
)

export default MainContainerPage
