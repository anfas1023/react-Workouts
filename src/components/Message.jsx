export default function Message(){

    function handleEvent(){
    console.log("button clicked");
    }
    return <div>
        <button onClick={handleEvent}>Click heree</button>
    </div>
}