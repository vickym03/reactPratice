import React,{useState} from 'react';

function To() {
    const [Todo, setTodo] = useState([]);
    const [intialTodo, setintialTodo] = useState({
        task:"",
        completed:false,
    });

    const addTodo = () => {
        const todosCopy = [...Todo];
        const index = todosCopy.findIndex((todo) => {
          return todo.task === intialTodo.task;
        });
        console.log(index);
    
        if (index === -1) {
          todosCopy.push(intialTodo);
          setTodo(todosCopy);
        } else {
          console.error("todo alredy exist !");
        }
    
      };


      const todoCompleted=(index)=>{
        //   alert("Completed")
          console.log(index);
          if(index >=0 && index< Todo.length){
              const todoCopy = [...Todo]
              todoCopy[index].completed =!todoCopy[index].completed
              setTodo(todoCopy)
          }
      }

    

      const todoDelete=(index)=>{
          alert("Delete")
        const todCopy =[...Todo]
        const filterTodo = todCopy.filter((todo,index)=>{
            return index !== index;
        });
        setTodo(filterTodo)
      }

    const handleChange=(event)=>{
        const intialTodoCopy = {...intialTodo}
        intialTodoCopy.task= event.target.value
        intialTodoCopy.completed = false;
        setintialTodo(intialTodoCopy)
    }
    
  return <div>
  <input type="text" name="task" value={intialTodo.task}
  onChange={(event)=>{handleChange(event)}}/>
  <button onClick={()=>{addTodo()}}>Add todo</button>

    <div>
        {Todo.length>0 ? Todo.map((todo,index)=>{
            return (
                <div key={index}>
                <span style={todo.completed? {
                   textDecoration: "line-through", 
                   textDecorationColor:"red"
                }: {} }>{todo.task}{""} </span> 
                <button onClick={()=>{todoCompleted(index)}}> {""}Completed</button>
                <button onClick={()=>{todoDelete(index)}}> {""} Delete</button>
                </div>
            )
        }) : "No todo"}
    </div>









  </div>;
}

export default To;
