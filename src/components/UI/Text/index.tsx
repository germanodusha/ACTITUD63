import { type FC, type HTMLAttributes, type ReactNode } from 'react'
import styles from './styles.module.css'
import styled from 'styled-components'

type TextProps = {
  children: ReactNode
} & HTMLAttributes<HTMLParagraphElement>
const Text: FC<TextProps> = ({ children, ...props }) => {
  return (
    <StyledText className={styles.text} {...props}>
      {children}
    </StyledText>
  )
}
const StyledText = styled.p`
  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`
export default Text
