import React, { useReducer, createContext } from 'react'
import storage from 'local-storage-fallback'

const GlobalStateThemeContext = createContext()
const GlobalDispatchThemeContext = createContext()

const reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      storage.setItem('isDark', !state.isDark)
      return {
        isDark: !state.isDark,
      }
    default:
      return state
  }
}

const GlobalContextThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    isDark: storage.getItem('isDark')
      ? JSON.parse(storage.getItem('isDark'))
      : false,
  })
  return (
    <GlobalStateThemeContext.Provider value={state}>
      <GlobalDispatchThemeContext.Provider value={dispatch}>
        {children}
      </GlobalDispatchThemeContext.Provider>
    </GlobalStateThemeContext.Provider>
  )
}

export {
  GlobalContextThemeProvider,
  GlobalStateThemeContext,
  GlobalDispatchThemeContext,
}
