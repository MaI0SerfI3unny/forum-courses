import styled from 'styled-components'
import { Flex } from '@/ui'
import css from '@styled-system/css'

const MainContainer = styled(Flex)(
  css({
    minHeight: 'calc(100vh - 2rem)',
    pt: '4.625rem',
    pb: '4.5rem',
    backgroundColor: 'bg.background',
    '@media (max-width:576px)': {
      minHeight: 'calc(100vh - 3.75rem)',
    },
  }),
)

MainContainer.defaultProps = {
  alignItems: 'center',
  justifyContent: 'center',
}

export default MainContainer
