import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout'
import Background from '../components/background'
import HeroImage from '../components/heroImage'
import Head from '../components/head'
import Intro from '../components/home/intro'
import Avatar from '../components/home/avatar'
import Skills from '../components/home/skills'
import HomePortfolio from '../components/home/homePortfolio'
import FooterBefore from '../components/footerBefore'

const IndexPage = () => {
    const data = useStaticQuery(graphql`
        {
            allPortfolioJson {
                edges {
                    node {
                        id
                        title
                        development
                        agency
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
    const portfolios = data.allPortfolioJson.edges
    const imageData = data.file.childImageSharp.fluid
    return (
        <Layout>
            <Head title="Home" />
            <HeroImage imageData={imageData} btnText="intro" btnLink="#intro">
                <Avatar />
                <h1 className="uk-text-center uk-margin-small color-nr7">
                    Wail Solaiman
                </h1>
                <h2 className="uk-text-center uk-margin-small color-nr7">
                    <span>{'<'}</span>
                    Frontend Web-Developer
                    <span>{'/>'}</span>
                </h2>
            </HeroImage>
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
                        <HomePortfolio portfolios={portfolios} />
                    </div>
                </Background>
            </div>
            <Background background="color-bg-nr9" withPadding>
                <div className="uk-container uk-container-medium">
                    <FooterBefore
                        title="Nehmen Sie Kontakt mit mir auf..."
                        text="Ich freue mich auf Ihren Kontakt!"
                        btnLink="/contact"
                        btnText="Contact"
                    />
                </div>
            </Background>
        </Layout>
    )
}

export default IndexPage
