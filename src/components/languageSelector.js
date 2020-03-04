import React, { useContext } from 'react'
import {
  GlobalStateLanguageContext,
  GlobalDispatchLanguageContext,
} from '../context/GlobalContextLanguageProvider'
import LanguageSelectorStyles from '../styles/language-selector.module.scss'

const LanguageSelector = () => {
  const state = useContext(GlobalStateLanguageContext)
  const dispatch = useContext(GlobalDispatchLanguageContext)
  return (
    <div className={LanguageSelectorStyles.container}>
      <div className="uk-button-group">
        <button
          className={`uk-button uk-button-default ${
            LanguageSelectorStyles.button
          } ${
            state.locale === 'De' ? LanguageSelectorStyles.buttonActive : ''
          }`}
          type="button"
          name="DE"
          onClick={() => dispatch({ type: 'LOCALE_DE' })}>
          De
        </button>
        <button
          className={`uk-button uk-button-default ${
            LanguageSelectorStyles.button
          } ${
            state.locale === 'En' ? LanguageSelectorStyles.buttonActive : ''
          }`}
          type="button"
          name="EN"
          onClick={() => dispatch({ type: 'LOCALE_EN' })}>
          En
        </button>
        <button
          className={`uk-button uk-button-default ${
            LanguageSelectorStyles.button
          } ${
            state.locale === 'Ar' ? LanguageSelectorStyles.buttonActive : ''
          }`}
          type="button"
          name="AR"
          onClick={() => dispatch({ type: 'LOCALE_AR' })}>
          Ar
        </button>
      </div>
    </div>
  )
}

export default LanguageSelector
