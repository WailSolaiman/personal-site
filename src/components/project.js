import React from 'react'
import { Link } from 'gatsby'
import Image from 'gatsby-image'
import Background from './background'
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
    <Background background="color-bg-nr6" withPadding>
      <h1>{title}</h1>
      <Image fluid={imageData} alt={title} className="uk-box-shadow-xlarge" />
      <div className={`${ProjectStyles.flexContainer}`}>
        <div>
          <h2 className="uk-margin-remove-bottom">Agentur</h2>
          <p className="uk-margin-remove">{community}</p>
        </div>
        <div>
          <h2 className="uk-margin-remove-bottom uk-margin-small-top">
            Projekt
          </h2>
          <p className="uk-margin-remove">{development}</p>
        </div>
        <div>
          <h2 className="uk-margin-remove-bottom uk-margin-small-top">Kunde</h2>
          <p className="uk-margin-remove">{title}</p>
        </div>
        <div>
          <h2 className="uk-margin-remove-bottom uk-margin-small-top">
            Zustand
          </h2>
          <p
            className={
              state === 'Online'
                ? 'uk-text-success uk-margin-remove uk-text-uppercase'
                : 'uk-text-danger uk-margin-remove uk-text-uppercase'
            }>
            {state}
          </p>
        </div>
      </div>
      <h2 className="uk-margin-small-bottom uk-margin-big-top">
        Web-Technologien
      </h2>
      <div className={`${ProjectStyles.list}`}>
        {description.map((item, index) => {
          return (
            <p key={index} className="uk-margin-remove">
              <span
                className="uk-text-success uk-margin-small-right"
                uk-icon="check"
              />
              {item.tool}
            </p>
          )
        })}
      </div>
      <div className="uk-text-center">
        <a
          href={url}
          target="blank"
          className="uk-button uk-button-secondary uk-button-large uk-margin-small-right">
          Projekt online ansehen
        </a>
        <Link
          to="/projects"
          className="uk-button uk-button-secondary uk-button-large">
          Zurück zu allen Projekten
        </Link>
      </div>
    </Background>
  )
}

export default Project
