import React, { useState } from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import Recaptcha from 'react-google-recaptcha'
import Layout from '../components/layout'
import HeroImageSmallStyles from '../components/heroImageSmall'
import Background from '../components/background'
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
    const [firstname, setFirstName] = useState('')
    const [lastname, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const handleFirstNameChange = e => {
        setFirstName(e.target.value)
    }
    const handleLastNameChange = e => {
        setLastName(e.target.value)
    }
    const emailRegularExp = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
    const isDisabled = () => {
        if (
            !firstname ||
            firstname.length === 0 ||
            !lastname ||
            lastname.length === 0 ||
            !emailRegularExp.test(email) ||
            !message
        ) {
            return true
        }
        return false
    }
    return (
        <Layout>
            <Head title="Kontakt" />
            <HeroImageSmallStyles imageData={imageData} />
            <Background withPadding={false}>
                <div className="contact uk-section">
                    <div className="uk-container uk-container-medium">
                        <h1 className="uk-text-center">
                            Nehmen Sie Kontakt mit mir auf...
                        </h1>
                        <p className="uk-text-center uk-margin-remove">
                            Füllen Sie das untere Formular aus, ich werde mich
                            umgehend bei Ihnen melden.
                        </p>
                        <p className="uk-text-center uk-margin-remove-top uk-margin-large-bottom">
                            Ich freue mich auf Ihren Kontakt!
                        </p>
                        <form
                            uk-grid=""
                            className="uk-grid-medium"
                            name="contact"
                            method="post"
                            data-netlify="true"
                            data-netlify-recaptcha="true"
                            action="/success/"
                            onSubmit={() => {
                                recaptchaRef.current.getValue()
                            }}>
                            <input
                                type="hidden"
                                name="form-name"
                                value="contact"
                            />
                            <div className="uk-width-1-2@m">
                                <label
                                    className="uk-form-label"
                                    htmlFor="vorname">
                                    Vorname
                                    <input
                                        className="uk-input"
                                        id="vorname"
                                        type="text"
                                        name="name"
                                        value={firstname}
                                        onChange={handleFirstNameChange}
                                    />
                                </label>
                            </div>
                            <div className="uk-width-1-2@m">
                                <label
                                    className="uk-form-label"
                                    htmlFor="lastname">
                                    Lastname
                                    <input
                                        className="uk-input"
                                        id="lastname"
                                        type="text"
                                        name="name"
                                        value={lastname}
                                        onChange={handleLastNameChange}
                                    />
                                </label>
                            </div>
                            <div className="uk-width-1-1">
                                <label
                                    className="uk-form-label"
                                    htmlFor="email">
                                    Email
                                    <input
                                        className="uk-input"
                                        id="email"
                                        type="email"
                                        name="email"
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                    />
                                </label>
                            </div>
                            <div className="uk-width-1-1">
                                <label
                                    className="uk-form-label"
                                    htmlFor="message">
                                    Nachricht
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={message}
                                        onChange={e =>
                                            setMessage(e.target.value)
                                        }
                                        className="uk-textarea uk-margin-small-bottom"
                                        rows="5"
                                    />
                                </label>
                            </div>
                            <div className="uk-width-1-1">
                                <p>
                                    Bitte beachten Sie die{' '}
                                    <Link to="/dataPrivacy">
                                        Datenschutzerklärung.
                                    </Link>
                                </p>
                                <Recaptcha
                                    ref={recaptchaRef}
                                    sitekey="6LeMq6oUAAAAAIv7RWer04VJnvpLio28b3pqhjj6"
                                />
                                <button
                                    type="submit"
                                    disabled={isDisabled()}
                                    className="uk-button uk-button-primary uk-margin-medium-top">
                                    Send
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </Background>
        </Layout>
    )
}

export default ContactPage
