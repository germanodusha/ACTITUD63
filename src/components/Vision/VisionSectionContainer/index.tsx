import Section from '@/components/UI/Section'
import { type FC, type ReactNode } from 'react'
import styled from 'styled-components'

const VisionSectionContainer: FC<{
  children: ReactNode
}> = ({ children }) => {
  return (
    <Section id="vision" label="Vision">
      <VisionSectionContainerStyle>{children}</VisionSectionContainerStyle>
    </Section>
  )
}
const VisionSectionContainerStyle = styled.div`
  padding-left: var(--padding-left);
  padding-right: var(--padding-right);
`
export default VisionSectionContainer
