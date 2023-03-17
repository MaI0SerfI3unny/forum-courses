import styled from 'styled-components'
import css from '@styled-system/css'

const CheckboxLabel = styled.span(
  css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '0.625rem',
    fontWeight: 'normal',
    lineHeight: '0.625rem',
    bg: 'transparent',
    boxSizing: 'border-box',
    transition: 'all .25s linear',
    py: '0.313rem',
    px: '0.313rem',
    cursor: 'pointer',
    userSelect: 'none',
  }),
)

export default CheckboxLabel
