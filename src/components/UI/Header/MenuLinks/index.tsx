import { type FC, useState } from 'react'
import ExpandedMenu from './ExpandedMenu'
import HamburguerButton from './HamburguerButton'
import styled from 'styled-components'

const MenuLinks: FC = () => {
  const [showMenu, setShowMenu] = useState(false)
  const hoverSound = new Audio('/hover.mp3')
  return (
    <MenuLinksContainer
      onClick={() => {
        setShowMenu(true)
      }}
      onMouseEnter={() => {
        void hoverSound.play()
        setShowMenu(true)
      }}
      onMouseLeave={() => {
        setShowMenu(false)
      }}
    >
      {showMenu ? (
        <ExpandedMenu
          onClose={() => {
            console.log(showMenu)
            setShowMenu(false)
          }}
        />
      ) : (
        <HamburguerButton />
      )}
    </MenuLinksContainer>
  )
}
const MenuLinksContainer = styled.nav`
  position: relative;
  z-index: 10;
  @media (max-width: 768px) {
    position: fixed;
    left: 1rem;
    bottom: 3rem;
  }
`
export default MenuLinks
