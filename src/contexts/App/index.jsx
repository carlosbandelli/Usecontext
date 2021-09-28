/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { createContext, useState} from 'react';
import {globalState} from './data'
const GlobalContext = createContext();

export const AppContext = ({children}) => {
  const [state, setState] = useState(globalState)

  return (
    <GlobalContext.Provider value={{ state, setState }}>
      {children}
    </GlobalContext.Provider>
  )
}
