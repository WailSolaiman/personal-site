import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout'
import HeroImageSmallStyles from '../components/heroImageSmall'
import Background from '../components/background'
import Head from '../components/head'
import AboutMe from '../components/cv/aboutMe'
import GeneralInfos from '../components/cv/generalInfos'
import Experience from '../components/cv/experience'

const About = () => {
    const data = useStaticQuery(graphql`
        {
            file(relativePath: { eq: "images/header/about.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 1920) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)
    const imageData = data.file.childImageSharp.fluid
    return (
        <Layout>
            <Head title="Lebenslauf" />
            <HeroImageSmallStyles imageData={imageData} imagePosition="95%" />
            <Background withPadding={false}>
                <div className="uk-container uk-container-medium">
                    <h1 className="uk-margin-small-bottom uk-margin-medium-top uk-text-bold">
                        Wail Solaiman
                    </h1>
                    <h2 className="uk-margin-small-top uk-margin-medium-bottom uk-text-bold">
                        Bachelor degree of software engineering.
                    </h2>
                </div>
            </Background>
            <Background withPadding={false}>
                <div className="uk-container uk-container-medium">
                    <div className="uk-section uk-padding-remove-top">
                        <div uk-grid="">
                            <AboutMe />
                            <Experience />
                            <GeneralInfos />
                        </div>
                    </div>
                </div>
            </Background>
        </Layout>
    )
}

export default About
