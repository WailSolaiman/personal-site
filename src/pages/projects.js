import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
// import Image from 'gatsby-image'
import Head from '../components/head'
import Layout from '../components/layout'
// import BackgroundImage from '../components/backgroundImage'
import ProjectPreview from '../components/projectPreview'
import HeroImageSmallStyles from '../components/heroImageSmall'
import Background from '../components/background'
import Section from '../components/section'
import FooterBefore from '../components/footerBefore'
// import Checkboxes from '../components/projects/checkboxes'
import ProjectsStyles from '../styles/projects.module.scss'

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
                    fluid(quality: 90, maxWidth: 4160) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `)
    const imageData = data.file.childImageSharp.fluid
    const projects = data.allProjectsJson.edges
    // const [filterdString, setFilterString] = useState('')
    // const [isWPChecked, toggleWP] = useState(false)
    // const [isContaoChecked, toggleContao] = useState(false)
    // const [isVanillaJSChecked, toggleVanillaJS] = useState(false)
    // const [isReactChecked, toggleReact] = useState(false)
    // const [loading, setLoading] = useState(true)
    // useEffect(() => {
    //     setTimeout(() => {
    //         setLoading(false)
    //     }, 500)
    // })
    return (
        <Layout>
            <Head title="Projekte" />
            <HeroImageSmallStyles
                imageData={imageData}
                title="Title"
                subtitle="Subtitle"
            />
            <Background background="color-bg-nr6" withPadding>
                <div className="uk-container uk-container-medium">
                    <Section
                        title="Check Out Our All Ready Demos"
                        text="A great collection of beautiful website templates for your need. Choose the best suitable template and start customizing it."
                    />
                </div>
            </Background>
            <div uk-filter="target: .js-filter" style={{ minHeight: 700 }}>
                <Background background="color-bg-nr9" withPadding={false}>
                    <div className="uk-padding-small">
                        <ul className="uk-subnav uk-subnav-pill uk-margin-remove">
                            <li className="uk-active" uk-filter-control="">
                                <button
                                    className="uk-button uk-button-default color-nr6"
                                    type="button">
                                    All
                                </button>
                            </li>
                            <li uk-filter-control="[data-dev='React']">
                                <button
                                    className="uk-button uk-button-default color-nr6"
                                    type="button">
                                    React
                                </button>
                            </li>
                            <li uk-filter-control="[data-dev='WordPress']">
                                <button
                                    className="uk-button uk-button-default color-nr6"
                                    type="button">
                                    Wordpress
                                </button>
                            </li>
                            <li uk-filter-control="[data-dev='JavaScript']">
                                <button
                                    className="uk-button uk-button-default color-nr6"
                                    type="button">
                                    JavaScript
                                </button>
                            </li>
                            <li uk-filter-control="[data-dev='Contao']">
                                <button
                                    className="uk-button uk-button-default color-nr6"
                                    type="button">
                                    Contao
                                </button>
                            </li>
                        </ul>
                    </div>
                </Background>
                <div className={ProjectsStyles.projects}>
                    <div className="uk-container uk-container-large">
                        <ul
                            className="js-filter"
                            style={{ listStyle: 'none', padding: 0 }}
                            uk-grid="">
                            {projects.map(({ node: project }) => {
                                return (
                                    <ProjectPreview
                                        key={project.id}
                                        title={project.title}
                                        development={project.development}
                                        imageData={
                                            project.image.childImageSharp.fluid
                                        }
                                    />
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
            <Background background="color-bg-nr6" withPadding>
                <div className="uk-container uk-container-medium">
                    <Section
                        title="Check Out Our All Ready Demos"
                        text="A great collection of beautiful website templates for your need. Choose the best suitable template and start customizing it."
                    />
                </div>
                <div className="uk-text-center">TecH. Skills</div>
            </Background>
            <Background background="color-bg-nr9" withPadding>
                <div className="uk-container uk-container-medium">
                    <FooterBefore
                        title="Check Out Our All Ready Demos"
                        text="A great collection of beautiful website templates"
                        btnLink="/"
                        btnText="Home"
                    />
                </div>
            </Background>
        </Layout>
    )
}

export default Projects
