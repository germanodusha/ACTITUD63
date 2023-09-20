import { type FC } from 'react'
import styled from 'styled-components'

const TitleStyled = styled.h1<{
  $hideOnMobile: boolean
}>`
  font-size: 1.75rem;
  font-weight: 300;
  text-transform: uppercase;
  span {
    font-size: 1.5rem;
  }
  @media (max-width: 768px) {
    display: ${({ $hideOnMobile }) => ($hideOnMobile ? 'none' : 'block')};
    font-size: 1rem;
    span {
      font-size: 0.75rem;
    }
  }
`
const Title: FC<{
  children: string
  $hideOnMobile?: boolean
}> = ({ children, $hideOnMobile = true }) => {
  return (
    <TitleStyled $hideOnMobile={$hideOnMobile}>
      <span>{`<`}</span>
      {children}
      <span>{`>`}</span>
    </TitleStyled>
  )
}
export default Title
