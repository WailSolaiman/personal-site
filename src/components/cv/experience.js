import React from 'react'

const Experience = ({ workExperienceHeader = '', workExperienceData = [] }) => {
	return (
		<>
			<h3 className="uk-margin-medium-top uk-heading-small">
				{workExperienceHeader}
			</h3>
			{workExperienceData.map(job => {
				return (
					<div key={job.id}>
						<h4 style={{ display: 'none' }} className="uk-margin-remove">
							{job.startDate} - {job.endDate}
						</h4>
						<h3 className="uk-margin-remove">{job.community}</h3>
						<ul
							className="uk-margin-remove-top"
							style={{ listStyle: 'circle' }}>
							{job.tasks &&
								job.tasks.map((task, index2) => {
									return (
										<li key={index2}>
											<p className="uk-margin-remove">{task}</p>
										</li>
									)
								})}
						</ul>
					</div>
				)
			})}
		</>
	)
}

export default Experience
