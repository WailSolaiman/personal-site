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
            <h2 className="uk-margin-small-top uk-text-bold">
                Berufserfahrung
            </h2>
            {allJobExperience.map(({ node: job }, index) => {
                return (
                    <div key={index}>
                        <p className="uk-margin-remove-bottom">
                            <span className="uk-text-bold">
                                {job.community}
                            </span>{' '}
                            {job.start_date} - {job.end_date} ({job.activity})
                        </p>
                    </div>
                )
            })}
            <p></p>
        </div>
    )
}

export default Experience
