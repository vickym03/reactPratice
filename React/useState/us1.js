function MyComponent(){
    const [name,setName] = React.useState("ajith")
    const [count,setCount] = React.useState(10)
    return (
        <div>
            <p> UserName- {name}</p>
            <button onClick={()=>{
                setName("Kumar")
            }}> Click</button>
            <hr/>
            <p> UserName- {count}</p>
            <button onClick={()=>{
                setCount(40)
            }}> Click</button>
        </div>
    )
}

ReactDOM.render(<MyComponent/>,document.getElementById("container"))