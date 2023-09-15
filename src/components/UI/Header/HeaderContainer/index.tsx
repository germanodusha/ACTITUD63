import { type FC, type ReactNode } from 'react'
import styles from './styles.module.css'
const HeaderContainer: FC<{
  children: ReactNode
}> = ({ children }) => {
  return <header className={styles['header-container']}>{children}</header>
}
export default HeaderContainer
