import css from '@styled-system/css'
import styled from 'styled-components'
import bgLogin from '@/assets/bgLogin.svg'
import { Flex } from '@/ui'

export const LoginContainer = styled(Flex)(
  css({
    backgroundImage: `url(${bgLogin.src})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPositionX: '20%',
  }),
)
