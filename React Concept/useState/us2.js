function UseStateArray(props){
const [numbers,setNumbers]=React.useState([10,20,30,40])
const addNumber = ()=>{
    console.log("before push", numbers);

    /* Never ever update the state like this 
    numbers.push(numbers[numbers.length-1]+10)
    console.log("After push", numbers)
    setnumbers(numbers) */ 

    //  update state like this

    // 1.First take the copy of the state
    const numberCopy = [...numbers]

    //2. Do all the necessary changes in copied variable
    numberCopy.push(numberCopy[numberCopy.length-1]+10)

    //3.update theb state with coiped variable
        setNumbers(numberCopy)
}

const deleteNumber=()=>{
   // console.log("after pop", (numbers.length-1))
    const deleteCopy = [...numbers]
   // deleteCopy.pop()
    console.log("Deleted",deleteCopy.pop())
    setNumbers(deleteCopy)
}

const updateNumber=(index,value)=>{
   if(index<numbers.length && index>=0 ){
        //method-1
    console.log("update", numbers)
    const updateCopy = [...numbers]
    updateCopy.splice(index,1,value)
    setNumbers(updateCopy)

    //method-2
    // const numberCopy=[...numbers]
    // numberCopy[index]=value
    // setNumbers(numberCopy)

    //method-3
    // const numberCopy = [...numbers]
    // for(let i =0;i<numbers.length;i++){
    //     if(i===index){
    //         numberCopy[i]=value
    //     }
    // }
    // setNumbers(numberCopy)
    
     //method-4
    // const numberCopy = [...numbers]
    // const numbersMap = numberCopy.map((num,i)=>{
    //     if(index ===i){
    //         return value
    //     }else{
    //         return num
    //     }
    // })
    // setNumbers(numbersMap)

     //method-5
    // const numberCopy = [...numbers]
    // numberCopy.forEach((num,i)=>{
    //     if(index ===i){
    //         numberCopy[i]=value
    //     }
    // })
    // setNumbers(numberCopy)

   }else{
       console.error("not found index value!")
   }
}

 return <div>
     <h1> UseStateArray</h1>
     <div>
        <button onClick={addNumber}>Add</button> 
        <button onClick={deleteNumber}>Delete</button>
        <button onClick={()=>{updateNumber(2, 100)}}>Update</button> 
    </div>
     {numbers.map((num,index)=>{
         return <p key={index}> {num} at index{index}</p>
     })}   
 </div>
}





ReactDOM.render(<UseStateArray/>, document.getElementById("container"));