import { Checkbox, IconButton, TextField } from "@material-ui/core"
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import { useState } from 'react'
import './ToDoItem.css'

const TodoItem = (props) => {
    const [completed,setCompleted] = useState(false)
    
    
    return (
        <div className="root">
            <Checkbox name="completed" checked={props.completed} color='primary'/>
                <div className={`content ${completed && "striked"}`}>
                    <TextField name="todo" value={props} multiline style={{width:'100%'}}/>
                    
                        <IconButton name="delete">
                            <DeleteOutline/>
                        </IconButton>
                </div>
        </div>
    )
}

export default TodoItem