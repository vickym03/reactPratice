//events in functional components
function EventComponents(props) {
    const handleClick = (data) =>{
        console.log("button clicked");
        console.log(data);
    }

    return <div>
    <p> EventComponents</p>
    {
        /* the handleclick function will be executed without clicking on the button in the below case 
        <button onClick={handleClick()}>
         click first way 
         <button/>
        */
    }
    {/*if no parameters are passed*/}
    <button onClick={handleClick}> click first way </button> <br></br> <br></br>

     {/*if parameters are passed*/}
     <button onClick={()=>handleClick("kumar")}> click second way </button>
</div>

}

ReactDOM.render(<EventComponents/>,
    document.getElementById("container"))

