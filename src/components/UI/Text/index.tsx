import { type FC, type HTMLAttributes, type ReactNode } from 'react'
import styles from './styles.module.css'

type TextProps = {
  children: ReactNode
} & HTMLAttributes<HTMLParagraphElement>
const Text: FC<TextProps> = ({ children, ...props }) => {
  return (
    <p className={styles.text} {...props}>
      {children}
    </p>
  )
}
export default Text
