import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import SkillsTemplate from './skills/skillsTemplate'
import ContaoImg from '../../data/images/contao.png'
import GatsbyImg from '../../data/images/gatsby.png'
import 'devicon/devicon.css'
import 'devicon/devicon-colors.css'

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
                        CMS {
                            text
                            icon
                        }
                        Alternative {
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
    const { CMS } = data.allSkillsJson.edges[2].node
    // const { Alternative } = data.allSkillsJson.edges[3].node

    return (
        <div>
            <SkillsTemplate
                title="Frontend Fähigkeiten"
                skills={Frontend}
                img={GatsbyImg}
                imgAlt="Gatsby"
            />
            <SkillsTemplate title="Backend Fähigkeiten" skills={Backend} />
            <SkillsTemplate
                title="CMS Fähigkeiten"
                skills={CMS}
                img={ContaoImg}
                imgAlt="Contao"
            />
            {/* <SkillsTemplate title="Erste Kenntnisse" skills={Alternative} /> */}
        </div>
    )
}

export default Skills
