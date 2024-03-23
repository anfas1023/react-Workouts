import React, { createContext, useState } from 'react'
export const ContextProvider=createContext()
 const ContextData = ({childrens}) => {
    const [state,setState]=useState(0)
  return (
    <div>
      <ContextProvider value={{state,setState}}>
      {childrens}
      </ContextProvider>
    </div>
  )
}

export default ContextData
