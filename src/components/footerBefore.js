import React, { useState, useEffect, useContext } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { GlobalStateLanguageContext } from '../context/GlobalContextLanguageProvider'
import FooterBeforeStyles from '../styles/footer-before.module.scss'

const FooterBefore = () => {
  const data = useStaticQuery(graphql`
    {
      gcms {
        personalWebsiteAlls {
          beforeFooterTitle
          beforeFooterSubtitle
          beforeFooterBtn
        }
      }
    }
  `)
  const websiteAllData = data.gcms.personalWebsiteAlls
  const state = useContext(GlobalStateLanguageContext)
  const [beforeFooter, setBeforeFooter] = useState(websiteAllData[0])
  useEffect(() => {
    if (state.locale === 'De') {
      setBeforeFooter(websiteAllData[0])
    } else if (state.locale === 'En') {
      setBeforeFooter(websiteAllData[1])
    } else if (state.locale === 'Ar') {
      setBeforeFooter(websiteAllData[2])
    }
  }, [websiteAllData, state])
  return (
    <div className={FooterBeforeStyles.footerBefore}>
      <p
        className={`uk-text-center color-nr6 ${FooterBeforeStyles.footerBeforeSubheader}`}>
        {beforeFooter.beforeFooterSubtitle}
      </p>
      <h1 className={FooterBeforeStyles.footerBeforeHeader}>
        {beforeFooter.beforeFooterTitle}
      </h1>
      <a
        className={`uk-button uk-button-default ${FooterBeforeStyles.footerBeforeButton}`}
        href="/contact">
        {beforeFooter.beforeFooterBtn}
      </a>
    </div>
  )
}

export default FooterBefore
