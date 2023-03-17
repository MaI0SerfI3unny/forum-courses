import styled from 'styled-components'
import { Box } from '@/ui'
import css from '@styled-system/css'

export const InputWrapper = styled(Box)(
  css({
    position: 'relative',
    height: '3rem',
    zIndex: '10',
  }),
)

export const InputBackground = styled(Box)(({ error, isBorderAppear = true }) =>
  css({
    height: '100%',
    width: '100%',
    position: 'absolute',
    left: 0,
    top: 0,
    zIndex: '-1',
    border: isBorderAppear ? '1px solid' : 'none',
    borderColor: error ? 'border.red' : 'border.grayLight',
    bg: 'bg.white',
    boxSizing: 'border-box',
    borderRadius: '2',
    transition: '0.3s',
  }),
)

export const InputBase = styled.input(({ error }) =>
  css({
    bg: 'transparent',
    padding: '0.875rem 0.938rem',
    width: '100%',
    height: '100%',
    fontFamily: 'Poppins, sans-serif',
    fontSize: 'sm',
    lineHeight: 'md',
    fontWeight: 'normal',
    boxSizing: 'border-box',
    border: 'none',
    outline: ' none',
    color: 'text.dark',
    borderRadius: '2',
    '::placeholder': {
      lineHeight: '150%',
      fontWeight: 'light',
      color: error ? 'red' : 'text.grayMedium',
    },
    ':focus': {
      transition: '0.3s',
      '::placeholder': {
        color: 'text.grayLight',
      },
    },
    ':focus ~': {
      [InputBackground]: {
        borderColor: 'border.blueLight',
      },
    },
    [`:hover ~ ${InputBackground}`]: {
      borderColor: 'border.blueLight',
    },
    ':-webkit-autofill, :-webkit-autofill:hover, :-webkit-autofill:focus, :-webkit-autofill:active ':
      {
        transition:
          'background-color 5000s ease-in-out 0s, color 5000s ease-in-out 0s',
      },
  }),
)
