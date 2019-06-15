import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Background from './background'
import headerStyles from '../styles/header.module.scss'

const Header = () => {
    return (
        <Background background="color-bg-nr3" withPadding={false}>
            <div className={headerStyles.row}>
                <div className={headerStyles.leftColumn}>
                    <h2 className="color-nr5 uk-text-bold uk-margin-remove">
                        Wail Solaiman
                    </h2>
                </div>
                <div className={headerStyles.rightColumn}>
                    <header className={headerStyles.header}>
                        <nav>
                            <ul className={headerStyles.navList}>
                                <li>
                                    <AniLink
                                        fade
                                        className={headerStyles.navItem}
                                        activeClassName={
                                            headerStyles.activeNavItem
                                        }
                                        to="/"
                                    >
                                        Home
                                    </AniLink>
                                </li>
                                <li>
                                    <AniLink
                                        fade
                                        className={headerStyles.navItem}
                                        activeClassName={
                                            headerStyles.activeNavItem
                                        }
                                        to="/projects"
                                    >
                                        Projects
                                    </AniLink>
                                </li>
                                <li>
                                    <AniLink
                                        fade
                                        className={headerStyles.navItem}
                                        activeClassName={
                                            headerStyles.activeNavItem
                                        }
                                        to="/cv"
                                    >
                                        CV
                                    </AniLink>
                                </li>
                                <li>
                                    <AniLink
                                        fade
                                        className={headerStyles.navItem}
                                        activeClassName={
                                            headerStyles.activeNavItem
                                        }
                                        to="/contact"
                                    >
                                        Contact Me
                                    </AniLink>
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
