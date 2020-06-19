import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'
import HeroImageSmall from '../components/heroImageSmall'
import PageNotFoundStyles from '../styles/page-not-found.module.scss'

const NotFound = () => {
	const data = useStaticQuery(graphql`
		{
			file(relativePath: { eq: "images/header/header.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 1920) {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`)
	const imageData = data.file.childImageSharp.fluid
	return (
		<Layout>
			<Head title="404" />
			<HeroImageSmall imageData={imageData} />
			<div className="uk-container uk-container-medium">
				<h1 className="uk-text-center uk-text-bold uk-heading-2xlarge uk-margin-medium-top uk-margin-small-bottom color-nr3">
					404
				</h1>
				<h1 className="uk-text-bold uk-text-center">Oops! Page not found</h1>
				<p className="uk-text-bold uk-text-center uk-margin-small-bottom">
					The page you are looking for does not exist
				</p>
				<a className={`${PageNotFoundStyles.toHomeBtn}`} href="/">
					Back To Homepage
				</a>
			</div>
		</Layout>
	)
}

export default NotFound
