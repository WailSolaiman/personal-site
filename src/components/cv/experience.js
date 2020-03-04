import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const Experience = () => {
  const data = useStaticQuery(graphql`
    {
      allJobExperienceJson {
        edges {
          node {
            community
            start_date
            end_date
            activity
            tasks
          }
        }
      }
    }
  `)
  const allJobExperience = data.allJobExperienceJson.edges

  return (
    <>
      <h3 className="uk-heading-small">Berufserfahrung</h3>
      {allJobExperience.map(({ node: job }, index) => {
        return (
          <div key={index}>
            <h4 className="uk-margin-remove">
              {job.start_date} - {job.end_date}
            </h4>
            <h3 className="uk-margin-remove">{job.community}</h3>
            <ul
              className="uk-margin-remove-top"
              style={{ listStyle: 'circle' }}>
              {job.tasks &&
                job.tasks.map((task, index2) => {
                  return (
                    <li key={index2}>
                      <p className="uk-margin-remove">{task}</p>
                    </li>
                  )
                })}
            </ul>
          </div>
        )
      })}
    </>
  )
}

export default Experience
