import { type ReactNode, type FC } from 'react'
import styled from 'styled-components'

const VisionListItem: FC<{ children: ReactNode[] }> = ({ children }) => {
  return <VisionListItemStyle>{children}</VisionListItemStyle>
}
const VisionListItemStyle = styled.li`
  display: grid;
  grid-template-columns: 5rem auto;
`
export default VisionListItem
