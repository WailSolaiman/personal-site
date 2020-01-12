import React from 'react'
import Image from 'gatsby-image'
import BackgroundImageStyles from '../styles/background-image.module.scss'

const BackgroundImage = ({ imageData = '', withPadding = false, children }) => {
    return (
        <div>
            <Image
                fluid={imageData}
                alt="header"
                className="uk-box-shadow-xlarge"
                style={{ maxHeight: '550px' }}
            />
            <div
                className={
                    withPadding
                        ? BackgroundImageStyles.bgWithPadding
                        : BackgroundImageStyles.bgWithoutPadding
                }>
                <div className="uk-container uk-container-medium">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default BackgroundImage
