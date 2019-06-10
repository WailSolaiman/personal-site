import React from 'react'
import Layout from '../components/layout'
import Head from '../components/head'
import Avatar from '../components/home/avatar'

const IndexPage = () => {
    return (
        <Layout>
            <Head title="Home" />
            <Avatar />
            <h1>Hello...</h1>
            <h2>
                I'm Wail, a Frontend Web-Developer living in Lübeck - Germany
            </h2>
        </Layout>
    )
}

export default IndexPage
