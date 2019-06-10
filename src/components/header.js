import React from 'react'
//import { Link } from 'gatsby'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import headerStyles from '../styles/header.module.scss'

const Header = () => {
    return (
        <header className={headerStyles.header}>
            <nav>
                <ul className={headerStyles.navList}>
                    <li>
                        <AniLink
                            fade
                            className={headerStyles.navItem}
                            activeClassName={headerStyles.activeNavItem}
                            to="/"
                        >
                            Home
                        </AniLink>
                    </li>
                    <li>
                        <AniLink
                            fade
                            className={headerStyles.navItem}
                            activeClassName={headerStyles.activeNavItem}
                            to="/projects"
                        >
                            Projects
                        </AniLink>
                    </li>
                    <li>
                        <AniLink
                            fade
                            className={headerStyles.navItem}
                            activeClassName={headerStyles.activeNavItem}
                            to="/cv"
                        >
                            CV
                        </AniLink>
                    </li>
                    <li>
                        <AniLink
                            fade
                            className={headerStyles.navItem}
                            activeClassName={headerStyles.activeNavItem}
                            to="/contact"
                        >
                            Contact Me
                        </AniLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
