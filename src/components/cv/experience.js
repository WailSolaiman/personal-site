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
                    }
                }
            }
        }
    `)
    const allJobExperience = data.allJobExperienceJson.edges

    return (
        <div>
            <h2>Berufserfahrung</h2>
            {allJobExperience.map(({ node: job }, index) => {
                return (
                    <div key={index}>
                        <h3>{job.community}</h3>
                        <p>{job.start_date}</p>
                        <p>{job.end_date}</p>
                        <p>{job.activity}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Experience
