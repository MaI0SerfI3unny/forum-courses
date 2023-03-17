import styled from 'styled-components'
import css from '@styled-system/css'

const ButtonIcon = styled.button(
  css({
    boxSizing: 'border-box',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: '.25s linear',
    gap: 'xxs',
    outline: 'none',
    backgroundColor: 'transparent',
  }),
)

export default ButtonIcon
