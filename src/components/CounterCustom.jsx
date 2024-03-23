import UsecustomHook from './UsecustomHook'


export default function Countercustom(){
    const [counter,setCounter]=UsecustomHook(0)
    return <div>
        <h5>counterValue{counter}</h5>
      <button onClick={setCounter}>+</button>
    </div>
}