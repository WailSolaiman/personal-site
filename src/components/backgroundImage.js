import React from 'react'
import BackgroundImageStyles from '../styles/background-image.module.scss'
import Image from 'gatsby-image'

const BackgroundImage = ({ imageData = '', withPadding = false, children }) => {
    return (
        <div>
            <Image
                fluid={imageData}
                alt="header"
                className="uk-box-shadow-xlarge"
                style={{ minHeight: '250px' }}
            />
            <div
                className={
                    withPadding
                        ? BackgroundImageStyles.bgWithPadding
                        : BackgroundImageStyles.bgWithoutPadding
                }
            >
                <div className="uk-container uk-container-medium">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default BackgroundImage
