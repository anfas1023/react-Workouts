import React, { useEffect, useState } from 'react'

export default function Stop() {
    const [time,setTime] =useState(0)
    const [on,SetOn]=useState(false)
   let timer
    useEffect(()=>{
    if(on){
        timer=setInterval(()=>{
            setTime(time+1)
           },1000)
    }
    return ()=>  clearInterval(timer)
    },[on,time])
   function IncrementTime(){
   SetOn((on)=>on=!on)
   }

   function Reset(){
    setTime(0)
    SetOn(false) 
   }

  return (
    <div>
      <h5>Counter time :{time}</h5>
      <button onClick={IncrementTime}>{on ? 'stop' : 'start'}</button>
      <button onClick={Reset}>Reset</button>
    </div>
  )
}
