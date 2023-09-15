import { type FC } from 'react'
import Typewriter from '../UI/Typewriter'
const Landing: FC = () => {
  return (
    <article
      style={{
        height: '100vh',
        display: 'flex',
        position: 'relative',
        marginLeft: '2rem',
        alignItems: 'center',
        fontSize: '2rem'
      }}
    >
      <Typewriter
        prefix="<"
        texts={[
          { text: 'Actitud 63 is a company ' },
          {
            text: 'Lorem ipsum dorset teste blalblal asdkoa aosdasdop jasdqweq',
            isBold: true
          },
          { text: ' aliqua', isBold: true }
        ]}
        delay={100}
        suffix=">"
      />
    </article>
  )
}

export default Landing
