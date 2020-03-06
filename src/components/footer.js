import React, { useState, useEffect, useContext } from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import scrollTo from 'gatsby-plugin-smoothscroll'
import Cookiebar from './cookiebar'
import Background from './background'
import { GlobalStateLanguageContext } from '../context/GlobalContextLanguageProvider'
import footerStyles from '../styles/footer.module.scss'

const Footer = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          author
        }
      }
      gcms {
        personalWebsiteAlls {
          imprintLink
          dataPrivacyLink
        }
      }
    }
  `)
  const websiteAllData = data.gcms.personalWebsiteAlls
  const state = useContext(GlobalStateLanguageContext)
  const [footerData, setFooterData] = useState(websiteAllData[0])
  useEffect(() => {
    if (state.locale === 'De') {
      setFooterData(websiteAllData[0])
    } else if (state.locale === 'En') {
      setFooterData(websiteAllData[1])
    } else if (state.locale === 'Ar') {
      setFooterData(websiteAllData[2])
    }
  }, [websiteAllData, state])
  return (
    <>
      <Cookiebar />
      <Background background="color-bg-nr11" withPadding={false}>
        <footer className={footerStyles.footer}>
          <div className="uk-padding-small">
            <p className="uk-text-center uk-margin-small-bottom">
              <Link to="/imprint">{footerData.imprintLink}</Link> |{' '}
              <Link to="/dataPrivacy">{footerData.dataPrivacyLink}</Link>
            </p>
            <p className="uk-text-center uk-margin-remove">
              Copyright © 2019 {data.site.siteMetadata.author}
            </p>
          </div>
        </footer>
      </Background>
      <div className={footerStyles.toTopBtn}>
        <button onClick={() => scrollTo('#nav')} type="button">
          <span uk-icon="chevron-up" />
        </button>
      </div>
    </>
  )
}

export default Footer
