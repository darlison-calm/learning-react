import styles from './Header.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import MenuBtn from '../../assets/menu-icon.svg'
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className={styles.header}>
      <button id='menu'>
      <img src={MenuBtn} alt='botão de menu' />
      </button>
      <span>Loja</span>
      <nav className='d-flex gap-3'>
        <NavLink to='/home' activeClassName='active' className='nav-link'>Home</NavLink>
        <NavLink to='/login' activeClassName='active' className='nav-link'>Login</NavLink>
      </nav>
    </header>
  )
}