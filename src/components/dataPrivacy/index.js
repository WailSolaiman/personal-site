import React, { useState, useEffect, useContext } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Head from '../head'
import HeroImageSmallStyles from '../heroImageSmall'
import Background from '../background'
import Loading from '../loading'
import { GlobalStateLanguageContext } from '../../context/GlobalContextLanguageProvider'
import DataPrivacyStyles from '../../styles/data-privacy.module.scss'

const Index = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "images/header/header.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      gcms {
        personalWebsiteAlls {
          dataPrivacyContent {
            html
          }
        }
      }
    }
  `)
  const imageData = data.file.childImageSharp.fluid
  const websiteAllData = data.gcms.personalWebsiteAlls
  const state = useContext(GlobalStateLanguageContext)
  const [dataPrivacy, setDataPrivacy] = useState(websiteAllData[0])
  useEffect(() => {
    if (state.locale === 'De') {
      setDataPrivacy(websiteAllData[0])
    } else if (state.locale === 'En') {
      setDataPrivacy(websiteAllData[1])
    } else if (state.locale === 'Ar') {
      setDataPrivacy(websiteAllData[2])
    }
  }, [websiteAllData, state])
  return (
    <div>
      <Head title="Data Privacy" />
      <HeroImageSmallStyles imageData={imageData} />
      <Loading>
        <div className="uk-container uk-container-medium">
          <Background background="uk-background-default" withPadding>
            <div
              className={DataPrivacyStyles.container}
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{
                __html: dataPrivacy.dataPrivacyContent.html,
              }}
            />
          </Background>
        </div>
      </Loading>
    </div>
  )
}

export default Index
