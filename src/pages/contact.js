import React from 'react'
import Recaptcha from 'react-google-recaptcha'
import { graphql, StaticQuery, Link } from 'gatsby'
import Layout from '../components/layout'
import HeroImageSmallStyles from '../components/heroImageSmall'
import Background from '../components/background'
import Head from '../components/head'
import '../styles/contact.scss'

const RECAPTCHA_KEY = process.env.SITE_RECAPTCHA_KEY

class ContactPage extends React.Component {
    recaptchaRef = React.createRef()

    constructor(props) {
        super(props)
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            message: '',
        }
    }

    handleChange = e => this.setState({ [e.target.name]: e.target.value })

    isDisabled = () => {
        const { firstname, lastname, email, message } = this.state
        if (
            !firstname ||
            firstname.length === 0 ||
            !lastname ||
            lastname.length === 0 ||
            !/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email) ||
            !message
        ) {
            return true
        }
        return false
    }

    render() {
        const { firstname, lastname, email, message } = this.state
        return (
            <Layout>
                <Head title="Kontakt" />
                <StaticQuery
                    query={graphql`
                        {
                            file(
                                relativePath: {
                                    eq: "images/header/contact-me.jpg"
                                }
                            ) {
                                childImageSharp {
                                    fluid(maxWidth: 1920) {
                                        ...GatsbyImageSharpFluid
                                    }
                                }
                            }
                        }
                    `}
                    render={data => (
                        <HeroImageSmallStyles
                            imageData={data.file.childImageSharp.fluid}
                        />
                    )}
                />
                <Background withPadding={false}>
                    <div className="contact uk-section">
                        <div className="uk-container uk-container-medium">
                            <h1 className="uk-text-center">
                                Nehmen Sie Kontakt mit mir auf...
                            </h1>
                            <p className="uk-text-center uk-margin-remove">
                                Füllen Sie das untere Formular aus, ich werde
                                mich umgehend bei Ihnen melden.
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
                                onSubmit={() =>
                                    this.recaptchaRef.current.getValue()
                                }>
                                <input
                                    type="hidden"
                                    name="form-name"
                                    value="contact"
                                />
                                <div className="uk-width-1-2@m">
                                    <label
                                        className="uk-form-label"
                                        htmlFor="firstname">
                                        Vorname
                                        <input
                                            className="uk-input"
                                            id="firstname"
                                            type="text"
                                            name="firstname"
                                            value={firstname}
                                            onChange={this.handleChange}
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
                                            name="lastname"
                                            value={lastname}
                                            onChange={this.handleChange}
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
                                            onChange={this.handleChange}
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
                                            onChange={this.handleChange}
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
                                        ref={this.recaptchaRef}
                                        sitekey={RECAPTCHA_KEY}
                                    />
                                    <button
                                        type="submit"
                                        disabled={this.isDisabled()}
                                        className="uk-button uk-button-default uk-margin-medium-top sendButton">
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
}

export default ContactPage
