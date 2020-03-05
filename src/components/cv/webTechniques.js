import React from 'react'

const WebTechniques = ({ webTechniquesHeader = '', techniques = [] }) => {
  return (
    <>
      <h3 className="uk-heading-small">{webTechniquesHeader}</h3>
      {techniques.map((item, index) => {
        return (
          <div key={index}>
            <h4 className="uk-margin-remove">{item.technique}</h4>
          </div>
        )
      })}
    </>
  )
}

export default WebTechniques
