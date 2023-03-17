import React, { useState, useEffect } from 'react'

import { ThemeProvider as DefaultThemeProvider } from 'styled-components'
import { secondaryTheme, primaryTheme, DisplayProvider } from './index'
import PropTypes from 'prop-types'

export default function ThemeProvider({ children, breakpoint, ...props }) {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    const localTheme = localStorage.getItem('theme')
    localTheme && setTheme(localTheme)
  }, [])

  useEffect(() => {
    if (window) {
      const onChangeTheme = () => {
        const mode = theme === 'dark' ? 'light' : 'dark'
        localStorage.setItem('theme', mode)
        setTheme(mode)
      }
      window.changeTheme = onChangeTheme
    }
  }, [setTheme, theme])

  return (
    <DefaultThemeProvider
      theme={theme === 'dark' ? primaryTheme : secondaryTheme}
      {...props}
    >
      <DisplayProvider breakpoint={breakpoint}>{children}</DisplayProvider>
    </DefaultThemeProvider>
  )
}

ThemeProvider.propTypes = {
  breakpoint: PropTypes.number,
  children: PropTypes.any,
}
