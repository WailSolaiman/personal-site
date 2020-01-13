import React from 'react'
import SkillsStyles from '../../../styles/skills.module.scss'

const SkillsTemplate = ({ title, skills, img = '', imgAlt = '' }) => {
    return (
        <>
            <h1 className="uk-text-bold uk-text-center">{title}</h1>
            <div className="uk-text-center" uk-grid="">
                {skills.map((skill, index) => {
                    if (skill.icon === 'img') {
                        return (
                            <div
                                key={index}
                                className="uk-width-1-1 uk-width-1-2@s uk-width-1-3@m uk-width-1-5@l uk-card uk-card-body color-bg-nr6"
                            >
                                <img
                                    src={img}
                                    alt={imgAlt}
                                    width="128"
                                    height="128"
                                />
                                <p className="uk-text-secondary">
                                    {skill.text}
                                </p>
                            </div>
                        )
                    }
                    return (
                        <div
                            key={index}
                            className="uk-width-1-1 uk-width-1-2@s uk-width-1-3@m uk-width-1-5@l uk-card uk-card-body color-bg-nr6"
                        >
                            <i
                                className={
                                    `${skill.icon} colored ${SkillsStyles.icon}`
                                }
                            />
                            <p className="uk-text-secondary">
                                {skill.text}
                            </p>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default SkillsTemplate
