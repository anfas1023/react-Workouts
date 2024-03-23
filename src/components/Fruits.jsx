import Fruit from "./Fruit"
import React, { useContext } from 'react';

import Data from '../App'
export default function Fruits(){
    let fruitsArr=["apple","orange","Grape","Pinaplle","Strawbeery"]
    let fruitObj=[
        {name:"Mango",price:600,soldout:true},
        {name:"Banana",price:700,soldout:false},
        {name:"orange",price:400,soldout:false}
    ]
    let value=useContext(Data)
    console.log("cd",value);
    return (
        <div>

<ol>
        {value.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ol>

        <ul>
            {fruitObj.map((fruit)=>{
            //   return  <li key={fruit.name}>{fruit.name} {fruit.price}</li>
         return  <Fruit key={fruit.name} name={fruit.name} price={fruit.price} soldout={fruit.soldout}/>
            })}
        </ul>
    </div>
    )
}