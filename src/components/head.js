import React, { useContext } from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import { GlobalStateLanguageContext } from '../context/GlobalContextLanguageProvider'

const Head = ({ title }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const state = useContext(GlobalStateLanguageContext)

  return (
    <Helmet title={`${title} | ${data.site.siteMetadata.title}`}>
      <html
        lang={state.locale.toLowerCase()}
        dir={state.locale.toLowerCase() === 'ar' ? 'rtl' : ''}
      />
    </Helmet>
  )
}

export default Head
