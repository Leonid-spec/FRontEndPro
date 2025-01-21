import React from "react";
import './TodoItem.css';

const TodoItem = ({task, onDelete}) => {
    return (
        <li className="todo-item">
            {task}
            <button className="delete-btn" onClick={onDelete}>Delete</button>
        </li>
    );
};

export default TodoItem;