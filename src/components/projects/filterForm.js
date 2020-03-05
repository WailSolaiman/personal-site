import React from 'react'
import Background from '../background'
import ProjectPreview from './projectPreview'

const FilterForm = ({ projects }) => {
  return (
    <div uk-filter="target: .js-filter" style={{ minHeight: 700 }}>
      <Background background="color-bg-nr9" withPadding={false}>
        <div className="uk-padding-small">
          <ul className="uk-subnav uk-subnav-pill uk-margin-remove">
            <li className="uk-active" uk-filter-control="">
              <button
                className="uk-button uk-button-default color-nr6"
                type="button">
                All
              </button>
            </li>
            <li uk-filter-control="[data-dev='React']">
              <button
                className="uk-button uk-button-default color-nr6"
                type="button">
                React
              </button>
            </li>
            <li uk-filter-control="[data-dev='WordPress']">
              <button
                className="uk-button uk-button-default color-nr6"
                type="button">
                Wordpress
              </button>
            </li>
            <li uk-filter-control="[data-dev='JavaScript']">
              <button
                className="uk-button uk-button-default color-nr6"
                type="button">
                JavaScript
              </button>
            </li>
            <li uk-filter-control="[data-dev='Contao']">
              <button
                className="uk-button uk-button-default color-nr6"
                type="button">
                Contao
              </button>
            </li>
          </ul>
        </div>
      </Background>
      <div className="projects">
        <div className="uk-container uk-container-large">
          <ul
            className="js-filter"
            style={{ listStyle: 'none', padding: 0 }}
            uk-grid="">
            {projects.map(({ node: project }) => {
              const {
                id,
                title,
                url,
                agency,
                state: state2,
                description,
                development,
              } = project
              return (
                <ProjectPreview
                  key={id}
                  title={title}
                  url={url}
                  agency={agency}
                  state2={state2}
                  description={description}
                  development={development}
                  imageData={project.image.childImageSharp.fluid}
                />
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default FilterForm
