import styled from 'styled-components'
import css from '@styled-system/css'
import { Box } from '@/ui'

export const SelectContainer = styled(Box)(
  css({
    position: 'relative',
    border: '1px solid ',
    borderColor: 'border.grayLight',
    boxSizing: 'border-box',
    borderRadius: '2',
    padding: '0.5rem 0.938rem',
    userSelect: 'none',
    minHeight: '3rem',
    backgroundColor: 'bg.white',
    cursor: 'pointer',
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
    fontWeight: 'light',
    fontSize: 'sm',
    lineHeight: '150%',
    top: '0.813rem',
    opacity: selectedValue ? 0 : 1,
  }),
)

export const OptionItem = styled(Box)(({ isSelected }) =>
  css({
    width: '100%',
    cursor: 'pointer',
    backgroundColor: 'bg.white',
    color: isSelected ? 'text.blueLight' : 'text.dark',
    ':hover': {
      color: 'text.blueLight',
    },
  }),
)
