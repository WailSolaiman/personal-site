import React, { useState } from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Recaptcha from 'react-google-recaptcha'
import Layout from '../components/layout'
import HeroImageSmallStyles from '../components/heroImageSmall'
import Head from '../components/head'
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
    const recaptchaRef = React.createRef()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [captchaValue, setCaptchaValue] = useState('')
    const handleNameChange = e => {
        setName(e.target.value)
    }
    const emailRegularExp = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
    const isDisabled = () => {
        if (
            !name ||
            !emailRegularExp.test(email) ||
            !message ||
            !captchaValue
        ) {
            return true
        }
        return false
    }
    const onRecaptchaChange = value => {
        setCaptchaValue(value)
    }
    return (
        <Layout>
            <Head title="Kontakt" />
            <HeroImageSmallStyles imageData={imageData} />
            <div className="contact uk-section">
                <div className="uk-container uk-container-medium">
                    <h1 className="uk-text-center">
                        Nehmen Sie Kontakt mit mir auf...
                    </h1>
                    <p className="uk-text-center uk-margin-remove">
                        Füllen Sie das untere Formular aus, ich werde mich
                        umgehend bei Ihnen melden.
                    </p>
                    <p className="uk-text-center uk-margin-remove-top uk-margin-medium-bottom">
                        Ich freue mich auf Ihren Kontakt!
                    </p>
                    <form
                        name="contact"
                        method="post"
                        data-netlify="true"
                        data-netlify-recaptcha="true"
                        action="/success/"
                        onSubmit={() => {
                            recaptchaRef.current.getValue()
                        }}>
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
                        />
                        <p>
                            Bitte beachten Sie die{' '}
                            <Link to="/dataPrivacy">Datenschutzerklärung.</Link>
                        </p>
                        <Recaptcha
                            ref={recaptchaRef}
                            sitekey="6Lfwv9kUAAAAAGi_hcTsjGndlNQafDMHT5VnJmv4"
                            onChange={onRecaptchaChange}
                        />
                        <button
                            type="submit"
                            disabled={isDisabled()}
                            className="uk-button uk-button-primary uk-margin-small-top sendButton">
                            Send
                        </button>
                    </form>
                </div>
            </div>
        </Layout>
    )
}

export default ContactPage
