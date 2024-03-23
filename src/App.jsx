// import Hello from './components/hello'
import Fruits from './components/Fruits'
// import Conditinolcomponent from "./components/Conditinolcomponent"
// import Message from './components/Message'
import Counter from './components/Counter'
import Form  from './components/Form'
import React from 'react'
import Header  from './components/Header/Header'
import About from './components/About/About'
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import Stop from './components/Stop'
import ThisComponent from './components/ThisComponent'
import { ContextProvider } from './components/context/ContextData'
import Contextget from './components/context/Contextget'


// import Countercustom from './components/CounterCustom'

export let Data=React.createContext()
function App() {

  let seatNumbers=[1,24,8]

  let person={
    name:"Anfas",
    age:22,
    salary:1000000
  }


  let newArr=[1,2,3,4,5]

  return (
    <>
 
      {/* <Hello name="Anfas" message="Hello where are you..!!" emoji="Are you therer" seatNumbers={seatNumbers} person={person}/> */}
      <ContextProvider>
      {/* <Router>
        <Header />
        <Stop/>
        <ThisComponent/>
        <Routes>
          <Route path='/fruit' element={<Fruits />} />
          <Route path='/counter' element={<Counter />} />
          <Route path='/form' element={<Form />} />
        </Routes>
        <About />
      </Router> */}
      <Contextget/>
      </ContextProvider>
    </>
  );
}


 
export default App
