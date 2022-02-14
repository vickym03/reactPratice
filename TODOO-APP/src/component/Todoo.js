import React, { useState } from "react";  // rfce 

function Todoo() {
  const [todos, settodos] = useState([]);
  const [initialTodo, setinitialTodo] = useState({
    task: "",
    completed: false,
  });

  // add todo in UI
  const addTodo = () => {
    const todosCopy = [...todos];
    const index = todosCopy.findIndex((todo) => {
      return todo.task === initialTodo.task;
    });
    console.log(index);

    if (index === -1) {
      todosCopy.push(initialTodo);
      settodos(todosCopy);
    } else {
      console.error("todo alredy exist !");
    }

  };

  //changes thes event
    const handleChange = (event) => {
  //console.log(event.target.value);
    const initialTodoCopy = { ...initialTodo };
    initialTodoCopy.task = event.target.value;
    initialTodoCopy.completed = false;
    setinitialTodo(initialTodoCopy);
  };

  // if todo task is completed it will strike
  const completeTodo = (index) => {
    console.log(index);
    if (index >= 0 && index < todos.length) {
      const todoCopy = [...todos]; // array of obj

      // if (todoCopy[index].completed === true){
      //     todoCopy[index].completed= false
      // } else{
      //         todoCopy[index].completed = true
      // }

      todoCopy[index].completed = !todoCopy[index].completed;
      settodos(todoCopy);
    }
  };

  // delete the todo if u want to delete from list
  const deleteTodo = (index) => {
    alert("Want to delete the task");
    const todoCopy = [...todos];
    const filteredTodos = todoCopy.filter((todo, i) => {
      return i !== index;
    });
    settodos(filteredTodos);
  };

  // return UI
  // return start---
  return (
    <div>
      <div>
        <input
          type="text"
          name="task"
          value={initialTodo.task}
          onChange={(event) => {
            handleChange(event);
          }}
        />
        <button
          onClick={() => {
            addTodo();
          }}
        >{" "}Add Todo</button>

      </div>

      <div>
        {todos.length > 0
          ? todos.map((todo, index) => {
              return (
                <div key={index}>
                  <span
                    style={
                      todo.completed
                        ? {
                            textDecoration: "line-through",
                            textDecorationColor:"red"
            
                          }
                        : {}
                    }
                  >
                    {todo.task}{" "}
                  </span>
                  <button
                    onClick={() => {
                      completeTodo(index);
                    }}>{" "}
                    Completed
                  </button>
                  <button
                    onClick={() => {
                      deleteTodo(index);
                    }}
                  >
                    {" "}
                    delete
                  </button>
                </div>
              );
            })
          : "No todos"}
      </div>
    </div>
  );

  //------return end
}

export default Todoo;


