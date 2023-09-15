import { type FC } from 'react'
import Typewriter from '../UI/Typewriter'
import styled from 'styled-components'
const Landing: FC = () => {
  return (
    <LandingContainer>
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
    </LandingContainer>
  )
}
const LandingContainer = styled.article`
  height: 100vh;
  display: flex;
  position: relative;
  align-items: center;
  font-size: 2rem;
  @media (max-width: 768px) {
    font-size: 1.25rem;
    padding-left: 1rem;
    padding-right: 1rem;
    * {
      font-size: 1.25rem;
    }
  }
`
export default Landing
