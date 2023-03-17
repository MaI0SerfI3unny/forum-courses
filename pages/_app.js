import React from 'react'
import { useRouter } from 'next/router'
import { IntlProvider } from 'react-intl'
import { ThemeProvider } from '@/theme'
import PropTypes from 'prop-types'
import { AuthProvider, SnackbarProvider, ModalProvider } from '@/context'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '@/services'
import { CookiesProvider } from 'react-cookie'
import '../styles/fonts.css'
import '../styles/globals.css'

import en from '../lang/en.json'
import { ErrorHandler } from '@/components'

const messages = {
  en,
}

function MyApp({ Component, breakpoint, ...pageProps }) {
  const { locale } = useRouter()

  return (
    <CookiesProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider breakpoint={breakpoint}>
          <ErrorHandler height="100vh">
            <AuthProvider>
              <IntlProvider locale={locale} messages={messages[locale]}>
                <SnackbarProvider>
                  <ModalProvider>
                    <Component {...pageProps} />
                  </ModalProvider>
                </SnackbarProvider>
              </IntlProvider>
            </AuthProvider>
          </ErrorHandler>
        </ThemeProvider>
      </QueryClientProvider>
    </CookiesProvider>
  )
}

MyApp.getInitialProps = async ({ ctx }) => {
  if (typeof window === 'undefined') {
    const DeviceDetect = eval('require("node-device-detector")')
    const device = new DeviceDetect()
    const {
      device: { type },
    } = device.detect(ctx.req.headers['user-agent'])
    const breakpoint = [
      true,
      type === 'tablet',
      type === 'desktop',
    ].lastIndexOf(true)

    return {
      breakpoint,
    }
  }
  return {}
}

MyApp.propTypes = {
  Component: PropTypes.elementType,
  breakpoint: PropTypes.number,
}

export default MyApp
