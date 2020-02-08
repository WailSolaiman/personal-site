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
        <div className="uk-width-1-1 uk-width-1-2@m">
            <h3>Berufserfahrung</h3>
            {allJobExperience.map(({ node: job }, index) => {
                return (
                    <div key={index}>
                        <p className="uk-text-small uk-margin-remove">
                            {job.start_date} - {job.end_date}
                        </p>
                        <p className="uk-margin-remove">{job.community}</p>
                        <ul
                            className="uk-margin-remove"
                            style={{ listStyle: 'circle' }}>
                            {job.tasks &&
                                job.tasks.map((task, index2) => {
                                    return <li key={index2}>{task}</li>
                                })}
                        </ul>
                    </div>
                )
            })}
        </div>
    )
}

export default Experience
