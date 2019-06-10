import React from 'react'
import Layout from '../components/layout'
import Head from '../components/head'
import Avatar from '../components/home/avatar'

const IndexPage = () => {
    return (
        <Layout>
            <Head title="Home" />
            <Avatar />
            <h1 className="uk-heading-2xlarge">Hello...</h1>
            <h2>
                I'm Wail, a Frontend Web-Developer living in Lübeck - Germany
            </h2>
            <button
                className="uk-button uk-button-default"
                type="button"
                uk-toggle="target: .toggle"
            >
                Toggle
            </button>
            <p className="toggle">Hello!</p>
            <p className="toggle" hidden>
                Bazinga!
            </p>
            <span
                className="uk-margin-small-right"
                uk-icon="icon: check; ratio: 2"
            ></span>
            <span uk-icon="icon: check; ratio: 3.5"></span>
        </Layout>
    )
}

export default IndexPage
