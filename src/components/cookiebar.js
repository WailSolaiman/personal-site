import React, { useState, useEffect, useContext } from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import CookieConsent from 'react-cookie-consent'
import { GlobalStateLanguageContext } from '../context/GlobalContextLanguageProvider'
import CookiebarStyles from '../styles/cookiebar.module.scss'

const Cookiebar = () => {
  const data = useStaticQuery(graphql`
    {
      gcms {
        personalWebsiteAlls {
          cookiebarParagraph
          cookiebarLink
          cookiebarBtn
        }
      }
    }
  `)
  const websiteAllData = data.gcms.personalWebsiteAlls
  const state = useContext(GlobalStateLanguageContext)
  const [cookiebarData, setCookiebarData] = useState(websiteAllData[0])
  useEffect(() => {
    if (state.locale === 'De') {
      setCookiebarData(websiteAllData[0])
    } else if (state.locale === 'En') {
      setCookiebarData(websiteAllData[1])
    } else if (state.locale === 'Ar') {
      setCookiebarData(websiteAllData[2])
    }
  }, [websiteAllData, state])
  return (
    <CookieConsent
      location="bottom"
      buttonText={cookiebarData.cookiebarBtn}
      disableStyles
      containerClasses={CookiebarStyles.cookiebar}
      buttonClasses="uk-button uk-button-primary">
      <div className={CookiebarStyles.cookiebarContainer}>
        <p className="uk-margin-remove uk-text-center color-nr5">
          {cookiebarData.cookiebarParagraph}{' '}
          <Link to="/dataPrivacy" className="cookie-bar-link">
            {cookiebarData.cookiebarLink}
          </Link>
        </p>
      </div>
    </CookieConsent>
  )
}

export default Cookiebar
