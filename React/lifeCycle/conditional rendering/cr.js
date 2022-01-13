function MyComponent(props) {
    const [isAdmin, setisAdmin] = React.useState(true)
    const [adminName, setAdminName] = React.useState("guru") // search pased on the comp
    const [user,setuser] = React.useState("Jalaj")

    const updateAdmin=()=>{
        if(adminName==="Guru"){
            setAdminName('ajay')
        }else{
            setAdminName("Guru")
        }

        // if(isAdmin){
        //     setisAdmin(false)
        // }else{
        //     setisAdmin(true)
        // }
    }

    const buttonElement = <button
    onClick = {()=>{updateAdmin()}}
    >Update Admin</button>

    if(isAdmin){
        return <div>
            <p className={isAdmin ? 'textColor': ''}>Admin Name - {adminName}</p>
            <button  style = {adminName.includes('u') ? {
                color:"red",
                border:"2px solod black",
                backgroundColor : "gray"
            } :{
                color:"blue",
                border:"1px solod red",
                backgroundColor : "green"
            }}>Add</button>
            <button>Delete</button>
            {buttonElement}
            {adminName.includes('u') ? "u is present in admin Name":"u is present  NOT in admin Name" }
        </div>
    } else{
        return <div>
         
            <p className ={user.includes('a')? 'textColor':'bgColor'}> User Name- {user}</p>
            {buttonElement}
        </div>
    }
}

ReactDOM.render(<MyComponent/>,document.getElementById("container"))