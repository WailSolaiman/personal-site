import React, { useState, useEffect, useContext } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Head from '../head'
import HeroImageSmallStyles from '../heroImageSmall'
import Background from '../background'
import Section from '../section'
import FilterForm from './filterForm'
import FooterBefore from '../footerBefore'
import Loading from '../loading'
import { GlobalStateLanguageContext } from '../../context/GlobalContextLanguageProvider'
import '../../styles/projects.scss'

const Index = () => {
  const data = useStaticQuery(graphql`
    {
      allProjectsJson {
        edges {
          node {
            id
            title
            url
            agency
            state
            development
            description {
              tool
            }
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
      file(relativePath: { eq: "images/header/projects2.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 4160) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      gcms {
        personalWebsitePortfolios {
          title
          subTitle
          servicesTitle
          servicesParagraph
        }
      }
    }
  `)
  const imageData = data.file.childImageSharp.fluid
  const projects = data.allProjectsJson.edges
  const websitePortfolioData = data.gcms.personalWebsitePortfolios
  const state = useContext(GlobalStateLanguageContext)
  const [locale, setlocale] = useState(websitePortfolioData[0])
  useEffect(() => {
    if (state.locale === 'De') {
      setlocale(websitePortfolioData[0])
    } else if (state.locale === 'En') {
      setlocale(websitePortfolioData[1])
    } else if (state.locale === 'Ar') {
      setlocale(websitePortfolioData[2])
    }
  }, [websitePortfolioData, state])
  return (
    <div>
      <Head title="Projekte" />
      <HeroImageSmallStyles imageData={imageData} />
      <Loading>
        <Background background="color-bg-nr6" withPadding>
          <div className="uk-container uk-container-medium">
            <Section title={locale.title} text={locale.subTitle} />
          </div>
        </Background>
        <FilterForm projects={projects} />
        <Background background="color-bg-nr6" withPadding>
          <div className="uk-container uk-container-medium">
            <Section
              title={locale.servicesTitle}
              text={locale.servicesParagraph}
            />
          </div>
        </Background>
        <Background background="color-bg-nr9" withPadding>
          <div className="uk-container uk-container-medium">
            <FooterBefore />
          </div>
        </Background>
      </Loading>
    </div>
  )
}

export default Index
