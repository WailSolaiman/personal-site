import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'
import Head from '../components/head'
import Layout from '../components/layout'
import HeroImageSmallStyles from '../components/heroImageSmall'
import Background from '../components/background'
import Section from '../components/section'
import FooterBefore from '../components/footerBefore'
import Loading from '../components/loading'
import '../styles/projects.scss'

function ProjectPreview({
  imageData,
  title = '',
  development = '',
  url = '',
  agency = '',
  description = [],
  state = '',
}) {
  return (
    <li
      className="uk-width-1-1 uk-width-1-2@s uk-width-1-3@m uk-width-1-4@xl"
      data-dev={`${development}`}>
      <div className="uk-transition-toggle" style={{ position: 'relative' }}>
        <Image fluid={imageData} alt={title} />
        <div className="uk-transition-fade uk-position-cover uk-overlay uk-overlay-primary">
          <div className="projects__container">
            <p className="projects__title">{title}</p>
            <p className="projects__agency">{agency}</p>
            <p
              className={
                state === 'Online'
                  ? 'uk-text-success uk-text-bold uk-margin-remove uk-text-uppercase projects__state'
                  : 'uk-text-danger uk-text-bold uk-margin-remove uk-text-uppercase projects__state'
              }>
              {state}
            </p>
            <div className="projects__tech">
              <p className="projects__tech__header">Web Technologien:</p>
              <div className="projects__tech__list">
                {description.map((item, index) => {
                  return (
                    <p key={index} className="projects__tech__item">
                      {item.tool}
                    </p>
                  )
                })}
              </div>
            </div>
            <a href={url} target="blank" className="projects__link">
              Projekt online ansehen
            </a>
          </div>
        </div>
      </div>
    </li>
  )
}

const Portfolio = () => {
  const data = useStaticQuery(graphql`
    {
      allProjectsJson {
        edges {
          node {
            id
            title
            url
            agency
            state
            development
            description {
              tool
            }
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
      file(relativePath: { eq: "images/header/projects2.jpg" }) {
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
  return (
    <Layout>
      <Head title="Projekte" />
      <HeroImageSmallStyles imageData={imageData} />
      <Loading>
        <Background background="color-bg-nr6" withPadding>
          <div className="uk-container uk-container-medium">
            <Section
              title="Projekte"
              text={`Eine kleine Auswahl meiner Arbeit als 
						Frontend-Webentwickler in den letzten paar Jahren ...`}
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
          <div className="projects">
            <div className="uk-container uk-container-large">
              <ul
                className="js-filter"
                style={{ listStyle: 'none', padding: 0 }}
                uk-grid="">
                {projects.map(({ node: project }) => {
                  const {
                    id,
                    title,
                    url,
                    agency,
                    state,
                    description,
                    development,
                  } = project
                  return (
                    <ProjectPreview
                      key={id}
                      title={title}
                      url={url}
                      agency={agency}
                      state={state}
                      description={description}
                      development={development}
                      imageData={project.image.childImageSharp.fluid}
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
              title="Leistungen"
              text={`Webentwicklung, Webbasierte Content-Management-Systeme, 
							Single Page Applications -SPA-, Responsive Design, Animationen, 
							Suchmaschinenoptimierung, Progressive web apps -PWA-, 
							Mobile-First website design, Modular development und 
							Pagespeed analyse.`}
            />
          </div>
        </Background>
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
      </Loading>
    </Layout>
  )
}

export default Portfolio
