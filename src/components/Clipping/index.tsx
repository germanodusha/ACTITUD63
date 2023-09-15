import Image from 'next/image'
import Link from '../Services/Link'
import Section from '../UI/Section'
import { type FC } from 'react'

const clipData = [
  {
    description:
      'Incididunt exercitation quis sit culpa pariatur esse anim ea dolor sint sint consequat reprehenderit. Amet et tempor ad ea ex exercitation nisi. Aliquip esse amet ad proident mollit fugiat magna duis in tempor aliqua proident. Fugiat reprehenderit aute ullamco esse reprehenderit ex dolor aliquip incididunt.',
    href: 'https://www.google.com',
    media: {
      type: 'image',
      src: '/images/image1.jpg'
    }
  },
  {
    description:
      'Nostrud consequat id cupidatat do esse laborum. Cupidatat do dolore sint Lorem in nisi dolore aliqua. Mollit sint nisi culpa et do ea irure cillum esse reprehenderit. Consectetur officia aliqua proident reprehenderit duis sint qui aute esse sint veniam. Voluptate laboris exercitation pariatur reprehenderit enim. Velit nostrud incididunt elit culpa incididunt dolor elit eu irure officia culpa.',
    href: 'https://www.google.com',
    media: {
      type: 'image',
      src: '/images/image2.jpg'
    }
  }
]
const Clipping: FC = () => {
  return (
    <Section id="clipping" label="clipping">
      {clipData.map((clip, index) => {
        return (
          <div key={index}>
            <div
              style={{
                width: '100%',
                fontSize: '2rem',
                textAlign: 'center'
              }}
            >
              <p>
                {`<`}
                {clip.description}
                {`>`} <Link href={clip.href} />
              </p>
            </div>
            <div
              style={{
                width: '500px',
                height: '300px',
                position: 'relative',
                margin: 'auto',
                borderRadius: '2rem',
                overflow: 'hidden'
              }}
            >
              {clip.media.type === 'image' ? (
                <Image src={clip.media.src} alt={clip.description} fill />
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
            </div>
          </div>
        )
      })}
    </Section>
  )
}
export default Clipping
