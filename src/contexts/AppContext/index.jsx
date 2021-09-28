/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { createContext, useState} from 'react';
import {globalState} from './data'
import React from 'react';

export const GlobalContext = React.createContext();

export const AppContext = (props) => {
  const [contexState, setState] = useState(globalState)

  return (
    <GlobalContext.Provider value={{ contexState, setState }}>
      {props.children}
    </GlobalContext.Provider>
  )
}
