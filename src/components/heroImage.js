import React from 'react'
import scrollTo from 'gatsby-plugin-smoothscroll'
import BackgroundImage from 'gatsby-background-image'
import HeroImageStyles from '../styles/hero-image.module.scss'

const HeroImage = ({ children, imageData, btnText = '', btnLink = '' }) => {
  return (
    <div className={HeroImageStyles.heroImage}>
      <BackgroundImage
        Tag="section"
        className={HeroImageStyles.media}
        fluid={imageData}>
        <div className={HeroImageStyles.overlay}>
          <div className={HeroImageStyles.content}>{children}</div>
        </div>
        {btnText !== '' ? (
          <div className={HeroImageStyles.toIntroBtnContainer}>
            <button
              onClick={() => scrollTo(btnLink)}
              className={HeroImageStyles.toIntroBtn}
              type="button">
              {btnText}
            </button>
          </div>
        ) : (
          <span />
        )}
      </BackgroundImage>
    </div>
  )
}

export default HeroImage
