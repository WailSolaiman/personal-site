import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'gatsby'
import Background from './background'
import headerStyles from '../styles/header.module.scss'

const Header = () => {
    const [isSticky, setSticky] = useState(true)
    const ref = useRef(null)
    const handleScroll = () => {
        if (ref.current.getBoundingClientRect().top > -100) {
            setSticky(true)
        } else setSticky(false)
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', () => handleScroll)
        }
    }, [])
    return (
        <div id="nav" className={`${isSticky ? 'top' : ''}`} ref={ref}>
            <div className={headerStyles.fixed}>
                <Background withPadding={false}>
                    <div className="uk-container uk-container-medium">
                        <div className={headerStyles.row}>
                            <div className={headerStyles.leftColumn}>
                                <Link to="/">
                                    <h2 className="color-nr7 uk-margin-remove">
                                        <span className="color-nr8 uk-text-bold">
                                            Wail
                                        </span>
                                        Solaiman
                                    </h2>
                                </Link>
                            </div>
                            <div className={headerStyles.rightColumn}>
                                <header className={headerStyles.header}>
                                    <nav>
                                        <ul className={headerStyles.navList}>
                                            <li>
                                                <Link
                                                    className={
                                                        headerStyles.navItem
                                                    }
                                                    activeClassName={
                                                        headerStyles.activeNavItem
                                                    }
                                                    to="/">
                                                    Home
                                                </Link>
                                            </li>
                                            {
                                                //     <li>
                                                //     <Link
                                                //         className={
                                                //             headerStyles.navItem
                                                //         }
                                                //         activeClassName={
                                                //             headerStyles.activeNavItem
                                                //         }
                                                //         to="/projects">
                                                //         Projekte
                                                //     </Link>
                                                // </li>
                                                // <li>
                                                //     <Link
                                                //         className={
                                                //             headerStyles.navItem
                                                //         }
                                                //         activeClassName={
                                                //             headerStyles.activeNavItem
                                                //         }
                                                //         to="/cv">
                                                //         Lebenslauf
                                                //     </Link>
                                                // </li>
                                                // <li>
                                                //     <Link
                                                //         className={
                                                //             headerStyles.navItem
                                                //         }
                                                //         activeClassName={
                                                //             headerStyles.activeNavItem
                                                //         }
                                                //         to="/contact">
                                                //         Kontakt
                                                //     </Link>
                                                // </li>
                                            }
                                        </ul>
                                    </nav>
                                </header>
                            </div>
                        </div>
                    </div>
                </Background>
            </div>
        </div>
    )
}

export default Header
