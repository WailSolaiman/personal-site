import React, { useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Head from '../components/head'
import Layout from '../components/layout'
import BackgroundImage from '../components/backgroundImage'
import ProjectPreview from '../components/projectPreview'
import Checkboxes from '../components/projects/checkboxes'

const Projects = () => {
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
            file(relativePath: { eq: "images/header/projects.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 1920) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)
    const imageData = data.file.childImageSharp.fluid
    const projects = data.allProjectsJson.edges
    const [filterdString, setFilterString] = useState('')
    const [isWPChecked, toggleWP] = useState(false)
    const [isContaoChecked, toggleContao] = useState(false)
    const [isVanillaJSChecked, toggleVanillaJS] = useState(false)
    const [isReactChecked, toggleReact] = useState(false)

    return (
        <Layout>
            <Head title="Projekte" />
            <BackgroundImage imageData={imageData} withPadding>
                <h1 className="uk-text-bold uk-text-center uk-margin-large-bottom">
                    Projekte
                </h1>
                <div className="uk-margin-small-bottom">
                    <input
                        className="uk-input uk-form-large"
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
                            toggleReact(false)
                        }}
                    />
                    <Checkboxes
                        projectdev="Contao Projekte"
                        checked={isContaoChecked}
                        onChange={() => {
                            toggleContao(!isContaoChecked)
                            toggleWP(false)
                            toggleVanillaJS(false)
                            toggleReact(false)
                        }}
                    />
                    <Checkboxes
                        projectdev="Vanilla JS Projekte"
                        checked={isVanillaJSChecked}
                        onChange={() => {
                            toggleVanillaJS(!isVanillaJSChecked)
                            toggleWP(false)
                            toggleContao(false)
                            toggleReact(false)
                        }}
                    />
                    <Checkboxes
                        projectdev="React Projekte"
                        checked={isReactChecked}
                        onChange={() => {
                            toggleReact(!isReactChecked)
                            toggleWP(false)
                            toggleContao(false)
                            toggleVanillaJS(false)
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
                                    !isVanillaJSChecked &&
                                    !isReactChecked) ||
                                (isContaoChecked &&
                                    project.development === 'Contao') ||
                                (isWPChecked &&
                                    project.development === 'Wordpress') ||
                                (isVanillaJSChecked &&
                                    project.development === 'Vanilla JS') ||
                                (isReactChecked &&
                                    (project.development ===
                                        'React Framework' ||
                                        project.development === 'MERN-Stack'))
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
                        }
                        return null
                    })}
                </div>
            </BackgroundImage>
        </Layout>
    )
}

export default Projects
