import styled from 'styled-components'
import { Flex } from '@/ui'
import css from '@styled-system/css'

const MenuDrawer = styled(Flex)(({ open }) =>
  css({
    maxWidth: '23.5rem',
    bg: 'bg.white',
    position: 'fixed',
    top: 0,
    left: 0,
    bottom: 0,
    width: '100%',
    pt: '5.5rem',
    pb: '2.5rem',
    px: 'lg',
    flexDirection: 'column',
    justifyContent: 'space-between',
    transform: open ? 'translateX(0)' : 'translateX(-100%)',
    transition: 'transform 0.3s linear',
    zIndex: '15',
    boxShadow: open
      ? '-10px 0px 10px -5px rgba(0, 0, 0, 0.2)'
      : '-10px 0px 10px -5px rgba(0, 0, 0, 0.0)',
  }),
)
export default MenuDrawer
