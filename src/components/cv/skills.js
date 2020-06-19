import React from 'react'
import SkillsStyles from '../../styles/skills.module.scss'

const Skills = ({
	skillsHeader = '',
	learningProcessHeader = '',
	skillsInfosFirst = [],
	skillsInfosSecond = [],
	learningProcessFirst = [],
	learningProcessSecond = [],
}) => {
	return (
		<>
			<div>
				<h3 className="uk-margin-medium-top uk-heading-small">
					{skillsHeader}
				</h3>
				<div className={SkillsStyles.flexContainer}>
					<div className="uk-width-1-1 uk-width-1-2@m">
						<dl className="uk-description-list">
							{skillsInfosFirst &&
								skillsInfosFirst.map(skill => {
									return (
										<React.Fragment key={skill.id}>
											<dt className={SkillsStyles.dataTable}>
												{skill.category}
											</dt>
											<dd className={SkillsStyles.dataDetail}>
												{skill.skillsName}
											</dd>
										</React.Fragment>
									)
								})}
						</dl>
					</div>
					<div className="uk-width-1-1 uk-width-1-2@m">
						<dl className="uk-description-list">
							{skillsInfosSecond &&
								skillsInfosSecond.map(skill => {
									return (
										<React.Fragment key={skill.id}>
											<dt className={SkillsStyles.dataTable}>
												{skill.category}
											</dt>
											<dd className={SkillsStyles.dataDetail}>
												{skill.skillsName}
											</dd>
										</React.Fragment>
									)
								})}
						</dl>
					</div>
				</div>
			</div>
			<div>
				<h3 className="uk-margin-medium-top uk-heading-small">
					{learningProcessHeader}
				</h3>
				<div className={SkillsStyles.flexContainer}>
					<div className="uk-width-1-1 uk-width-1-2@m">
						<dl className="uk-description-list">
							{learningProcessFirst &&
								learningProcessFirst.map(skill => {
									return (
										<React.Fragment key={skill.id}>
											<dt className={SkillsStyles.dataTable}>
												{skill.category}
											</dt>
											<dd className={SkillsStyles.dataDetail}>
												{skill.skillsName}
											</dd>
										</React.Fragment>
									)
								})}
						</dl>
					</div>
					<div className="uk-width-1-1 uk-width-1-2@m">
						<dl className="uk-description-list">
							{learningProcessSecond &&
								learningProcessSecond.map(skill => {
									return (
										<React.Fragment key={skill.id}>
											<dt className={SkillsStyles.dataTable}>
												{skill.category}
											</dt>
											<dd className={SkillsStyles.dataDetail}>
												{skill.skillsName}
											</dd>
										</React.Fragment>
									)
								})}
						</dl>
					</div>
				</div>
			</div>
		</>
	)
}

export default Skills
