import React from "react";

function ToDoForm(props) {
    const {addNewTask,addTask} = props;
    return (
        <div className="card">
            <div className="card-header">
                New Task
            </div>
            <div className="card-body">
                <form onSubmit={addNewTask}>
                    <div className="input-group mt-3">
                        <input type="text" className="form-control" placeholder="Write your daily assignment" id="task" />
                        <button className="btn btn-outline-primary" onClick={addTask}><i className="fa-solid fa-plus"></i></button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ToDoForm;