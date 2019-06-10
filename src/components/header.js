import React from 'react'
import { Link } from 'gatsby'

import headerStyles from '../styles/header.module.scss'

const Header = () => {
    return (
        <header className={headerStyles.header}>
            <nav>
                <ul className={headerStyles.navList}>
                    <li>
                        <Link
                            className={headerStyles.navItem}
                            activeClassName={headerStyles.activeNavItem}
                            to="/"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={headerStyles.navItem}
                            activeClassName={headerStyles.activeNavItem}
                            to="/projects"
                        >
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={headerStyles.navItem}
                            activeClassName={headerStyles.activeNavItem}
                            to="/cv"
                        >
                            CV
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={headerStyles.navItem}
                            activeClassName={headerStyles.activeNavItem}
                            to="/contact"
                        >
                            Contact Me
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
