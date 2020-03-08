import React, { useState, useEffect, useContext } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import HeroImageSmallStyles from '../heroImageSmall'
import Background from '../background'
import Head from '../head'
import AboutMe from './aboutMe'
import Experience from './experience'
import Education from './education'
import WebTechniques from './webTechniques'
import Skills from './skills'
import Loading from '../loading'
import { GlobalStateLanguageContext } from '../../context/GlobalContextLanguageProvider'
import AboutStyles from '../../styles/about.module.scss'

const Index = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "images/header/about2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      gcms {
        personalWebsiteAbouts {
          title
          subTitle
          aboutMeHeader
          aboutMeFirstParagraph
          aboutMeSecondParagraph
          collegeHeader
          collegeTitle
          collegeSubtitle
          collegeThirdTitle
          workExperienceHeader
          workExperienceData
          webTechniquesHeader
          webTechniques
          skillsHeader
          skillsInfosFirst
          skillsInfosSecond
          learningProcessHeader
          learningProcessFirst
          learningProcessSecond
        }
      }
    }
  `)
  const imageData = data.file.childImageSharp.fluid
  const websiteAboutData = data.gcms.personalWebsiteAbouts
  const state = useContext(GlobalStateLanguageContext)
  const [locale, setlocale] = useState(websiteAboutData[0])
  useEffect(() => {
    if (state.locale === 'De') {
      setlocale(websiteAboutData[0])
    } else if (state.locale === 'En') {
      setlocale(websiteAboutData[1])
    } else if (state.locale === 'Ar') {
      setlocale(websiteAboutData[2])
    }
  }, [websiteAboutData, state])
  return (
    <>
      <Head title="About Me" />
      <HeroImageSmallStyles imageData={imageData} imagePosition="95%" />
      <Loading>
        <Background withPadding>
          <div className="uk-container uk-container-medium">
            <h1 className="uk-margin-small-bottom uk-margin-medium-top uk-text-bold">
              {locale.title}
            </h1>
            <h2 className="uk-margin-small-top uk-margin-medium-bottom uk-text-bold">
              {locale.subTitle}
            </h2>
          </div>
          <div className="uk-container uk-container-medium">
            <div className="uk-section uk-padding-remove-top">
              <div className="uk-width-1-1">
                <AboutMe
                  aboutMeHeader={locale.aboutMeHeader}
                  aboutMeFirstParagraph={locale.aboutMeFirstParagraph}
                  aboutMeSecondParagraph={locale.aboutMeSecondParagraph}
                />
              </div>
              <div className={AboutStyles.flexContainerRow}>
                <div className="uk-width-1-1 uk-width-1-2@m">
                  <Experience
                    workExperienceHeader={locale.workExperienceHeader}
                    workExperienceData={locale.workExperienceData}
                  />
                </div>
                <div className={AboutStyles.flexContainerCol}>
                  <div className="uk-width-1-1">
                    <Education
                      collegeHeader={locale.collegeHeader}
                      collegeTitle={locale.collegeTitle}
                      collegeSubtitle={locale.collegeSubtitle}
                      collegeThirdTitle={locale.collegeThirdTitle}
                    />
                  </div>
                  <div className="uk-width-1-1">
                    <WebTechniques
                      webTechniquesHeader={locale.webTechniquesHeader}
                      techniques={locale.webTechniques}
                    />
                  </div>
                </div>
              </div>
              <div className="uk-width-1-1">
                <Skills
                  skillsHeader={locale.skillsHeader}
                  learningProcessHeader={locale.learningProcessHeader}
                  skillsInfosFirst={locale.skillsInfosFirst}
                  skillsInfosSecond={locale.skillsInfosSecond}
                  learningProcessFirst={locale.learningProcessFirst}
                  learningProcessSecond={locale.learningProcessSecond}
                />
              </div>
            </div>
          </div>
        </Background>
      </Loading>
    </>
  )
}

export default Index
