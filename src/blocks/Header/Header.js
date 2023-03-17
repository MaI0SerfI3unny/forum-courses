import React from 'react'
import { HeaderWrap } from './Header.styled'
import { useAuth } from '@/services'
import { useUser } from '@/context'
import { useDisplay } from '@/theme'
import HeaderDesktop from './HeaderDesktop'
import HeaderMobile from './HeaderMobile'

export default function Header(props) {
  const { displayLessThan } = useDisplay()
  const isBigTabletAdaptive = displayLessThan('tablet')
  const { isLoggedIn } = useUser()
  const { signOut } = useAuth()

  const HeaderComponent = isBigTabletAdaptive ? HeaderMobile : HeaderDesktop

  return (
    <HeaderWrap {...props}>
      <HeaderComponent {...props} isLoggedIn={isLoggedIn} signOut={signOut} />
    </HeaderWrap>
  )
}
