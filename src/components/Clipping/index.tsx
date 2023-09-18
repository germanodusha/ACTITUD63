import Image from 'next/image'
import Link from '../Services/Link'
import Section from '../UI/Section'
import { type FC } from 'react'
import styled from 'styled-components'

const clipData = [
  {
    description:
      'Incididunt exercitation quis sit culpa pariatur esse anim ea dolor sint sint consequat reprehenderit. Amet et tempor ad ea ex exercitation nisi. Aliquip esse amet ad proident mollit fugiat magna duis in tempor aliqua proident. Fugiat reprehenderit aute ullamco esse reprehenderit ex dolor aliquip incididunt.',
    href: 'https://www.google.com',
    media: {
      type: 'image',
      src: '/image1.jpg'
    }
  },
  {
    description:
      'Nostrud consequat id cupidatat do esse laborum. Cupidatat do dolore sint Lorem in nisi dolore aliqua. Mollit sint nisi culpa et do ea irure cillum esse reprehenderit. Consectetur officia aliqua proident reprehenderit duis sint qui aute esse sint veniam. Voluptate laboris exercitation pariatur reprehenderit enim. Velit nostrud incididunt elit culpa incididunt dolor elit eu irure officia culpa.',
    href: 'https://www.google.com',
    media: {
      type: 'image',
      src: '/image2.jpg'
    }
  }
]
const Clipping: FC = () => {
  return (
    <Section id="clipping" label="clipping">
      <span
        className="mobile-title"
        style={{
          paddingBottom: '2rem'
        }}
      >{`<CLIPPING>`}</span>
      {clipData.map((clip, index) => {
        return (
          <div key={index}>
            <div
              style={{
                width: '100%'
              }}
            >
              <Description>
                {`<`}
                {clip.description}
                {`>`} <Link href={clip.href} />
              </Description>
            </div>
            <Media>
              {clip.media.type === 'image' ? (
                <Image
                  src={clip.media.src}
                  alt={clip.description}
                  fill
                  style={{
                    objectFit: 'contain'
                  }}
                />
              ) : (
                <video
                  src={clip.media.src}
                  autoPlay
                  loop
                  muted
                  style={{
                    width: '100%'
                  }}
                />
              )}
            </Media>
          </div>
        )
      })}
    </Section>
  )
}
const Description = styled.p`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2rem;
  @media (max-width: 768px) {
    font-size: 1rem;
    text-transform: uppercase;
  }
`
const Media = styled.div`
  width: 500px;
  height: 300px;
  position: relative;
  margin: auto;
  overflow: hidden;
  max-width: 100%;
  margin-bottom: 3rem;
  img {
    border-radius: 2rem;
  }
  video {
    border-radius: 2rem;
  }
  @media (max-width: 768px) {
    margin: 1.5rem auto;
    margin-bottom: 3rem;
    width: 50%;
    height: 100px;
    img {
      border-radius: 1rem;
    }
  }
`
export default Clipping
