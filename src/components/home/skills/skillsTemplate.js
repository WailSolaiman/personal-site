import React from 'react'
import SkillsStyles from '../../../styles/skills.module.scss'

const SkillsTemplate = ({ title, skills, img = '', imgAlt = '' }) => {
    return (
        <>
            <h3 className="uk-text-bold">{title}</h3>
            <div className="uk-text-center" uk-grid="">
                {skills.map((skill, index) => {
                    if (skill.icon === 'img') {
                        return (
                            <div
                                key={index}
                                className="uk-width-1-4 uk-card uk-card-body color-bg-nr6"
                            >
                                <img
                                    src={img}
                                    alt={imgAlt}
                                    width="128"
                                    height="128"
                                />
                            </div>
                        )
                    }
                    return (
                        <div
                            key={index}
                            className="uk-width-1-4 uk-card uk-card-body color-bg-nr6"
                        >
                            <i
                                className={
                                    `${skill.icon} colored` +
                                    ' ' +
                                    SkillsStyles.icon
                                }
                            ></i>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default SkillsTemplate
