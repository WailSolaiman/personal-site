import React from 'react'
import BackgroundImage from 'gatsby-background-image'
import HeroImageSmallStyles from '../styles/hero-image-small.module.scss'

const HeroImageSmall = ({ imageData, title = '', subtitle = '' }) => {
    return (
        <div className={HeroImageSmallStyles.heroImage}>
            <BackgroundImage
                Tag="section"
                className={HeroImageSmallStyles.media}
                fluid={imageData}>
                <div className={HeroImageSmallStyles.overlay}>
                    <div className={HeroImageSmallStyles.content}>
                        <h1 className={HeroImageSmallStyles.title}>{title}</h1>
                        <p className={HeroImageSmallStyles.subtitle}>
                            {subtitle}
                        </p>
                    </div>
                </div>
            </BackgroundImage>
        </div>
    )
}

export default HeroImageSmall
