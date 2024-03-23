import React, { useContext } from 'react'
import {ContextProvider} from './ContextData'
const Contextget = () => {
    const Context=useContext(ContextProvider);
  return (
    <div>
      <h1>{Context.state}</h1>
      <button onClick={Context.setState}>+</button>
    </div>
  )
}

export default Contextget
