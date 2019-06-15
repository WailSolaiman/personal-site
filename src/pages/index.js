import React from 'react'
import Layout from '../components/layout'
import Background from '../components/background'
import Head from '../components/head'
import Avatar from '../components/home/avatar'
import Skills from '../components/home/skills'

const IndexPage = () => {
    return (
        <Layout>
            <Head title="Home" />
            <Background background="color-bg-nr2" withPadding={true}>
                <Avatar />
                <h1 className="uk-text-bold uk-text-center uk-margin-small-bottom color-nr5">
                    Wail Solaiman
                </h1>
                <h2 className="uk-text-center uk-margin-small-top color-nr5">
                    Frontend Web-Developer
                </h2>
            </Background>
            <Background background="uk-background-default" withPadding={true}>
                <h2 className="uk-text-center uk-text-bold">
                    Was kann ich {'<code>'} für Sie?
                </h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Explicabo aliquam omnis eos nam dolore ex fugiat doloremque
                    ipsa, natus dolores.
                </p>
                <Skills />
            </Background>
        </Layout>
    )
}

export default IndexPage
