import React from 'react'

const Education = ({
	collegeHeader = '',
	collegeTitle = '',
	collegeSubtitle = '',
	collegeThirdTitle = '',
}) => {
	return (
		<>
			<h3 className="uk-margin-medium-top uk-heading-small">{collegeHeader}</h3>
			<h3 className="uk-margin-remove">{collegeTitle}</h3>
			<h4 className="uk-margin-remove">{collegeSubtitle}</h4>
			<h5 className="uk-margin-remove-top">{collegeThirdTitle}</h5>
		</>
	)
}

export default Education
