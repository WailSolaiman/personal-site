import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Layout from '../components/layout'
import BackgroundImage from '../components/backgroundImage'
import Head from '../components/head'
import { graphql, useStaticQuery } from 'gatsby'

const ContactPage = () => {
    const data = useStaticQuery(graphql`
        {
            file(relativePath: { eq: "images/header/contact.jpg" }) {
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
            <BackgroundImage imageData={imageData} withPadding={true}>
                <h1 className="uk-text-bold uk-text-center uk-margin-large-bottom">
                    Kontakt
                </h1>
                <h2>Was kann ich für Sie tun?</h2>
                <form
                    name="contact"
                    method="POST"
                    data-netlify-recaptcha="true"
                    data-netlify="true"
                    action="./success.js"
                >
                    <fieldset className="uk-fieldset">
                        <div className="uk-margin">
                            <input
                                className="uk-input"
                                type="text"
                                placeholder="Name und Vorname"
                                name="name"
                            />
                        </div>
                        <div className="uk-margin">
                            <input
                                className="uk-input"
                                type="email"
                                placeholder="E-Mail"
                                name="email"
                            />
                        </div>
                        <div className="uk-margin">
                            <textarea
                                className="uk-textarea"
                                rows="5"
                                placeholder="Nachricht"
                                name="message"
                            ></textarea>
                        </div>
                        <div>
                            <p>
                                Bitte beachten Sie die{' '}
                                <AniLink fade to="/dataPrivacy">
                                    Datenschutzerklärung.
                                </AniLink>
                            </p>
                        </div>
                        <div className="uk-margin">
                            <div data-netlify-recaptcha="true"></div>
                        </div>
                        <div className="uk-margin">
                            <input
                                className="uk-button uk-button-default"
                                type="submit"
                                value="Send"
                            />
                        </div>
                    </fieldset>
                </form>
            </BackgroundImage>
        </Layout>
    )
}

export default ContactPage
