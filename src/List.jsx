import React from "react";

function List(props) {

    const {deleteAllTask,removeTask,items} = props

    return (
        <div className="card mt-3">
            <div className="card-header d-flex justify-content-between align-items-center">
                All Tasks
                <button onClick={deleteAllTask} type="button" className="btn btn-danger">Delete All</button>
            </div>

            <ul className="list-group">
                {items.map((item, index) => {
                    return <li key={index} className="list-group-item d-flex justify-content-between align-items-center animate__animated animate__fadeIn">{item} <button onClick={() => { removeTask(index) }} className="btn"><i className="fa-solid fa-xmark cursor-pointer"></i></button></li>
                })}
            </ul>
        </div>
    );
}

export default List;