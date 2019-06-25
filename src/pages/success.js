import React from 'react'
import Layout from '../components/layout'
import Head from '../components/head'

const Success = () => {
    return (
        <Layout>
            <Head title="Success" />
            <h1 className="uk-text-bold uk-text-center uk-margin-small-bottom uk-margin-large-top">
                Vielen Dank für Ihre Nachricht
            </h1>
            <h2 className="uk-text-bold uk-text-center uk-margin-large-bottom uk-margin-small-top">
                Ich werde mich schnellstmöglich bei Ihnen melden.
            </h2>
        </Layout>
    )
}

export default Success
