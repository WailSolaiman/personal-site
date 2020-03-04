import React from 'react'
import CookieConsent from 'react-cookie-consent'
import { Link } from 'gatsby'
import CookiebarStyles from '../styles/cookiebar.module.scss'

const Cookiebar = () => {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Akzeptieren!"
      disableStyles
      containerClasses={CookiebarStyles.cookiebar}
      buttonClasses="uk-button uk-button-primary">
      <div className={CookiebarStyles.cookiebarContainer}>
        <p className="uk-margin-remove uk-text-center color-nr5">
          Um unsere Webseite für Sie optimal zu gestalten und fortlaufend
          verbessern zu können, verwenden wir Cookies. Durch die weitere Nutzung
          der Webseite stimmen Sie der Verwendung von Cookies zu.{' '}
          <Link to="/dataPrivacy" className="cookie-bar-link">
            weiterlesen
          </Link>
        </p>
      </div>
    </CookieConsent>
  )
}

export default Cookiebar
