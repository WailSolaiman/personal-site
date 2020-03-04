import React, { useReducer, createContext } from 'react'
import storage from 'local-storage-fallback'

const GlobalStateLanguageContext = createContext()
const GlobalDispatchLanguageContext = createContext()

const reducer = (state, action) => {
  switch (action.type) {
    case 'LOCALE_DE':
      storage.setItem('locale', 'De')
      return {
        locale: 'De',
      }
    case 'LOCALE_EN':
      storage.setItem('locale', 'En')
      return {
        locale: 'En',
      }
    case 'LOCALE_AR':
      storage.setItem('locale', 'Ar')
      return {
        locale: 'Ar',
      }
    default:
      return state
  }
}

const GlobalContextLanguageProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    locale:
      storage.getItem('locale') !== null ? storage.getItem('locale') : 'De',
  })
  return (
    <GlobalStateLanguageContext.Provider value={state}>
      <GlobalDispatchLanguageContext.Provider value={dispatch}>
        {children}
      </GlobalDispatchLanguageContext.Provider>
    </GlobalStateLanguageContext.Provider>
  )
}

export {
  GlobalContextLanguageProvider,
  GlobalStateLanguageContext,
  GlobalDispatchLanguageContext,
}
