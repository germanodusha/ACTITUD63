import Image from 'next/image'
import { type FC } from 'react'
import styled from 'styled-components'

const HamburguerButton: FC = () => {
  return (
    <MenuButtonContainer className="hamburguer-button">
      <Image
        src="/images/icone-hamburguer.svg"
        alt="Link menu"
        width={32}
        height={32}
        style={{
          objectFit: 'contain'
        }}
      />
    </MenuButtonContainer>
  )
}
const MenuButtonContainer = styled.div`
  background: rgba(0, 0, 0, 0.3);
  box-shadow: var(--menu-links-shadow);
  height: 50px;
  width: 64px;
  display: flex;
  justify-content: center;
  border-radius: 3rem;
  @media (max-width: 768px) {
    height: 40px;
    width: 48px;
  }
`
export default HamburguerButton
