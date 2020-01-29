import React, { useState, useEffect } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout'
import Background from '../components/background'
import HeroImage from '../components/heroImage'
import Head from '../components/head'
import Intro from '../components/home/intro'
import Avatar from '../components/home/avatar'
import Skills from '../components/home/skills'
import Portfolio from '../components/home/portfolio'
import FooterBefore from '../components/footerBefore'
// import ProjectPreview from '../components/projectPreview'

const IndexPage = () => {
    const data = useStaticQuery(graphql`
        {
            allPortfolioJson {
                edges {
                    node {
                        id
                        title
                        state
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
            file(relativePath: { eq: "images/header/heroimage.jpg" }) {
                childImageSharp {
                    fluid(quality: 90, maxWidth: 4160) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `)
    const [loading, setLoading] = useState(true)
    const portfolios = data.allPortfolioJson.edges
    const imageData = data.file.childImageSharp.fluid
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    })
    return (
        <Layout>
            <Head title="Home" />
            {
                // <Background background="color-bg-nr7" withPadding={false}>
                //     <div className="uk-alert-danger" uk-alert>
                //         <a className="uk-alert-close" uk-close />
                //         <p>
                //             Lorem ipsum dolor sit amet, consectetur adipiscing
                //             elit, sed do eiusmod tempor incididunt.
                //         </p>
                //     </div>
                // </Background>
            }

            <HeroImage imageData={imageData} btnText="intro" btnLink="#intro">
                <h2 className="uk-text-center uk-margin-big uk-text-bold uk-text-capitalize color-nr8">
                    Diese Seite befindet sich derzeit noch im Aufbau.
                </h2>
                <Avatar />
                <h1 className="uk-text-center uk-margin-small color-nr7">
                    Wail Solaiman
                </h1>
                <p className="uk-text-center uk-margin-small color-nr7">
                    <span>{'<'}</span>
                    Front-End Web Developer
                    <span>{'>'}</span>
                </p>
            </HeroImage>
            {loading ? (
                <div className="spinner-container">
                    <span
                        className="uk-margin-small-right color-nr1"
                        uk-spinner="ratio: 3"
                    />
                </div>
            ) : (
                <>
                    <div id="intro">
                        <Background background="color-bg-nr6" withPadding>
                            <div className="uk-container uk-container-medium">
                                <Intro />
                            </div>
                        </Background>
                        <Background background="color-bg-nr7" withPadding>
                            <div className="uk-container uk-container-medium">
                                <Skills />
                            </div>
                        </Background>
                        <Background background="color-bg-nr6" withPadding>
                            <div className="uk-container uk-container-medium">
                                <Portfolio portfolios={portfolios} />
                            </div>
                        </Background>
                    </div>
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
                </>
            )}
        </Layout>
    )
}

export default IndexPage
