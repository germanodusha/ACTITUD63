import { useRegisterSection } from '@/contexts/Sections'
import { type FC } from 'react'
import styled from 'styled-components'

interface SectionProps {
  id: string
  label: string
  children: React.ReactNode
  noypadding?: boolean
  noxpadding?: boolean
}
const Section: FC<SectionProps> = ({
  id,
  label,
  children,
  noypadding = false,
  noxpadding = false
}) => {
  useRegisterSection({ id, label })
  return (
    <StyledSection
      $noypadding={`${noypadding}`}
      $noxpadding={noxpadding}
      id={id}
    >
      {children}
    </StyledSection>
  )
}
const StyledSection = styled.section<{
  $noypadding: string
  $noxpadding: boolean
}>`
  padding-left: ${({ $noxpadding }) => ($noxpadding ? 0 : '2rem')};
  padding-right: ${({ $noxpadding }) => ($noxpadding ? 0 : '2rem')};
  padding-top: ${({ $noypadding }) => ($noypadding === 'true' ? 0 : '3rem')};
  padding-bottom: ${({ $noypadding }) => ($noypadding === 'true' ? 0 : '7rem')};
  @media (max-width: 768px) {
    padding-left: ${({ $noxpadding }) => ($noxpadding ? 0 : '1rem')};
    padding-right: ${({ $noxpadding }) => ($noxpadding ? 0 : '1rem')};
    padding-top: ${({ $noypadding }) => ($noypadding === 'true' ? 0 : '1rem')};
  }
`
export default Section
