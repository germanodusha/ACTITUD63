'use client'
import { type FC } from 'react'
import HeaderContainer from './HeaderContainer'
import MenuLinks from './MenuLinks'
import HeaderTitle from './Title'
import HeaderLogo from './Logo'

const Header: FC = () => {
  return (
    <HeaderContainer>
      <MenuLinks />
      <HeaderLogo />
      <HeaderTitle />
    </HeaderContainer>
  )
}

export default Header
