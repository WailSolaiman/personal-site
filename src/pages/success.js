import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

const Success = () => {
    return (
        <Layout>
            <Head title="Success" />
            <h1 className="uk-text-bold uk-text-center uk-margin-small-bottom">
                Vielen Dank für Ihre Nachricht
            </h1>
            <p className="uk-text-bold uk-text-center uk-margin-small-bottom">
                Ich werde mich schnellstmöglich bei Ihnen melden.
            </p>
        </Layout>
    )
}

export default Success
