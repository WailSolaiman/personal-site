import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const WebTechniques = () => {
  const data = useStaticQuery(graphql`
    {
      allTechniquesJson {
        edges {
          node {
            technique
          }
        }
      }
    }
  `)
  const allTechniques = data.allTechniquesJson.edges
  return (
    <>
      <h3 className="uk-heading-small">Web Techniques</h3>
      {allTechniques.map(({ node: item }, index) => {
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
