import { useScroll } from '@/hooks/useScroll'
import Image from 'next/image'
import { type FC } from 'react'
import styled from 'styled-components'

const HeaderLogo: FC = () => {
  const { scroll } = useScroll()
  const height = scroll > 0 ? '10vh' : '30vh'
  return (
    <HeaderLogoContainer $scroll={scroll > 0}>
      <div style={{ height }}>
        <Image fill src="/images/header-logo.svg" alt="logo" />
      </div>
    </HeaderLogoContainer>
  )
}
const HeaderLogoContainer = styled.div<{
  $scroll: boolean
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  min-height: 12vh;
  transition:
    width 0.5s,
    height 0.5s;
  transition: all 0.5s;
  height: 100%;
  width: 100%;
  div {
    transition:
      height 0.5s,
      width 0.5s;
    position: fixed;
    height: 9vh;
    object-fit: contain;
    top: 1vh;
    width: 100%;
    left: 0;
  }
  @media (max-width: 768px) {
    margin: auto;
    div {
      height: 10vh;
      max-height: 10vh;
    }
  }
`
export default HeaderLogo
