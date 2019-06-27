import React, { useState } from 'react'
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
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const handleNameChange = e => {
        setName(e.target.value)
    }
    const emailRegularExp = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
    const isDisabled = () => {
        if (
            !name ||
            name.length === 0 ||
            !emailRegularExp.test(email) ||
            !message ||
            message.length < 10
        ) {
            return true
        }
        return false
    }
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
                        recaptchaRef.current.getValue()
                    }}
                >
                    <input type="hidden" name="form-name" value="contact" />
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={handleNameChange}
                        className="uk-input uk-margin-small-bottom"
                        placeholder="Name"
                    />
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        className="uk-input uk-margin-small-bottom"
                        placeholder="E-Mail"
                    />
                    <textarea
                        name="message"
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                        className="uk-textarea uk-margin-small-bottom"
                        rows="5"
                        placeholder="Nachricht"
                    ></textarea>
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
                    <button
                        type="submit"
                        disabled={isDisabled()}
                        className="uk-button uk-button-primary uk-margin-small-top"
                    >
                        Send
                    </button>
                </form>
            </BackgroundImage>
        </Layout>
    )
}

export default ContactPage
