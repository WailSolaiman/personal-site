import React, { useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Head from '../components/head'
import Layout from '../components/layout'
import Background from '../components/background'
import ProjectPreview from '../components/projectPreview'
import Checkboxes from '../components/projects/checkboxes'

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

const projects = () => {
    const projects = getDatafromGraphQL()
    const [filterdString, setFilterString] = useState('')
    const [isWPChecked, toggleWP] = useState(false)
    const [isContaoChecked, toggleContao] = useState(false)
    const [isVanillaJSChecked, toggleVanillaJS] = useState(false)

    return (
        <Layout>
            <Head title="Projects" />
            <Background background="uk-background-default" withPadding={true}>
                <h1>Projects</h1>
                <div className="uk-margin-small-bottom">
                    <input
                        className="uk-input"
                        type="text"
                        placeholder="Projekte nach Titel filtern"
                        onChange={e => setFilterString(e.target.value)}
                    />
                </div>

                <div className="uk-margin-medium-bottom uk-grid">
                    <Checkboxes
                        projectdev="Wordpress Projekte"
                        checked={isWPChecked}
                        onChange={() => {
                            toggleWP(!isWPChecked)
                            toggleContao(false)
                            toggleVanillaJS(false)
                        }}
                    />
                    <Checkboxes
                        projectdev="Contao Projekte"
                        checked={isContaoChecked}
                        onChange={() => {
                            toggleContao(!isContaoChecked)
                            toggleWP(false)
                            toggleVanillaJS(false)
                        }}
                    />
                    <Checkboxes
                        projectdev="Vanilla JS Projekte"
                        checked={isVanillaJSChecked}
                        onChange={() => {
                            toggleVanillaJS(!isVanillaJSChecked)
                            toggleWP(false)
                            toggleContao(false)
                        }}
                    />
                </div>

                <div uk-grid="">
                    {projects.map(({ node: project }) => {
                        if (
                            project.title
                                .toLowerCase()
                                .includes(filterdString.toLowerCase())
                        ) {
                            if (
                                (!isWPChecked &&
                                    !isContaoChecked &&
                                    !isVanillaJSChecked) ||
                                (isContaoChecked &&
                                    project.development === 'Contao') ||
                                (isWPChecked &&
                                    project.development === 'Wordpress') ||
                                (isVanillaJSChecked &&
                                    project.development === 'Vanilla JS')
                            )
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
                            return null
                        } else {
                            return null
                        }
                    })}
                </div>
            </Background>
        </Layout>
    )
}

export default projects
