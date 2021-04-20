import React, { useState } from 'react'
import TodoItem from "../TodoItem/TodoItem"

import "./todoList.css"

const TodoList = () => {
    const [todoItem, setTodoItem] = useState([{
        text: "test item",
        subText: "sub text"
    },{
        text: "item1",
        subText: "sub text1"
    }]);

    const deleteItem = (t, st) =>{
        setTodoItem(todoItem.filter((item)=>item.text!==t&&item.subText!==st))
    }

    return (
        <ul className="todoListContainer">
           {
               todoItem.map((item, index)=><li className="todoItemContainer" key={index}><TodoItem onDelete={deleteItem} text={item.text} subText={item.subText}/></li>)
           }
        </ul>
    )
}

export default TodoList
