import React, { useState } from "react";
import ToDoForm from "./ToDoForm";
import List from "./List";

function App() {

    const [listItem, setListItem] = useState([]);

    function addNewTask(e) {
        e.preventDefault();
        const newItem = e.target.elements.task.value;
        if (!newItem) {
            return;
        }
        setListItem((listItem) => [...listItem, newItem])
        e.target.elements.task.value = '';
    }

    function removeTask(e) {
        listItem.splice(e, 1);
        setListItem((listItem) => [...listItem]);
    }

    function deleteAllTask() {
        listItem.splice(0, listItem.length)
        setListItem((listItem) => [...listItem])
    }

    function addTask(e){
        const newItem = e.target.parentElement.task.value;
        setListItem((listItem)=>[...listItem,newItem])
    }
    return (
        <div className="container">
            <h1>ToDo App</h1>
            <ToDoForm addNewTask={addNewTask} addTask = {addTask}/>
            <List deleteAllTask = {deleteAllTask} removeTask = {removeTask} items = {listItem}/>
        </div>
    );
}

export default App;