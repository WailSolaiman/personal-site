import React, { useState, useEffect, useContext } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Head from '../head'
import HeroImageSmallStyles from '../heroImageSmall'
import { GlobalStateLanguageContext } from '../../context/GlobalContextLanguageProvider'
import SuccessMsgStyles from '../../styles/success-msg.module.scss'

const Index = () => {
	const data = useStaticQuery(graphql`
		{
			file(relativePath: { eq: "images/header/header.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 1920) {
						...GatsbyImageSharpFluid
					}
				}
			}
			gcms {
				personalWebsiteAlls {
					successMessageHeader
					successMessageSubheader
					successMessageButton
				}
			}
		}
	`)
	const imageData = data.file.childImageSharp.fluid
	const state = useContext(GlobalStateLanguageContext)
	const websiteAllData = data.gcms.personalWebsiteAlls
	const [successMsgData, setSuccessMsgData] = useState(websiteAllData[0])
	useEffect(() => {
		if (state.locale === 'De') {
			setSuccessMsgData(websiteAllData[0])
		} else if (state.locale === 'En') {
			setSuccessMsgData(websiteAllData[1])
		} else if (state.locale === 'Ar') {
			setSuccessMsgData(websiteAllData[2])
		}
	}, [websiteAllData, state])
	return (
		<>
			<Head title="Success" />
			<HeroImageSmallStyles imageData={imageData} />
			<div className="uk-container uk-container-medium">
				<h1 className="uk-text-bold uk-text-center uk-margin-large-top uk-heading-medium">
					{successMsgData.successMessageHeader}
				</h1>
				<h2 className="uk-text-bold uk-text-center">
					{successMsgData.successMessageSubheader}
				</h2>
				<a className={`${SuccessMsgStyles.button}`} href="/">
					{successMsgData.successMessageButton}
				</a>
			</div>
		</>
	)
}

export default Index
