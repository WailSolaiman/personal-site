import React, { useContext } from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import { GlobalStateLanguageContext } from '../context/GlobalContextLanguageProvider'

const Head = ({ title = 'Home' }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
          email
          url
        }
      }
    }
  `)
  const state = useContext(GlobalStateLanguageContext)

  return (
    <Helmet
      title={`${title} | ${data.site.siteMetadata.title}`}
      description={data.site.siteMetadata.description}
      author={data.site.siteMetadata.author}
      email={data.site.siteMetadata.email}
      url={data.site.siteMetadata.url}
      htmlAttributes={{
        lang: state.locale.toLowerCase(),
        dir: state.locale.toLowerCase() === 'ar' ? 'rtl' : 'ltr',
      }}
    />
  )
}

export default Head
