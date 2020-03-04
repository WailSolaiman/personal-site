import React from 'react'
import { GlobalContextThemeProvider } from './src/context/GlobalContextThemeProvider'
import { GlobalContextLanguageProvider } from './src/context/GlobalContextLanguageProvider'

const wrapRootElement = ({ element }) => {
  return (
    <GlobalContextThemeProvider>
      <GlobalContextLanguageProvider>{element}</GlobalContextLanguageProvider>
    </GlobalContextThemeProvider>
  )
}

export default wrapRootElement
