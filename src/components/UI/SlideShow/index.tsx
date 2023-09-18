/* eslint-disable @next/next/no-img-element */
import { useState, type FC } from 'react'
import styled from 'styled-components'

const SlideShow: FC<{ images: string[] }> = ({ images }) => {
  const [index, setIndex] = useState(0)
  return (
    <Container>
      <LeftSection
        onClick={() => {
          if (index > 0) {
            setIndex(index - 1)
          }
        }}
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
      />
    </Container>
  )
}
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
  cursor: url('/cursor-left.svg'), auto;
`
const RightSection = styled.div`
  width: 50%;
  height: 100%;
  position: absolute;
  right: 0;
  bottom: 0;
  cursor: url('/cursor-right.svg'), auto;
`
const Container = styled.div`
  width: 100%;
  position: relative;
  height: 100%;
  overflow: hidden;
`
export default SlideShow
