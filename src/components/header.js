import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import Background from './background'
import '../styles/header.scss'

const Header = () => {
    const [isSticky, setSticky] = useState(true)
    const handleScroll = () => {
        if (window.pageYOffset < 200) {
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
        <div id="nav">
            <div className={`fixed ${isSticky ? 'top' : ''}`}>
                <Background withPadding={false}>
                    <div className="uk-container uk-container-medium">
                        <div className="row">
                            <div className="left-column">
                                <Link to="/">
                                    <h2 className="color-nr7 uk-margin-remove">
                                        <span className="color-nr8 uk-text-bold">
                                            Wail
                                        </span>
                                        Solaiman
                                    </h2>
                                </Link>
                            </div>
                            <div className="right-column">
                                <header className="header">
                                    <nav>
                                        <ul className="nav-list">
                                            <li>
                                                <Link
                                                    className="nav-item"
                                                    activeClassName="active-nav-item"
                                                    to="/">
                                                    Home
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    className="nav-item"
                                                    activeClassName="active-nav-item"
                                                    to="/projects">
                                                    Projekte
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    className="nav-item"
                                                    activeClassName="active-nav-item"
                                                    to="/cv">
                                                    Lebenslauf
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    className="nav-item"
                                                    activeClassName="active-nav-item"
                                                    to="/contact">
                                                    Kontakt
                                                </Link>
                                            </li>
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
