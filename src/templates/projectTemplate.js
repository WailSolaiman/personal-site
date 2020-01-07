import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Project from '../components/project'

export const query = graphql`
    query($slug: String!) {
        projectsJson(slug: { eq: $slug }) {
            title
            description {
                tool
                isUsed
            }
            url
            community
            development
            state
            image {
                childImageSharp {
                    fluid(maxWidth: 1920) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    }
`

const projectTemplate = ({ data }) => {
    const project = data.projectsJson
    const {title, description, url, community, state, development} = project
    const imageData = project.image.childImageSharp.fluid
    return (
        <Layout>
            <Project
                title={title}
                description={description}
                url={url}
                community={community}
                state={state}
                development={development}
                imageData={imageData}
            />
        </Layout>
    )
}

export default projectTemplate
