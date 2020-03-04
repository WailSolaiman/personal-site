import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout'
import HeroImageSmallStyles from '../components/heroImageSmall'
import Head from '../components/head'
import Avatar from '../components/home/avatar'
import Background from '../components/background'
import Section from '../components/section'
import GoogleMap from '../components/googleMap'
import ContactForm from './contactForm'
import Loading from '../components/loading'
import '../styles/contact.scss'

const ContactPage = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "images/header/contact-me.jpg" }) {
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
      <Head title="Kontakt" />
      <HeroImageSmallStyles imageData={imageData} />
      <Loading>
        <Background background="color-bg-nr6" withPadding>
          <div className="uk-container uk-container-medium">
            <Section
              title="Nehmen Sie Kontakt mit mir auf..."
              text={`Schreiben Sie mir einfach kurz an und vergessen Sie nicht, 
							Ihre präferierte Kontaktmöglichkeit anzugeben. 
							Eine Rückmeldung meinerseits erfolgt so schnell wie möglich.`}
            />
          </div>
        </Background>
        <Background background="color-bg-nr7" withPadding>
          <div className="uk-container uk-container-medium">
            <div uk-grid="">
              <div className="uk-width-1-1 uk-width-1-2@m">
                <Avatar />
                <div className="uk-text-center">
                  <h1 className="uk-margin-small-top">Wail Solaiman</h1>
                  <h2 className="uk-margin-remove">
                    Bachelor degree of software engineering.
                  </h2>
                  <h3 className="uk-margin-remove">Frontend Web-Entwickler</h3>
                </div>
              </div>
              <div className="uk-width-1-1 uk-width-1-2@m">
                <GoogleMap />
              </div>
            </div>
          </div>
        </Background>
        <ContactForm />
      </Loading>
    </Layout>
  )
}

export default ContactPage
