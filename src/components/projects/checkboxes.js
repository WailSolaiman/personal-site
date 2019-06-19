import React from 'react'

const Checkboxes = props => {
    return (
        <label>
            <input className="uk-checkbox" type="checkbox" {...props} />
            <span className="uk-margin-small-left">{props.projectdev}</span>
        </label>
    )
}

export default Checkboxes
