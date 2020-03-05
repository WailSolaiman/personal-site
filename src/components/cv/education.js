import React from 'react'

const Education = ({
  collegeHeader = '',
  collegeTitle = '',
  collegeSubtitle = '',
}) => {
  return (
    <>
      <h3 className="uk-heading-small">{collegeHeader}</h3>
      <h4 className="uk-margin-remove">{collegeTitle}</h4>
      <p className="uk-margin-remove-top">{collegeSubtitle}</p>
    </>
  )
}

export default Education
