import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import Background from './background'
import HeaderNav from './headerNav'
import HeaderStyles from '../styles/header.module.scss'

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
      <div
        className={`${HeaderStyles.fixed} ${isSticky ? HeaderStyles.top : ''}`}>
        <Background withPadding={false}>
          <div className="uk-container uk-container-medium">
            <div className={HeaderStyles.row}>
              <div className={HeaderStyles.leftColumn}>
                <Link to="/">
                  <h1
                    className={`${HeaderStyles.logo} color-nr6 uk-margin-remove`}>
                    <span className="color-nr8 uk-text-bold">W</span>s
                  </h1>
                </Link>
              </div>
              <div className={HeaderStyles.rightColumn}>
                <header className={HeaderStyles.header}>
                  <HeaderNav />
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
