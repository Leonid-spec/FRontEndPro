import React from "react";
import './AddTask.css';
import { useState } from "react";

const AddTask = ({ onAddTask }) => {
    const [inputValue, setInputValue] = useState('');

const handleAdd = () => {
    onAddTask(inputValue);
    setInputValue('');
};

return (
    <div className="add-task-container">
<input
type="text"
value={inputValue}
onChange={(e) => setInputValue(e.target.value)}
placeholder="Put in task"
/>
<button className="add-task-btn" onClick={handleAdd}>Add</button>
    </div>
);


};
export default AddTask;