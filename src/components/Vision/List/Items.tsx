import { type ReactNode, type FC } from 'react'
import styled from 'styled-components'

const VisionListItem: FC<{ children: ReactNode[] }> = ({ children }) => {
  return <VisionListItemStyle>{children}</VisionListItemStyle>
}
const VisionListItemStyle = styled.li`
  display: grid;
  grid-template-columns: 5rem auto;
  @media (max-width: 768px) {
    grid-template-columns: auto auto;
    gap: 1rem;
  }
`
export default VisionListItem
