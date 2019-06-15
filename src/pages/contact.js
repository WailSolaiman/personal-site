import React from 'react'
import Layout from '../components/layout'
import Background from '../components/background'
import Head from '../components/head'

const ContactPage = () => {
    return (
        <Layout>
            <Head title="Contact" />
            <Background background="uk-background-default" withPadding={true}>
                <h1>Contact</h1>
                <form>
                    <fieldset className="uk-fieldset">
                        <div className="uk-margin">
                            <input
                                className="uk-input"
                                type="text"
                                placeholder="Name und Vorname"
                            />
                        </div>
                        <div className="uk-margin">
                            <input
                                className="uk-input"
                                type="email"
                                placeholder="E-Mail"
                            />
                        </div>
                        <div className="uk-margin">
                            <textarea
                                className="uk-textarea"
                                rows="5"
                                placeholder="Nachricht"
                            ></textarea>
                        </div>
                        <div className="uk-margin">
                            <button className="uk-button uk-button-default">
                                Send
                            </button>
                        </div>
                    </fieldset>
                </form>
            </Background>
        </Layout>
    )
}

export default ContactPage
