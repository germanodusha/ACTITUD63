import { useScroll } from '@/hooks/useScroll'
import Image from 'next/image'
import { type FC, useEffect, useState } from 'react'
import styled from 'styled-components'

const HeaderLogo: FC = () => {
  const { scroll } = useScroll()
  const windowHeight = typeof window !== 'undefined' ? window.innerHeight : 0
  const [width, setWidth] = useState('95%')
  const [height, setHeight] = useState('22vh')
  useEffect(() => {
    const scrollPercent = Math.floor(((scroll + 1) / windowHeight) * 100)
    const newWidth = `${Math.max(100 - scrollPercent * 3, 50)}%`
    const newHeight = `${Math.max(22 - (scrollPercent * 2) / 10, 8)}vh`
    setWidth(`${newWidth}`)
    setHeight(`${newHeight}`)
  }, [scroll, windowHeight])
  return (
    <HeaderLogoContainer
      style={{
        width,
        height
      }}
    >
      <Image
        src="/images/header-logo.svg"
        alt="logo"
        fill
        objectFit="contain"
      />
    </HeaderLogoContainer>
  )
}
const HeaderLogoContainer = styled.div`
  min-height: 8vh;
  min-width: 50%;
  max-width: 90%;
  position: absolute;
  transition:
    width 0.5s,
    height 0.5s;
  top: 1vh;
  left: 50%;
  transform: translateX(-50%);
`
export default HeaderLogo
