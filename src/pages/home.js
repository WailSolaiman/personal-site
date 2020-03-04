import React, { useState, useEffect, useContext } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Background from '../components/background'
import HeroImage from '../components/heroImage'
import Head from '../components/head'
import Intro from '../components/home/intro'
import Avatar from '../components/home/avatar'
import Skills from '../components/home/skills'
import HomePortfolio from '../components/home/homePortfolio'
import FooterBefore from '../components/footerBefore'
import Loading from '../components/loading'
import { GlobalStateLanguageContext } from '../context/GlobalContextLanguageProvider'

const Home = () => {
  const data = useStaticQuery(graphql`
    {
      allPortfolioJson {
        edges {
          node {
            id
            title
            development
            agency
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
      file(relativePath: { eq: "images/header/heroimage.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 4160) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      gcms {
        personalWebsiteHomes {
          status
          slug
          id
          title
          subTitle
          firstIntroHeader
          firstIntroFirstParagraph
        }
      }
    }
  `)
  const portfolios = data.allPortfolioJson.edges
  const imageData = data.file.childImageSharp.fluid
  const gcms = data.gcms.personalWebsiteHomes
  const state = useContext(GlobalStateLanguageContext)
  const [locale, setlocale] = useState(gcms[0])
  useEffect(() => {
    if (state.locale === 'De') {
      setlocale(gcms[0])
    } else if (state.locale === 'En') {
      setlocale(gcms[1])
    } else if (state.locale === 'Ar') {
      setlocale(gcms[2])
    }
  }, [gcms, state])
  return (
    <div>
      <Head title="Home" />
      <HeroImage imageData={imageData} btnText="intro" btnLink="#intro">
        <Avatar />
        <h1 className="uk-text-center uk-margin-small color-nr7">
          {locale.title}
        </h1>
        <h2 className="uk-text-center uk-margin-small color-nr7">
          <span>{'<'}</span>
          {locale.subTitle}
          <span>{'/>'}</span>
        </h2>
      </HeroImage>
      <Loading>
        <Background background="color-bg-nr6" withPadding>
          <div className="uk-container uk-container-medium">
            <Intro
              firstIntroHeader={locale.firstIntroHeader}
              firstIntroFirstParagraph={locale.firstIntroFirstParagraph}
            />
          </div>
        </Background>
        <Background background="color-bg-nr7" withPadding>
          <div className="uk-container uk-container-medium">
            <Skills />
          </div>
        </Background>
        <Background background="color-bg-nr6" withPadding>
          <div className="uk-container uk-container-medium">
            <HomePortfolio portfolios={portfolios} />
          </div>
        </Background>
        <Background background="color-bg-nr9" withPadding>
          <div className="uk-container uk-container-medium">
            <FooterBefore
              title="Nehmen Sie Kontakt mit mir auf..."
              text="Ich freue mich auf Ihren Kontakt!"
              btnLink="/contact"
              btnText="Contact"
            />
          </div>
        </Background>
      </Loading>
    </div>
  )
}

export default Home
