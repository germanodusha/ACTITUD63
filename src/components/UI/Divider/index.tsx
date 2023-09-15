import styled from 'styled-components'

interface DividerProps {
  thickness?: number | string
  direction?: 'horizontal' | 'vertical'
  color?: string
}
const Divider = styled.div<DividerProps>`
  width: ${({ direction }) => (direction === 'horizontal' ? '100%' : '1px')};
  height: ${({ direction }) => (direction === 'vertical' ? '100%' : '1px')};
  background-color: ${({ color }) => color ?? '#a1a1a1'};
  margin: ${({ direction }) =>
    direction === 'horizontal' ? 'var(--space-xxl) 0' : '0 var(--space-xxl)'};
`
export default Divider
