import React from 'react'
// import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { Link } from 'gatsby'
import Background from './background'
import headerStyles from '../styles/header.module.scss'

const Header = () => {
    return (
        <Background background="color-bg-nr3" withPadding={false}>
            <div className={headerStyles.row}>
                <div className={headerStyles.leftColumn}>
                    <Link to="/">
                        <h2 className="color-nr5 uk-text-bold uk-margin-remove">
                            Wail Solaiman
                        </h2>
                    </Link>
                </div>
                <div className={headerStyles.rightColumn}>
                    <header className={headerStyles.header}>
                        <nav>
                            <ul className={headerStyles.navList}>
                                <li>
                                    <Link
                                        className={headerStyles.navItem}
                                        activeClassName={
                                            headerStyles.activeNavItem
                                        }
                                        to="/">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className={headerStyles.navItem}
                                        activeClassName={
                                            headerStyles.activeNavItem
                                        }
                                        to="/projects">
                                        Projekte
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className={headerStyles.navItem}
                                        activeClassName={
                                            headerStyles.activeNavItem
                                        }
                                        to="/cv">
                                        Lebenslauf
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className={headerStyles.navItem}
                                        activeClassName={
                                            headerStyles.activeNavItem
                                        }
                                        to="/contact">
                                        Kontakt
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </header>
                </div>
            </div>
        </Background>
    )
}

export default Header
