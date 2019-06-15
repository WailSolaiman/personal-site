import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Head from '../components/head'
import Layout from '../components/layout'
import Background from '../components/background'
import ProjectPreview from '../components/projectPreview'

const projects = () => {
    const data = useStaticQuery(graphql`
        {
            allProjectsJson {
                edges {
                    node {
                        id
                        title
                        slug
                        description
                        image {
                            childImageSharp {
                                fluid {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                }
            }
        }
    `)

    const projects = data.allProjectsJson.edges

    return (
        <Layout>
            <Head title="Projects" />
            <Background background="uk-background-default" withPadding={true}>
                <h1>Projects</h1>
                <div
                    className="uk-child-width-1-3@m uk-grid-small uk-grid-match"
                    uk-grid=""
                >
                    {projects.map(({ node: project }) => {
                        const id = project.id
                        const title = project.title
                        const slug = project.slug
                        const description = project.description
                        const imageData = project.image.childImageSharp.fluid
                        return (
                            <ProjectPreview
                                key={id}
                                title={title}
                                slug={slug}
                                description={description}
                                imageData={imageData}
                            />
                        )
                    })}
                </div>
            </Background>
        </Layout>
    )
}

export default projects
