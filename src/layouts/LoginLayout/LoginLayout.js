import React from 'react'
import PropTypes from 'prop-types'
import { Box, Container } from '@/ui'
import MainLayout from '../MainLayout'
import { LoginContainer } from './LoginBlock.styled'

export default function LoginLayout({ children }) {
  return (
    <MainLayout>
      <Box>
        <Container>
          <LoginContainer gap="8.5rem">{children}</LoginContainer>
        </Container>
      </Box>
    </MainLayout>
  )
}
LoginLayout.propTypes = {
  children: PropTypes.any,
}
