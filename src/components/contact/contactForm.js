import React, { useState } from 'react'
import { Link } from 'gatsby'
import Recaptcha from 'react-google-recaptcha'
import ContactFormStyles from '../../styles/contact-form.module.scss'

const ContactForm = ({
  firstFormTitle = '',
  secondFormTitle = '',
  dataProtection = '',
  dataProtectionLink = '',
}) => {
  const recaptchaRef = React.createRef()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [checked, setChecked] = useState(false)
  const [captchaValue, setCaptchaValue] = useState('')
  const handleNameChange = e => {
    setName(e.target.value)
  }
  const emailRegularExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
  const isDisabled = () => {
    if (
      !name ||
      !emailRegularExp.test(email) ||
      !message ||
      !checked ||
      !captchaValue
    ) {
      return true
    }
    return false
  }
  const onRecaptchaChange = value => {
    setCaptchaValue(value)
  }
  return (
    <div className="uk-section">
      <div className="uk-container uk-container-medium">
        <h2 className="uk-text-center uk-margin-medium-bottom">
          {firstFormTitle} <br />
          {secondFormTitle}
        </h2>
        <form
          name="contact"
          method="post"
          data-netlify="true"
          data-netlify-recaptcha="true"
          action="/success/"
          onSubmit={() => {
            recaptchaRef.current.getValue()
          }}>
          <input type="hidden" name="form-name" value="contact" />
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleNameChange}
            className={`uk-input uk-margin-small-bottom uk-form-large ${ContactFormStyles.formElement}`}
            placeholder="Name"
          />
          <input
            type="email"
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className={`uk-input uk-margin-small-bottom uk-form-large ${ContactFormStyles.formElement}`}
            placeholder="E-Mail"
          />
          <textarea
            name="message"
            value={message}
            onChange={e => setMessage(e.target.value)}
            className={`uk-textarea uk-margin-small-bottom uk-form-large ${ContactFormStyles.formElement}`}
            rows="7"
            placeholder="Nachricht"
          />
          <label htmlFor="dataPrivacy">
            <input
              id="dataPrivacy"
              name="dataPrivacy"
              type="checkbox"
              checked={checked}
              onChange={() => setChecked(!checked)}
            />
            {dataProtection} <Link to="/dataPrivacy">{dataProtectionLink}</Link>
            .
          </label>
          <Recaptcha
            ref={recaptchaRef}
            sitekey="6Lfwv9kUAAAAAGi_hcTsjGndlNQafDMHT5VnJmv4"
            onChange={onRecaptchaChange}
          />
          <button
            type="submit"
            disabled={isDisabled()}
            className={`uk-button uk-button-primary uk-margin-small-top sendButton ${ContactFormStyles.sendButton}`}>
            Send
          </button>
        </form>
      </div>
    </div>
  )
}

export default ContactForm
