/* eslint-disable @next/next/no-img-element */
import { useScroll } from '@/hooks/useScroll'
import { useState, useRef, type FC, useEffect } from 'react'
import styled from 'styled-components'

const SlideShow: FC<{ images: string[] }> = ({ images }) => {
  const { scroll } = useScroll()
  const [index, setIndex] = useState(0)
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)
  const [cursor, setCursor] = useState('none')
  const [imageSrc, setImageSrc] = useState('/cursor-left.svg')
  const [display, setDisplay] = useState('none' as 'none' | 'block' | 'flex')
  const cursorTimer = useRef(setTimeout(() => {}, 0))
  const addImageOnCursor = (src: string): void => {
    setImageSrc(src)
    setDisplay('block')
  }
  const moveImageOnCursor = (event: any): void => {
    const { clientX, clientY } = event
    const x = clientX - 64 / 2
    const y = clientY - 64 / 2
    setCursor('none')
    if (cursorTimer.current !== null) {
      clearTimeout(cursorTimer.current)
    }
    setX(x)
    setY(y)
  }
  useEffect(() => {
    if (cursorTimer.current !== null) {
      clearTimeout(cursorTimer.current)
    }
    cursorTimer.current = setTimeout(() => {
      setCursor('auto')
      setDisplay('none')
    }, 500)
  }, [scroll])
  return (
    <Container
      style={{
        cursor
      }}
      onMouseLeave={() => {
        setCursor('auto')
        setDisplay('none')
      }}
    >
      <ArrowContainer
        src={imageSrc}
        alt="cursor"
        style={{
          position: 'fixed',
          left: `${x}px`,
          top: `${y}px`,
          display,
          zIndex: 20,
          background: `url(${imageSrc})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          width: '64px',
          height: '64px',
          pointerEvents: 'none'
        }}
      />
      <LeftSection
        onClick={() => {
          if (index > 0) {
            setIndex(index - 1)
          }
        }}
        onMouseEnter={() => {
          addImageOnCursor('/cursor-left.svg')
        }}
        onMouseMove={moveImageOnCursor}
      />

      <Wrapper>
        <ImageGrid $index={index} $numberOfImages={images.length}>
          {images.map((image, index) => (
            <ImageContainer key={index}>
              <img
                src={image}
                alt="project"
                style={{
                  objectFit: 'contain',
                  width: '100%'
                }}
              />
            </ImageContainer>
          ))}
        </ImageGrid>
      </Wrapper>
      <RightSection
        onClick={() => {
          if (index < images.length - 1) {
            setIndex(index + 1)
          }
        }}
        onMouseEnter={() => {
          addImageOnCursor('/cursor-right.svg')
        }}
        onMouseMove={moveImageOnCursor}
      />
    </Container>
  )
}
const ArrowContainer = styled.img`
  @media (max-width: 768px) {
    display: none;
  }
`
const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`
const ImageGrid = styled.div<{ $numberOfImages: number; $index: number }>`
  width: 100%;
  height: 100%;
  display: grid;
  transition: transform 0.5s ease-in-out;
  transform: translateX(
    ${({ $index }) => {
      return `${$index * -100}%`
    }}
  );
  grid-template-columns: repeat(
    ${({ $numberOfImages }) => $numberOfImages},
    100%
  );
`
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transition: transform 0.5s ease-in-out;
`
const LeftSection = styled.div`
  width: 50%;
  height: 100%;
  position: absolute;
  left: 0;
  z-index: 1;
`
const RightSection = styled.div`
  width: 50%;
  height: 100%;
  position: absolute;
  right: 0;
  bottom: 0;
`
const Container = styled.div`
  width: 100%;
  position: relative;
  height: 100%;
  overflow: hidden;
`
export default SlideShow
