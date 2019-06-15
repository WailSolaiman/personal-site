import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'
import AvatarStyles from '../../styles/avatar.module.scss'

const Avatar = () => {
    const data = useStaticQuery(graphql`
        {
            file(relativePath: { eq: "avatar.jpg" }) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)
    const profileImsage = data.file.childImageSharp.fluid

    return (
        <div className={AvatarStyles.avatar}>
            <Image fluid={profileImsage} alt="profile-image" />
        </div>
    )
}

export default Avatar
