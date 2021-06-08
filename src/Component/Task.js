import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { completetask, deletetask } from '../js/action'
import Edit from './Edit'

const Task = ({el}) => {
const dispatch = useDispatch()
const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [id,SetId] = useState()
    return (
        <div>
            <span className={el.isDone&&"line"}>{el.task}</span>
            <button onClick={()=>dispatch(deletetask(el.id))}>DELETE</button>
            <button onClick={()=>dispatch(completetask(el.id))}>{el.isDone?"UNDO":"COMPLETED"}</button>
            <button onClick={()=>{handleShow();SetId(el.id)}}>EDIT</button>
            <Edit show={show} handleClose={handleClose} id={id} />
        </div>
    )
}

export default Task
