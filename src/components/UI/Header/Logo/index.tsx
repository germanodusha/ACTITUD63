import { useScroll } from '@/hooks/useScroll'
import Image from 'next/image'
import { type FC } from 'react'
import styled from 'styled-components'

const HeaderLogo: FC = () => {
  const { scroll } = useScroll()
  const transform =
    scroll > 0 ? 'scale(1) translateY(0%)' : 'scale(2.5) translateY(15%)'
  return (
    <HeaderLogoContainer
      style={{
        transition: 'transform 0.5s',
        transform,
        justifySelf: 'center'
      }}
    >
      <Image
        src="/images/header-logo.svg"
        alt="logo"
        fill
        style={{
          objectFit: 'contain'
        }}
      />
    </HeaderLogoContainer>
  )
}
const HeaderLogoContainer = styled.div`
  min-height: 12vh;
  min-width: 70%;
  max-width: 90%;
  transition:
    width 0.5s,
    height 0.5s;
  top: 1vh;
  left: 50%;
  @media (max-width: 768px) {
    margin: auto;
  }
`
export default HeaderLogo
