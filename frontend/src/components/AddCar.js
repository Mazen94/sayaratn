import React, {useState} from 'react'
import {Modal,Button,Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { addCarAction, showOrHideDialogCarAction } from '../redux/actions/carActions';
const AddCar = () => {
    const [newCar,setNewCar]=useState({
        title:"",
        rate:1,
        price:"",
        img:"",
    });
    const dispatch = useDispatch();
    const {isLoading, dialogCarIsShowed} = useSelector((state) => state.cars)
    const handleChange=(e) => {
        setNewCar({ ...newCar, [e.target.name]:e.target.value});
    };
    const addCar = () => {
        dispatch(addCarAction(newCar))
    }
    const handleClose = () => {
        dispatch(showOrHideDialogCarAction(false))
    }
    return (
        <div>
        <Modal show={dialogCarIsShowed} onHide={handleClose}>
        <Modal.Header closeButton>
        <Modal.Title style={{color:"rgb(253,197,0)"}}>Add a new car</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Title</Form.Label>
        <Form.Control type="email" placeholder="Put a car title" name="title" onChange={handleChange}/>
        </Form.Group>
        <Form.Select aria-label="Default select example" name="rate" onChange={handleChange}>
        <option>Rate</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        </Form.Select>
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Price</Form.Label>
            <Form.Control type="string" placeholder="Put a car price" name="price" onChange={handleChange}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Image URL</Form.Label>
            <Form.Control type="string" placeholder="Put a car image" name="img" onChange={handleChange}/>
        </Form.Group>
        </Form>

        </Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
            Close
        </Button>
       {!isLoading ? <Button  style={{color:"white",backgroundColor:"rgb(253,197,0)"}} variant="primary" onClick={()=>{
            addCar(newCar)
            }}>
            Add car
        </Button> : <div class="spinner-border" role="status">
  <span class="sr-only"></span>
</div> } 
        </Modal.Footer>
        </Modal>
        </div>
    )
}

export default AddCar
