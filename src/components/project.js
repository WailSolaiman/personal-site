import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Image from 'gatsby-image'
import Background from '../components/background'
import ProjectStyles from '../styles/project.module.scss'

const Project = ({
    imageData,
    title,
    description,
    community,
    state,
    url,
    development,
}) => {
    return (
        <Background background="color-bg-nr6" withPadding={true}>
            <h1>{title}</h1>
            <Image
                fluid={imageData}
                alt={title}
                className="uk-box-shadow-xlarge"
            />
            <h2 className="uk-margin-remove-bottom">Agentur</h2>
            <p className="uk-margin-remove">{community}</p>
            <h2 className="uk-margin-remove-bottom uk-margin-small-top">
                Projekt
            </h2>
            <p className="uk-margin-remove">{development}</p>
            <h2 className="uk-margin-remove-bottom uk-margin-small-top">
                Kunde
            </h2>
            <p className="uk-margin-remove">{title}</p>
            <h2 className="uk-margin-remove-bottom uk-margin-small-top">
                Zustand
            </h2>
            <p
                className={
                    state === 'Online'
                        ? 'uk-text-success uk-margin-remove uk-text-uppercase'
                        : 'uk-text-danger uk-margin-remove uk-text-uppercase'
                }
            >
                {state}
            </p>
            <h2 className="uk-margin-small-bottom uk-margin-small-top">
                Web-Technologien
            </h2>
            <div className={'uk-margin-medium-bottom ' + ProjectStyles.list}>
                {description.map((item, index) => {
                    return (
                        <p key={index} className="uk-margin-remove">
                            <span
                                className={
                                    item.isUsed
                                        ? 'uk-text-success uk-margin-small-right'
                                        : 'uk-text-danger uk-margin-small-right'
                                }
                                uk-icon={item.isUsed ? 'check' : 'close'}
                            ></span>
                            {item.tool}
                        </p>
                    )
                })}
            </div>

            <a
                href={url}
                target="blank"
                className="uk-button uk-button-secondary uk-button-large uk-margin-small-right"
            >
                Dieses Projekt online ansehen
            </a>
            <AniLink
                fade
                to="/projects"
                className="uk-button uk-button-secondary uk-button-large"
            >
                Zurück zu allen Projekten
            </AniLink>
        </Background>
    )
}

export default Project
