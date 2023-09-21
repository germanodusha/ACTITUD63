/* eslint-disable @next/next/no-img-element */
import { useState, type FC } from 'react'
import styled from 'styled-components'

const SlideShow: FC<{ images: string[] }> = ({ images }) => {
  const [index, setIndex] = useState(0)
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)
  const [imageSrc, setImageSrc] = useState('/cursor-left.svg')
  const [display, setDisplay] = useState('none' as 'none' | 'block' | 'flex')
  const addImageOnCursor = (src: string): void => {
    setImageSrc(src)
    setDisplay('block')
  }
  const moveImageOnCursor = (event: any): void => {
    const { clientX, clientY } = event
    const x = clientX - 64 / 2
    const y = clientY - 64 / 2
    setX(x)
    setY(y)
  }
  return (
    <Container
      onMouseLeave={() => {
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
      <LeftSection
        onClick={() => {
          if (index > 0) {
            setIndex(index - 1)
          }
        }}
      />
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
  cursor: none;
`
const RightSection = styled.div`
  width: 50%;
  height: 100%;
  position: absolute;
  right: 0;
  bottom: 0;
  cursor: none;
`
const Container = styled.div`
  width: 100%;
  position: relative;
  height: 100%;
  overflow: hidden;
`
export default SlideShow
