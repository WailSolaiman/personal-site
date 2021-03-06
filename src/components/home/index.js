import React, { useState, useEffect, useContext } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Background from '../background'
import HeroImage from '../heroImage'
import Head from '../head'
import Intro from './intro'
import Avatar from './avatar'
import Skills from './skills'
import HomePortfolio from './homePortfolio'
import FooterBefore from '../footerBefore'
import Loading from '../loading'
import { GlobalStateLanguageContext } from '../../context/GlobalContextLanguageProvider'

const Home = () => {
	const data = useStaticQuery(graphql`
		{
			allPortfolioJson {
				edges {
					node {
						id
						title
						development
						agency
						link
						image {
							childImageSharp {
								fluid {
									...GatsbyImageSharpFluid
								}
							}
						}
					}
				}
			}
			file(relativePath: { eq: "images/header/heroimage.jpg" }) {
				childImageSharp {
					fluid(quality: 90, maxWidth: 4160) {
						...GatsbyImageSharpFluid_withWebp
					}
				}
			}
			gcms {
				personalWebsiteHomes {
					title
					subTitle
					firstIntroHeader
					firstIntroFirstParagraph
					firstIntroSecondParagraph
					firstIntroLink
					secondIntroHeader
					secondIntroFirstParagraph
					secondIntroSecondParagraph
					secondIntroLink
					portfolioTitleHome
					portfolioSubtitleHome
				}
			}
		}
	`)
	const portfolios = data.allPortfolioJson.edges
	const imageData = data.file.childImageSharp.fluid
	const websiteHomeData = data.gcms.personalWebsiteHomes
	const state = useContext(GlobalStateLanguageContext)
	const [locale, setlocale] = useState(websiteHomeData[0])
	useEffect(() => {
		if (state.locale === 'De') {
			setlocale(websiteHomeData[0])
		} else if (state.locale === 'En') {
			setlocale(websiteHomeData[1])
		} else if (state.locale === 'Ar') {
			setlocale(websiteHomeData[2])
		}
	}, [websiteHomeData, state])
	return (
		<div>
			<Head title="Home" />
			<HeroImage imageData={imageData}>
				<Avatar />
				<h1 className="uk-text-center uk-margin-small color-nr7">
					{locale.title}
				</h1>
				<h2 className="uk-text-center uk-margin-small color-nr7">
					<span>{'<'}</span>
					{locale.subTitle}
					<span>{'/>'}</span>
				</h2>
			</HeroImage>
			<Loading>
				<Background background="color-bg-nr6" withPadding>
					<div className="uk-container uk-container-medium">
						<Intro
							firstIntroHeader={locale.firstIntroHeader}
							firstIntroFirstParagraph={locale.firstIntroFirstParagraph}
							firstIntroSecondParagraph={locale.firstIntroSecondParagraph}
							firstIntroLink={locale.firstIntroLink}
							secondIntroHeader={locale.secondIntroHeader}
							secondIntroFirstParagraph={locale.secondIntroFirstParagraph}
							secondIntroSecondParagraph={locale.secondIntroSecondParagraph}
							secondIntroLink={locale.secondIntroLink}
						/>
					</div>
				</Background>
				<Background background="color-bg-nr7" withPadding>
					<div className="uk-container uk-container-medium">
						<Skills />
					</div>
				</Background>
				<Background background="color-bg-nr6" withPadding>
					<div className="uk-container uk-container-medium">
						<HomePortfolio
							portfolios={portfolios}
							portfolioTitleHome={locale.portfolioTitleHome}
							portfolioSubtitleHome={locale.portfolioSubtitleHome}
						/>
					</div>
				</Background>
				<Background background="color-bg-nr9" withPadding>
					<div className="uk-container uk-container-medium">
						<FooterBefore />
					</div>
				</Background>
			</Loading>
		</div>
	)
}

export default Home
