import React, { useState, useEffect, useContext } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import HeroImageSmallStyles from '../heroImageSmall'
import Head from '../head'
import Avatar from '../home/avatar'
import Background from '../background'
import Section from '../section'
import GoogleMap from '../googleMap'
import ContactForm from './contactForm'
import Loading from '../loading'
import { GlobalStateLanguageContext } from '../../context/GlobalContextLanguageProvider'
import ContactStyles from '../../styles/contact.module.scss'

const Index = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "images/header/contact-me.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      gcms {
        personalWebsiteContacts {
          title
          subtitle
          name
          degree
          job
          firstFormTitle
          secondFormTitle
          dataProtection
          dataProtectionLink
        }
      }
    }
  `)
  const imageData = data.file.childImageSharp.fluid
  const websiteContactData = data.gcms.personalWebsiteContacts
  const state = useContext(GlobalStateLanguageContext)
  const [locale, setlocale] = useState(websiteContactData[0])
  useEffect(() => {
    if (state.locale === 'De') {
      setlocale(websiteContactData[0])
    } else if (state.locale === 'En') {
      setlocale(websiteContactData[1])
    } else if (state.locale === 'Ar') {
      setlocale(websiteContactData[2])
    }
  }, [websiteContactData, state])
  return (
    <>
      <Head title="Contact" />
      <HeroImageSmallStyles imageData={imageData} />
      <Loading>
        <Background background="color-bg-nr6" withPadding>
          <div className="uk-container uk-container-medium">
            <Section title={locale.title} text={locale.subtitle} />
          </div>
        </Background>
        <Background background="color-bg-nr7" withPadding>
          <div className="uk-container uk-container-medium">
            <div uk-grid="">
              <div className="uk-width-1-1 uk-width-1-2@m">
                <Avatar />
                <div>
                  <h1
                    className={`uk-margin-small-top ${ContactStyles.alignCenter}`}>
                    {locale.name}
                  </h1>
                  <h2
                    className={`uk-margin-remove ${ContactStyles.alignCenter}`}>
                    {locale.degree}
                  </h2>
                  <h3
                    className={`uk-margin-remove ${ContactStyles.alignCenter}`}>
                    {locale.job}
                  </h3>
                </div>
              </div>
              <div className="uk-width-1-1 uk-width-1-2@m">
                <GoogleMap />
              </div>
            </div>
          </div>
        </Background>
        <ContactForm
          firstFormTitle={locale.firstFormTitle}
          secondFormTitle={locale.secondFormTitle}
          dataProtection={locale.dataProtection}
          dataProtectionLink={locale.dataProtectionLink}
        />
      </Loading>
    </>
  )
}

export default Index
