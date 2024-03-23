import React, { useState } from 'react'

export default function ThisComponent() {
const [state,setState]=useState("Login")
// const [log,setLog]=useState("LoginIn")
  return (
    <div>
      <p>{state}</p>
      <button onClick={()=>setState("LogOut")}>{state}</button>
    </div>
  )
}
