import React from 'react'
import AppContext from './AppContext';

const AppStore = (props) => {
  return (
    <AppContext.Provider value={{
      
    }}>
      {props.children}
    </AppContext.Provider>
  )
}

export default AppStore
