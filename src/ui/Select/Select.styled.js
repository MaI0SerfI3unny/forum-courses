import styled from 'styled-components'
import css from '@styled-system/css'
import { Box } from '@/ui'

export const SelectContainer = styled(Box)(
  css({
    position: 'relative',
    border: '1px solid ',
    borderColor: 'border.grayLight',
    boxSizing: 'border-box',
    borderRadius: 2,
    padding: '0.875rem 3rem 0.875rem 0.938rem',
    userSelect: 'none',
    cursor: 'pointer',
    height: '3rem',
    backgroundColor: 'bg.white',
    transition: '0.3s',
    ':hover': {
      borderColor: 'border.blueLight',
    },
  }),
)

export const Label = styled(Box)(({ selectedValue }) =>
  css({
    color: 'text.grayMedium',
    fontFamily: 'Poppins, sans-serif',
    fontStyle: 'normal',
    position: 'absolute',
    left: '1rem',
    transition: '0.2s',
    fontWeight: '400',
    fontSize: '0.875rem',
    lineHeight: '1.125rem',
    opacity: selectedValue ? 0 : 1,
  }),
)

export const ArrowWrapper = styled(Box)({
  top: '50%',
  right: '0.75rem',
  transform: 'translateY(-50%)',
  position: 'absolute',
})

export const OptionsContainer = styled(Box)(
  css({
    overflow: 'scroll',
    maxHeight: '15rem',
    borderRadius: 1,
    border: '1px solid',
    borderColor: 'border.stroke',
    backgroundColor: 'bg.white',
    marginTop: '-0.1rem',
    fontWeight: 'light',
    fontSize: '0.875rem',
    lineHeight: '1.125rem',
    color: 'text.dark',
    boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)',
    p: 'sm',
    gap: '0.2rem',
    display: 'flex',
    flexDirection: 'column',
  }),
)

export const ValueText = styled(Box)(
  css({
    width: '100%',
    fontWeight: 'light',
    fontSize: '0.875rem',
    lineHeight: '1.125rem',
    color: 'text.dark',
  }),
)

export const SelectBase = styled.input({
  bottom: 0,
  left: 0,
  position: 'absolute',
  pointerEvents: 'none',
  width: '0',
  height: '0',
  boxSizing: 'border-box',
  opacity: 0,
})
