import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import Background from './background'
import HeaderNav from './headerNav'
import HeaderStyles from '../styles/header.module.scss'

const Header = () => {
    const [isSticky, setSticky] = useState(true)
    const [size, setSize] = useState(false)
    const handleScroll = () => {
        if (window.pageYOffset < 200) {
            setSticky(true)
        } else setSticky(false)
    }
    const updateSize = () => {
        if (window.innerWidth <= 768) {
            setSize(true)
        } else setSize(false)
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        window.addEventListener('resize', updateSize)
        return () => {
            window.removeEventListener('scroll', () => handleScroll)
            window.removeEventListener('resize', () => updateSize)
        }
    }, [])
    return (
        <div id="nav">
            <div
                className={`${HeaderStyles.fixed} ${
                    isSticky ? HeaderStyles.top : ''
                }`}>
                <Background withPadding={false}>
                    <div className="uk-container uk-container-medium">
                        <div className={HeaderStyles.row}>
                            <div className={HeaderStyles.leftColumn}>
                                <Link to="/">
                                    <h1
                                        className={`${HeaderStyles.logo} color-nr6 uk-margin-remove`}>
                                        <span className="color-nr8 uk-text-bold">
                                            W
                                        </span>
                                        s
                                    </h1>
                                </Link>
                            </div>
                            <div className={HeaderStyles.rightColumn}>
                                {size ? (
                                    <div>
                                        <a
                                            href="#offcanvas-usage"
                                            className={`uk-navbar-toggle ${HeaderStyles.hamburger}`}
                                            uk-navbar-toggle-icon=""
                                            uk-toggle=""
                                        />
                                        <div
                                            id="offcanvas-usage"
                                            uk-offcanvas="">
                                            <div className="uk-offcanvas-bar">
                                                <button
                                                    className="uk-offcanvas-close"
                                                    type="button"
                                                    uk-close=""
                                                />

                                                <header
                                                    className={
                                                        HeaderStyles.header
                                                    }>
                                                    <HeaderNav />
                                                </header>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <HeaderNav />
                                )}
                            </div>
                        </div>
                    </div>
                </Background>
            </div>
        </div>
    )
}

export default Header
