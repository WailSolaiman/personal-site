import React, { useState } from 'react'
import { Link } from 'gatsby'
import Recaptcha from 'react-google-recaptcha'

const ContactForm = () => {
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
    <div className="contact uk-section">
      <div className="uk-container uk-container-medium">
        <h2 className="uk-text-center uk-margin-medium-bottom">
          Füllen Sie das untere Formular aus, <br />
          Ich freue mich auf Ihren Kontakt!
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
            className="uk-input uk-margin-small-bottom uk-form-large"
            placeholder="Name"
          />
          <input
            type="email"
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="uk-input uk-margin-small-bottom uk-form-large"
            placeholder="E-Mail"
          />
          <textarea
            name="message"
            value={message}
            onChange={e => setMessage(e.target.value)}
            className="uk-textarea uk-margin-small-bottom uk-form-large"
            rows="5"
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
            Hiermit akzeptiere ich die von mir zur Kenntnis genommene{' '}
            <Link to="/dataPrivacy">Datenschutzerklärung</Link>.
          </label>

          <Recaptcha
            ref={recaptchaRef}
            sitekey="6Lfwv9kUAAAAAGi_hcTsjGndlNQafDMHT5VnJmv4"
            onChange={onRecaptchaChange}
          />
          <button
            type="submit"
            disabled={isDisabled()}
            className="uk-button uk-button-primary uk-margin-small-top sendButton">
            Send
          </button>
        </form>
      </div>
    </div>
  )
}

export default ContactForm
