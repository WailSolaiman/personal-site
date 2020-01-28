import React from 'react'
import SectionStyles from '../styles/section.module.scss'

const section = ({ title = '', text = '' }) => {
    return (
        <div className={SectionStyles.section}>
            <h1 className="uk-text-bold uk-text-center">{title}</h1>
            <p className="uk-text-center uk-margin-small">{text}</p>
        </div>
    )
}

export default section
