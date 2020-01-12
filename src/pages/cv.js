import React, { useState, useEffect } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from '../components/backgroundImage'
import Layout from '../components/layout'
import Background from '../components/background'
import Head from '../components/head'
import PersonalInfos from '../components/cv/personal-infos'
import Education from '../components/cv/education'
import Experience from '../components/cv/experience'
import TechnischeSkills from '../components/cv/technischeSkills'
import Languages from '../components/cv/languages'

const CV = () => {
    const data = useStaticQuery(graphql`
        {
            file(relativePath: { eq: "images/header/cv.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 1920) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)
    const imageData = data.file.childImageSharp.fluid
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 500)
    })
    return (
        <Layout>
            <Head title="Lebenslauf" />
            <BackgroundImage imageData={imageData} withPadding>
                {loading ? (
                    <div className="spinner-container">
                        <span
                            className="uk-margin-small-right color-nr1"
                            uk-spinner="ratio: 3"
                        />
                    </div>
                ) : (
                    <>
                        <Background
                            background="uk-background-default"
                            withPadding={false}>
                            <h1 className="uk-margin-small-bottom uk-margin-medium-top uk-text-bold">
                                Lebenslauf
                            </h1>
                            <h2 className="uk-margin-small-top uk-margin-medium-bottom uk-text-bold">
                                Wail Solaiman - Bachelor Degree Of Software
                                Engineering
                            </h2>
                        </Background>
                        <Background
                            background="uk-background-muted"
                            withPadding={false}>
                            <PersonalInfos
                                address="Dankwartsgrube 35, 23552 Lübeck, Deutschland"
                                mobile="+49 176 77027452"
                                email="contact@wailsolaiman.com"
                                birthdate="08.06.1982"
                                birthplace="Khartoum / Sudan"
                            />
                        </Background>
                        <Background
                            background="uk-background-default"
                            withPadding={false}>
                            <Education />
                        </Background>
                        <Background
                            background="uk-background-muted"
                            withPadding={false}>
                            <Experience />
                        </Background>
                        <Background
                            background="uk-background-default"
                            withPadding={false}>
                            <TechnischeSkills />
                        </Background>
                        <Background
                            background="uk-background-muted"
                            withPadding={false}>
                            <Languages />
                        </Background>
                    </>
                )}
            </BackgroundImage>
        </Layout>
    )
}

export default CV
