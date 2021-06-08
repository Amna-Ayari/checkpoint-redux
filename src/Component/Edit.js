import React, { useState } from 'react'
import {Modal,Button,Form} from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { edittask } from '../js/action'

const Edit = ({show,handleClose,id}) => {
    const [taskmodified, setTaskmodified] = useState("")
    const dispatch = useDispatch()
    return (
        <div>
          <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>EDIT TASK</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Control type="text" placeholder="Enter your new task " onChange={(e)=>setTaskmodified(e.target.value)}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{handleClose();dispatch(edittask({id:id,taskmodified:taskmodified}))}}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>   
        </div>
    )
}

export default Edit
