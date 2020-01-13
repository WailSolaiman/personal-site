import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import 'devicon/devicon.css'
import 'devicon/devicon-colors.css'
import SkillsTemplate from './skills/skillsTemplate'
import ContaoImg from '../../data/images/logos/contao.png'
import GatsbyImg from '../../data/images/logos/gatsby.png'

const Skills = () => {
    const data = useStaticQuery(graphql`
        {
            allSkillsJson {
                edges {
                    node {
                        Frontend {
                            text
                            icon
                        }
                        Backend {
                            text
                            icon
                        }
                    }
                }
            }
        }
    `)
    const { Frontend } = data.allSkillsJson.edges[0].node
    const { Backend } = data.allSkillsJson.edges[1].node
    return (
        <div>
            <SkillsTemplate
                title="Frontend Tech. and Tools"
                skills={Frontend}
                img={GatsbyImg}
                imgAlt="Gatsby"
            />
            <SkillsTemplate
                title="Backend Tech. and CMS"
                skills={Backend}
                img={ContaoImg}
                imgAlt="Contao"
            />
        </div>
    )
}

export default Skills
