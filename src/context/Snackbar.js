import React, { createContext, useState, useContext } from 'react'
import PropTypes from 'prop-types'
import { Toast, Box } from '@/ui'
import { generateID } from '@/utils'
import styled from 'styled-components'
import css from '@styled-system/css'

const SnackbarContainer = styled(Box)(
  css({
    position: 'fixed',
    right: '2.75rem',
    top: '6rem',
    display: 'flex',
    flexDirection: 'column',
    zIndex: 450,
    padding: '0.5rem',
    gap: '0.5rem',
  }),
)

export const SnackbarContext = createContext()

export const useSnackbar = () => useContext(SnackbarContext)

function SnackbarProvider({ children, ...props }) {
  const showToastTime = 4000
  const [toasts, setToasts] = useState([])

  const onToast = (message, variant = 'info') => {
    const id = generateID()
    const toast = {
      message,
      variant,
      id,
    }
    setToasts((toasts) => [...toasts, toast])
    setTimeout(() => {
      onRemove(id)
    }, showToastTime)
  }

  const onRemove = (removeID) => {
    setToasts((toasts) => toasts.filter(({ id }) => removeID !== id))
  }

  const value = {
    onToast,
    onRemove,
  }

  return (
    <SnackbarContext.Provider value={value} {...props}>
      {children}
      <SnackbarContainer>
        {toasts.map(({ id, ...toastProps }) => (
          <Toast key={`toast-${id}`} id={id} {...toastProps} />
        ))}
      </SnackbarContainer>
    </SnackbarContext.Provider>
  )
}

SnackbarProvider.propTypes = {
  children: PropTypes.any,
}

export default SnackbarProvider
