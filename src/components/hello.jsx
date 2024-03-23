function Hello({name,message,emoji,seatNumbers,person}){
    return (<div>  

        <h1>Heloo where are ypu...!!</h1>
        <h5>{name} {message} {emoji} {seatNumbers}</h5>
        <p>{person.name} {person.age} {person.salaries}</p>

    </div>
    )
}

export default Hello