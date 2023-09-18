import { useScroll } from '@/hooks/useScroll'
import Image from 'next/image'
import { type FC } from 'react'
import styled from 'styled-components'

const HeaderLogo: FC = () => {
  const { scroll } = useScroll()
  const width = scroll > 0 ? '50%' : '90%'
  const height = scroll > 0 ? '8vh' : '12vh'
  const position = scroll > 0 ? 'static' : 'absolute'
  const transform = scroll > 0 ? 'translateX(0)' : 'translateX(-50%)'
  return (
    <HeaderLogoContainer
      style={{
        width,
        height,
        position,
        left: '50%',
        top: '1vh',
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
  min-height: 8vh;
  min-width: 50%;
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
