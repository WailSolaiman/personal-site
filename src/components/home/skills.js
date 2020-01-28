import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import 'devicon/devicon.css'
import 'devicon/devicon-colors.css'
import SkillsTemplate from './skills/skillsTemplate'

const Skills = () => {
    const data = useStaticQuery(graphql`
        {
            allSkillsJson {
                edges {
                    node {
                        TechSkills {
                            text
                            icon
                        }
                    }
                }
            }
        }
    `)
    const { TechSkills } = data.allSkillsJson.edges[0].node
    return (
        <div>
            <SkillsTemplate skills={TechSkills} />
        </div>
    )
}

export default Skills
