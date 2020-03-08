import React from 'react'

const WebTechniques = ({ webTechniquesHeader = '', techniques = [] }) => {
  return (
    <div className="uk-margin-medium-bottom">
      <h3 className="uk-margin-medium-top uk-heading-small">
        {webTechniquesHeader}
      </h3>
      {techniques.map((item, index) => {
        return (
          <div key={index}>
            <h4 className="uk-margin-remove">{item.technique}</h4>
          </div>
        )
      })}
    </div>
  )
}

export default WebTechniques
