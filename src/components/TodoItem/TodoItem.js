import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrash, faEdit, faCheck} from '@fortawesome/free-solid-svg-icons'

import "./todoItem.css"

const TodoItem = ({text, subText, onDelete}) => {
    const deleteThisItem = () => {
        onDelete(text, subText);
    }

    return (
        <>
            <button className="btn btn--special deletebutton" onClick={deleteThisItem}><FontAwesomeIcon icon={faTrash}/></button>
            <button className="btn btn--special editbutton"><FontAwesomeIcon icon={faEdit}/></button>
            <button className="btn btn--special completebutton"><FontAwesomeIcon icon={faCheck}/></button>
            <div className="dataContainer">
                <h3 className="dataContainer__heading">{text}</h3>
                <p className="dataContainer__text">{subText}</p>
            </div>
        </>
    )
}

export default TodoItem
