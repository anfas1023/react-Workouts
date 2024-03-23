import { useState,useContext,useEffect,useRef } from "react";
import MyContext from '../App'


export default function Form(){
   
    const [name,setname]=useState({firstname:"",email:"",password:""})
    // function handleChange(e){
    //     setname(e.target.value)
    // }

    function handleSubmit(e){
        e.preventDefault()
        console.log(name);
        inputVal.current.style.backgroundColor ='Yellow'
    }
    const inputVal=useRef(null)
    useEffect(()=>{
      inputVal.current.focus()
    },[])




    let value=useContext(MyContext)


    return <div ref={inputVal}>
       {/* <input type="text" onChange={(e)=>handleChange(e)} value={name} ></input>    */}
       {/* <input type="text" onChange={((e)=>setname(e.target.value))} value={name} ></input>    */}
    <form>
    <input type="text" ref={inputVal}   onChange={((e)=>setname({...name,firstname:e.target.value}))} value={name.firstname} ></input> 
       <input type="text" ref={inputVal} onChange={((e)=>setname({...name,email:e.target.value}))} value={name.email} ></input> 
       <input type="text" ref={inputVal} onChange={((e)=>setname({...name,password:e.target.value}))} value={name.password} ></input> 
       <button onClick={handleSubmit}>Submit</button>
    </form>
  {/* {console.log("rfrt",value)}
   {value.map((val)=>{
     <p>{val}</p>
   })} */}

  
           </div>
}