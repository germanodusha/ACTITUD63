import Section from '@/components/UI/Section'
import { type FC, type ReactNode } from 'react'
import styled from 'styled-components'

const VisionSectionContainer: FC<{
  children: ReactNode
}> = ({ children }) => {
  return (
    <Section id="vision" label="Vision">
      <span className="mobile-title">{`<VISION>`}</span>
      <VisionSectionContainerStyle>{children}</VisionSectionContainerStyle>
    </Section>
  )
}
const VisionSectionContainerStyle = styled.div`
  padding-left: 2rem;
  padding-right: 2rem;
  span {
    font-size: 3.5rem;
  }
  b {
    font-size: 3.5rem !important;
  }
  @media (max-width: 768px) {
    padding-left: 0;
    padding-right: 0;
    b {
      font-size: 1.5rem !important;
      font-weight: 600;
    }
  }
`
export default VisionSectionContainer
