import React, { useContext } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'
import { GlobalStateLanguageContext } from '../../context/GlobalContextLanguageProvider'
import IntroStyles from '../../styles/intro.module.scss'

const Intro = ({
	firstIntroHeader = '',
	firstIntroFirstParagraph = '',
	firstIntroSecondParagraph = '',
	firstIntroLink = '',
	secondIntroHeader = '',
	secondIntroFirstParagraph = '',
	secondIntroSecondParagraph = '',
	secondIntroLink = '',
}) => {
	const data = useStaticQuery(graphql`
		{
			image1: file(relativePath: { eq: "images/home/intro1.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 1000) {
						...GatsbyImageSharpFluid
					}
				}
			}
			image2: file(relativePath: { eq: "images/home/intro2.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 1000) {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`)
	const introImg1 = data.image1.childImageSharp.fluid
	const introImg2 = data.image2.childImageSharp.fluid
	const state = useContext(GlobalStateLanguageContext)
	return (
		<>
			<div className={IntroStyles.flexContainer}>
				<div className={IntroStyles.imageContainer}>
					<Image fluid={introImg1} alt="intro1" />
				</div>
				<div
					className={`${IntroStyles.textContainer} ${
						state.locale === 'Ar'
							? IntroStyles.textContainerFirstAr
							: IntroStyles.textContainerFirst
					}`}>
					<h3>{firstIntroHeader}</h3>
					<p className="color-nr3">{firstIntroFirstParagraph}</p>
					<p className="color-nr3">{firstIntroSecondParagraph}</p>
					<a
						className={
							state.locale === 'Ar'
								? IntroStyles.iconLeft
								: IntroStyles.iconRight
						}
						href="/about">
						{firstIntroLink}
						{state.locale === 'Ar' ? (
							<span uk-icon="icon: arrow-left; ratio: 1.2" />
						) : (
							<span uk-icon="icon: arrow-right; ratio: 1.2" />
						)}
					</a>
				</div>
			</div>
			<div className="uk-margin-large" />
			<div className={IntroStyles.flexContainer}>
				<div
					className={`${IntroStyles.textContainer} ${
						state.locale === 'Ar'
							? IntroStyles.textContainerSecondAr
							: IntroStyles.textContainerSecond
					}`}>
					<h3>{secondIntroHeader}</h3>
					<p className="color-nr3">{secondIntroFirstParagraph}</p>
					<p className="color-nr3">{secondIntroSecondParagraph}</p>
					<a
						className={
							state.locale === 'Ar'
								? IntroStyles.iconLeft
								: IntroStyles.iconRight
						}
						href="/portfolio">
						{secondIntroLink}
						{state.locale === 'Ar' ? (
							<span uk-icon="icon: arrow-left; ratio: 1.2" />
						) : (
							<span uk-icon="icon: arrow-right; ratio: 1.2" />
						)}
					</a>
				</div>
				<div className={IntroStyles.imageContainer}>
					<Image fluid={introImg2} alt="intro2" />
				</div>
			</div>
		</>
	)
}

export default Intro
