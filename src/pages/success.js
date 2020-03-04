import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'
import HeroImageSmallStyles from '../components/heroImageSmall'

const Success = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "images/header/header.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const imageData = data.file.childImageSharp.fluid
  return (
    <Layout>
      <Head title="Success" />
      <HeroImageSmallStyles imageData={imageData} />
      <div style={{ minHeight: 300 }}>
        <h1 className="uk-text-bold uk-text-center uk-margin-small-bottom uk-margin-large-top">
          Vielen Dank für Ihre Nachricht
        </h1>
        <h2 className="uk-text-bold uk-text-center uk-margin-large-bottom uk-margin-small-top">
          Ich werde mich schnellstmöglich bei Ihnen melden.
        </h2>
      </div>
    </Layout>
  )
}

export default Success
