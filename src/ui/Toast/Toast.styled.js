import { Paper } from '@/ui'
import styled from 'styled-components'
import css from '@styled-system/css'

export const ToastBlock = styled(Paper)(({ visible }) =>
  css({
    position: 'fixed',
    right: visible ? '2.75rem' : '-10%',
    top: '6rem',
    zIndex: '10',
    opacity: visible ? '1' : '0',
    transition: '0.2s',
  }),
)
