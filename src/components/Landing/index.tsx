import { type FC } from 'react'
import Typewriter from '../UI/Typewriter'
import styled from 'styled-components'
const Landing: FC = () => {
  return (
    <LandingContainer id="about">
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
        delay={50}
        suffix=">"
      />
    </LandingContainer>
  )
}
const LandingContainer = styled.article`
  min-height: 100vh;
  display: flex;
  position: relative;
  align-items: center;
  font-size: 2rem;
  padding-left: 2rem;
  padding-right: 1rem;
  max-width: 100%;
  span {
    font-size: 2.5rem;
  }
  b {
    font-size: 2rem;
    font-weight: 400;
  }
  @media (max-width: 768px) {
    font-size: 1.25rem;
    padding-left: 1rem;
    padding-right: 1rem;
    span {
      font-size: 1.5rem;
    }
    b {
      font-size: 1.25rem;
    }
  }
`
export default Landing
