import { useState } from "react"


function ToDoList(){

    const [Tasks, SetTask] = useState([]);
    const [newTask, SetNewTask] = useState("");

    function handleInputChange(event){

        SetNewTask(event.target.value);
        
    }

    function AddTask(){

        if(newTask.trim() !== ""){
            SetTask(t => [...t, newTask])
            SetNewTask("");
        }

    }

    function deleteTasks(index){

        const updateTask = Tasks.filter((_, i) => i !== index);
        SetTask(updateTask);

    }

    function moveTaskUp(index){

        if(index > 0){
            const updatedTask = [...Tasks];
            [updatedTask[index], updatedTask[index-1]] = [updatedTask[index-1], updatedTask[index]];
            SetTask(updatedTask);
        }
        
    }

    function moveTaskDown(index){

        if(index < Tasks.length - 1){
            const updatedTask = [...Tasks];
            [updatedTask[index], updatedTask[index+1]] = [updatedTask[index+1], updatedTask[index]];
            SetTask(updatedTask);
        }

    }

    return(
        <div className="to-do-list">

            <h1>To-Do-List</h1>

            <div>
                <input type="text" placeholder="Enter a Task....." value={newTask} onChange={handleInputChange} />
                <button className="add-button" onClick={AddTask}>Add</button>
            </div>
            <ol>
                {Tasks.map((task, index) => <li key={index}>
                    <span className="text">{task}</span>
                    <button className="delete-button" onClick={()=>deleteTasks(index)}>Delete</button>
                    <button className="move-button" onClick={()=>moveTaskUp(index)}>⬆</button>
                    <button className="move-button" onClick={()=>moveTaskDown(index)}>⬇</button>

                </li>)}
            </ol>
        </div>
    )
    
}
export default ToDoList