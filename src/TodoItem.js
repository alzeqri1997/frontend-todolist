import React from 'react';
import "./TodoItem.css";


const TodoItem = ({name , completed , onDelete , onToggle }) => (
    <li>
        <span
            style={{
                opacity: completed ? "0.5" : "1",
                textDecoration: completed ? "line-through" : "none"
            }}
            onClick={onToggle}
        >

            {name}

        </span>
        <span className="Xhover"  style={{cursor: "pointer"}}  onClick={onDelete} > X </span>
    </li>
);


export default TodoItem;