import React from 'react'
import { Link } from 'gatsby'
import HeaderNavStyles from '../styles/header-nav.module.scss'

const HeaderNav = () => {
    return (
        <nav>
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
                        Portfolio
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
        </nav>
    )
}

export default HeaderNav
