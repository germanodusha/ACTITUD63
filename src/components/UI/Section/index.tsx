import { useRegisterSection } from '@/contexts/Sections'
import { type FC } from 'react'
import styled from 'styled-components'

interface SectionProps {
  id: string
  label: string
  children: React.ReactNode
  noypadding?: boolean
}
const Section: FC<SectionProps> = ({
  id,
  label,
  children,
  noypadding = false
}) => {
  useRegisterSection({ id, label })
  return (
    <StyledSection $noypadding={`${noypadding}`} id={id}>
      {children}
    </StyledSection>
  )
}
const StyledSection = styled.section<{
  $noypadding: string
}>`
  padding-left: 1rem;
  padding-right: 2rem;
  padding-top: ${({ $noypadding }) => ($noypadding === 'true' ? 0 : '1rem')};
  padding-bottom: ${({ $noypadding }) => ($noypadding === 'true' ? 0 : '7rem')};
`
export default Section
