import React, { useState, useEffect, useContext } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Head from '../head'
import HeroImageSmallStyles from '../heroImageSmall'
import Background from '../background'
import Loading from '../loading'
import { GlobalStateLanguageContext } from '../../context/GlobalContextLanguageProvider'
import ImprintStyles from '../../styles/imprint.module.scss'

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
					imprintContent {
						html
					}
				}
			}
		}
	`)
	const imageData = data.file.childImageSharp.fluid
	const websiteAllData = data.gcms.personalWebsiteAlls
	const state = useContext(GlobalStateLanguageContext)
	const [imprintData, setImprintData] = useState(websiteAllData[0])
	useEffect(() => {
		if (state.locale === 'De') {
			setImprintData(websiteAllData[0])
		} else if (state.locale === 'En') {
			setImprintData(websiteAllData[1])
		} else if (state.locale === 'Ar') {
			setImprintData(websiteAllData[2])
		}
	}, [websiteAllData, state])
	return (
		<div>
			<Head title="Imprint" />
			<HeroImageSmallStyles imageData={imageData} />
			<Loading>
				<div className="uk-container uk-container-medium">
					<Background background="uk-background-default" withPadding>
						<div
							className={ImprintStyles.container}
							// eslint-disable-next-line react/no-danger
							dangerouslySetInnerHTML={{
								__html: imprintData.imprintContent.html,
							}}
						/>
					</Background>
				</div>
			</Loading>
		</div>
	)
}

export default Index
