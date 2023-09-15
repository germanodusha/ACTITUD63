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
  padding-left: var(--padding-left);
  padding-right: var(--padding-right);
  @media (max-width: 768px) {
    padding-left: 0;
    padding-right: 0;
  }
`
export default VisionSectionContainer
