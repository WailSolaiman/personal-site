import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout'
import Background from '../components/background'
import Head from '../components/head'
import Intro from '../components/home/intro'
import Avatar from '../components/home/avatar'
import Skills from '../components/home/skills'
import ProjectPreview from '../components/projectPreview'

const getDatafromGraphQL = () => {
    const data = useStaticQuery(graphql`
        {
            allProjectsJson {
                edges {
                    node {
                        id
                        title
                        slug
                        development
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
    return data.allProjectsJson.edges
}

const IndexPage = () => {
    const projects = getDatafromGraphQL()
    const latest = ['Erxleben', 'Aerolingua', 'Babenstieg']

    return (
        <Layout>
            <Head title="Home" />
            <Background background="color-bg-nr2" withPadding={true}>
                <Avatar />
                <h1 className="uk-text-bold uk-text-center uk-margin-small-bottom color-nr5">
                    Wail Solaiman
                </h1>
                <h2 className="uk-text-center uk-margin-small-top color-nr5">
                    Frontend Webentwickler
                </h2>
            </Background>
            <Background background="color-bg-nr5" withPadding={true}>
                <Intro />
            </Background>
            <Background background="uk-background-default" withPadding={true}>
                <Skills />
            </Background>
            <Background background="color-bg-nr3" withPadding={true}>
                <h1 className="uk-text-center uk-text-bold uk-margin-medium-bottom color-nr6">
                    Letzte Projekte
                </h1>
                <div uk-grid="">
                    {projects.map(({ node: project }) => {
                        return latest.map(item => {
                            if (project.title === item) {
                                return (
                                    <ProjectPreview
                                        key={project.id}
                                        title={project.title}
                                        slug={project.slug}
                                        imageData={
                                            project.image.childImageSharp.fluid
                                        }
                                    />
                                )
                            }
                            return null
                        })
                    })}
                </div>
            </Background>
        </Layout>
    )
}

export default IndexPage
