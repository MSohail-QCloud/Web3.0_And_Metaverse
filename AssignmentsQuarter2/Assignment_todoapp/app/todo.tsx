import React, { useState } from 'react'

export default function Todo() {
    const [toodo, setTodo]=useState('');
    const [todos, settodo] = useState([{ todotext: "hello", complete: false }, { todotext: "ab", complete: true },]);
    const checkitem = (meraTodo: any) => {
        const newTodos = todos.map((todo) => {
            if (todo.todotext == meraTodo.todotext) {
                todo.complete = !todo.complete //change status
            }
            return todo;
        });
        //console.log(newTodos);
        settodo(newTodos);
    }
    const addTodo=()=>{
        const newTodo={todotext:toodo, complete:false}
        const newTodos=[...todos,newTodo]
        settodo(newTodos)
        setTodo('')

    }
    const deleteTodo=(dtodo:any)=>{
        const newTodos=todos.filter((toodo)=>{
            if(toodo.todotext==dtodo.todotext) return false;
            return true;
        });
        settodo(newTodos)

    };
    return (
        <>
            <div>Todo</div>
            <input type={"text"} placeholder="Add todo text" value={toodo} onChange={(e)=>{
                setTodo(e.target.value);
            }}></input>
            <button onClick={addTodo}>Add Todo</button>
            <ul>
                {todos.map((ele) => {
                    return <li style={{ color: ele.complete ? "green" : "red", fontStyle: "oblique", listStyle: "none" }} key={ele.todotext}>
                        <input type={"checkbox"} checked={ele.complete} onChange={() => { checkitem(ele) }}></input>{ele.todotext}--
                        <button style={{margin:10, backgroundColor:"yellow"}} onClick={()=>{deleteTodo(ele)}}>Delete</button></li>
                })}
            </ul>
        </>
    )
}
