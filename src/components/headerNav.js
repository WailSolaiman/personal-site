import React from 'react'
import { Link } from 'gatsby'
import LanguageSelector from './languageSelector'
import HeaderNavStyles from '../styles/header-nav.module.scss'

const HeaderNav = () => {
  return (
    <nav className={HeaderNavStyles.nav}>
      <ul className={HeaderNavStyles.navList}>
        <li>
          <Link
            className={HeaderNavStyles.navItem}
            activeClassName={HeaderNavStyles.activeNavItem}
            to="/">
            Home
          </Link>
        </li>
        <li>
          <Link
            className={HeaderNavStyles.navItem}
            activeClassName={HeaderNavStyles.activeNavItem}
            to="/portfolio">
            Projekte
          </Link>
        </li>
        <li>
          <Link
            className={HeaderNavStyles.navItem}
            activeClassName={HeaderNavStyles.activeNavItem}
            to="/about">
            About
          </Link>
        </li>
        <li>
          <Link
            className={HeaderNavStyles.navItem}
            activeClassName={HeaderNavStyles.activeNavItem}
            to="/contact">
            Contact
          </Link>
        </li>
      </ul>
      <LanguageSelector />
    </nav>
  )
}

export default HeaderNav
