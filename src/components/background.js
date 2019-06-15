import React from 'react'
import BackgroundStyles from '../styles/background.module.scss'

const Background = ({ background, withPadding = false, children }) => {
    return (
        <div className={background}>
            <div
                className={
                    withPadding
                        ? BackgroundStyles.bgWithPadding
                        : BackgroundStyles.bgWithoutPadding
                }
            >
                <div className="uk-container uk-container-small">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Background
