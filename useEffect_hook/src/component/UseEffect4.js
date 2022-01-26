import React,{useEffect, useState} from 'react'

function UseEffect4(props) {
    const [isAdmin, setisAdmin] = useState(true)

    useEffect(() => {
        setisAdmin(props.showComponent)
        
    }, [props.showComponent])
    console.log('rending UseEffects4', props.showComponent);
    return (
        <div>
            <p>UseEffect 4</p>
            {isAdmin ? 'Admin' : 'User'}
        </div>
    )
}

export default UseEffect4
