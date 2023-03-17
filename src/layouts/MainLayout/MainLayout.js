import React from 'react'
import PropTypes from 'prop-types'
import { Header, Footer } from '@/blocks'
import { MainContainer } from '@/ui'
import { ErrorHandler } from '@/components'

export default function MainLayout({ children }) {
  return (
    <>
      <ErrorHandler>
        <Header />
      </ErrorHandler>
      <MainContainer>
        <ErrorHandler>{children}</ErrorHandler>
      </MainContainer>
      <ErrorHandler>
        <Footer />
      </ErrorHandler>
    </>
  )
}
MainLayout.propTypes = {
  children: PropTypes.any,
}
