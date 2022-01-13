function MyComponent(){
    const arr =React.useState("tommy")
    console.log(arr);
    console.log(arr[0]);
    console.log(arr[1]);
    return(
        <div>
            <p> UserName- {arr[0]}</p>
            <button onClick={()=>{
                arr[1]("tommy")
            }}>Click</button> 
        </div>
    ) 
}

ReactDOM.render(<MyComponent/>, document.getElementById("container"))