import React, { useState, useEffect, useContext } from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import LanguageSelector from './languageSelector'
import { GlobalStateLanguageContext } from '../context/GlobalContextLanguageProvider'
import HeaderNavStyles from '../styles/header-nav.module.scss'

const HeaderNav = () => {
  const data = useStaticQuery(graphql`
    {
      gcms {
        personalWebsiteAlls {
          homeNav
          projectsNav
          aboutNav
          contactNav
        }
      }
    }
  `)
  const websiteAllData = data.gcms.personalWebsiteAlls
  const state = useContext(GlobalStateLanguageContext)
  const [navData, setNavData] = useState(websiteAllData[0])
  useEffect(() => {
    if (state.locale === 'De') {
      setNavData(websiteAllData[0])
    } else if (state.locale === 'En') {
      setNavData(websiteAllData[1])
    } else if (state.locale === 'Ar') {
      setNavData(websiteAllData[2])
    }
  }, [websiteAllData, state])
  return (
    <nav className={HeaderNavStyles.nav}>
      <ul className={HeaderNavStyles.navList}>
        <li>
          <Link
            className={HeaderNavStyles.navItem}
            activeClassName={HeaderNavStyles.activeNavItem}
            to="/">
            {navData.homeNav}
          </Link>
        </li>
        <li>
          <Link
            className={HeaderNavStyles.navItem}
            activeClassName={HeaderNavStyles.activeNavItem}
            to="/projects">
            {navData.projectsNav}
          </Link>
        </li>
        <li>
          <Link
            className={HeaderNavStyles.navItem}
            activeClassName={HeaderNavStyles.activeNavItem}
            to="/about">
            {navData.aboutNav}
          </Link>
        </li>
        <li>
          <Link
            className={HeaderNavStyles.navItem}
            activeClassName={HeaderNavStyles.activeNavItem}
            to="/contact">
            {navData.contactNav}
          </Link>
        </li>
      </ul>
      <LanguageSelector />
    </nav>
  )
}

export default HeaderNav
