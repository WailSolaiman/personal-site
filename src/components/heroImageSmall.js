import React from 'react'
import BackgroundImage from 'gatsby-background-image'
import HeroImageSmallStyles from '../styles/hero-image-small.module.scss'

const HeroImageSmall = ({
	imageData,
	title = '',
	subtitle = '',
	imagePosition = 'center',
}) => {
	return (
		<div className={HeroImageSmallStyles.heroImage}>
			<BackgroundImage
				Tag="section"
				className={HeroImageSmallStyles.media}
				style={{ backgroundPosition: imagePosition }}
				fluid={imageData}>
				<div className={HeroImageSmallStyles.overlay}>
					<div className={HeroImageSmallStyles.content}>
						<p className={HeroImageSmallStyles.subtitle}>{subtitle}</p>
						<h1 className={HeroImageSmallStyles.title}>{title}</h1>
					</div>
				</div>
			</BackgroundImage>
		</div>
	)
}

export default HeroImageSmall
