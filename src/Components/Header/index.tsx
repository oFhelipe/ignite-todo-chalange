import styles from './Header.module.css'
import logo from '../../assets/images/logo.svg'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Logo doto, um foguete voando para cima com todo escrito a direita"/>
    </header>
  )
}