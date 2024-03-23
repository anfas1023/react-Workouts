import { useState,useRef } from "react"

function Counter(){
const [count,setCount]=useState(0)
const [incrementBy,setIncrementBy]=useState(1)
let inputValue=useRef(null)
function increaseincrement(){
    setIncrementBy(incrementBy+1)
}

function decreseincement(){
    setIncrementBy(incrementBy-1)
}


function Increment(){
    setCount(count+incrementBy)
}
function Decrement(){
    if(count>0){
        setCount(count-incrementBy)
    }
}

function handleChange(){
    console.log(inputValue.current.value);
}


return <div>
<h3>Counter Value Is:{count}</h3>
<button onClick={Increment}>+</button>
<button onClick={Decrement}>-</button>
<h5>IncreaseIncrement:{incrementBy}</h5>
<button onClick={increaseincrement}>+</button>
<button onClick={decreseincement}>-</button>

<form>
    <input ref={inputValue} onChange={(e)=>handleChange(e)} type="text"></input>

</form>

</div>
}

export default Counter