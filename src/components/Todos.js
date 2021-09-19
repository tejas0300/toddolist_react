import { Checkbox, IconButton, TextField } from "@material-ui/core"
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import { useState } from "react";
import TodoItem from "./TodoItem";
import './ToDoItem.css'


const Todos = () => {
    const [completed,setCompleted] = useState(false)
    return (
        <div>
            <TodoItem completed={true} todo={"Buy Eggs"}/>
            <TodoItem/>
            <TodoItem/>
            <TodoItem/>
        </div>
    )
}
{/*
props = {
    completed: true,
    todo: "buy-eggs"
}
*/}
export default Todos

