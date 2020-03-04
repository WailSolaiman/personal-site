import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout'
import HeroImageSmallStyles from '../components/heroImageSmall'
import Background from '../components/background'
import Head from '../components/head'
import AboutMe from '../components/cv/aboutMe'
import Experience from '../components/cv/experience'
import Education from '../components/cv/education'
import WebTechniques from '../components/cv/webTechniques'
import Skills from '../components/cv/skills'
import Loading from '../components/loading'

const About = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "images/header/about2.jpg" }) {
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
      <Head title="Lebenslauf" />
      <HeroImageSmallStyles imageData={imageData} imagePosition="95%" />
      <Loading>
        <Background withPadding>
          <div className="uk-container uk-container-medium">
            <h1 className="uk-margin-small-bottom uk-margin-medium-top uk-text-bold">
              {'<Wail Solaiman/>'}
            </h1>
            <h2 className="uk-margin-small-top uk-margin-medium-bottom uk-text-bold">
              Bachelor degree of software engineering
            </h2>
          </div>
          <div className="uk-container uk-container-medium">
            <div className="uk-section uk-padding-remove-top">
              <div uk-grid="">
                <div className="uk-width-1-1">
                  <AboutMe />
                </div>
                <div className="uk-width-1-1 uk-width-1-2@m">
                  <Experience />
                </div>
                <div className="uk-width-1-1 uk-width-1-2@m">
                  <Education />
                  <WebTechniques />
                </div>
                <div className="uk-width-1-1">
                  <Skills />
                </div>
              </div>
            </div>
          </div>
        </Background>
      </Loading>
    </Layout>
  )
}

export default About
