import React ,{useEffect, useState}from 'react'

function UseStateObject() {
    const [person, setperson] = useState({
        firstName: "Mark",
        lastName:"Antony"
    })

    const updateFirstName= ()=>{
        console.log("first name", person.firstName)
        console.log("Last name", person.lastName)
        // NEVER UPDATE LIKE THIS 
        //person.firstName = "luke"
        //setperson(person)

        //first way
        // setperson({
        //     ...person,
        //     firstName: "luke"
        // })

        //second way
        const personCopy = {...person}
        personCopy.firstName = "luke"
        setperson(personCopy)
    }

    useEffect (()=>{
        console.log("person is changed")
    },[person])

    return (
        <div>
<p> Full Name - {person.firstName} {person.lastName}</p>
<button onClick={updateFirstName}> update First Name </button>
        </div>
    )
}

export default UseStateObject
