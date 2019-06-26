import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Recaptcha from 'react-google-recaptcha'
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
    const recaptchaRef = React.createRef()
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
                    method="post"
                    data-netlify="true"
                    data-netlify-recaptcha="true"
                    action="/success/"
                    onSubmit={() => {
                        recaptchaRef.current.execute()
                    }}
                >
                    <input type="hidden" name="form-name" value="contact" />
                    <p>
                        <label>
                            Name: <input type="text" name="name" />
                        </label>
                    </p>
                    <p>
                        <label>
                            E-mail: <input type="email" name="email" />
                        </label>
                    </p>
                    <p>
                        <label>
                            Nachricht: <textarea name="message"></textarea>
                        </label>
                    </p>
                    <p>
                        Bitte beachten Sie die{' '}
                        <AniLink fade to="/dataPrivacy">
                            Datenschutzerklärung.
                        </AniLink>
                    </p>
                    <Recaptcha
                        ref={recaptchaRef}
                        sitekey={'6LeMq6oUAAAAAIv7RWer04VJnvpLio28b3pqhjj6'}
                    />
                    <p>
                        <button type="submit">Send</button>
                    </p>
                </form>
            </BackgroundImage>
        </Layout>
    )
}

export default ContactPage
