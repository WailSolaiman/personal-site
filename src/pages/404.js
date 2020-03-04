import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

const NotFound = () => {
  return (
    <Layout>
      <Head title="404" />
      <h1 className="uk-text-center uk-text-bold uk-heading-2xlarge uk-margin-small-bottom color-nr3">
        404
      </h1>
      <h1 className="uk-text-bold uk-text-center uk-margin-small-bottom">
        Oops! Page not found
      </h1>
      <p className="uk-text-bold uk-text-center uk-margin-small-bottom">
        Die von ihnen gesuchte seite existiert leider nicht.
      </p>
      <p className="uk-text-bold uk-text-center">
        <Link to="/">Home</Link>
      </p>
    </Layout>
  )
}

export default NotFound
