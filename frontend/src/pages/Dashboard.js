import React from 'react'
import "./Dashbord.css"
import CarCard from '../components/CarCard'
import AddCar from '../components/AddCar'
import CarList from '../components/CarList'
import { useState } from 'react';
import Filtre from '../components/Filtre';
import { useDispatch, useSelector } from 'react-redux'
import { showOrHideDialogCarAction } from '../redux/actions/carActions'

const Dashboard = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const dispatch = useDispatch();
    const handleShow = () =>  dispatch(showOrHideDialogCarAction(true));
  
    const { cars} = useSelector((state) => state.cars)

    return (
        // <>
        //     <h1><b>Car Management system</b></h1>
        //     <div className="plus">
        //     <p onClick={handleShow}>+</p>
        //     <AddCar handleClose={handleClose} show={show} addCar={addCar}/>
        // </div>
        <div>
        <main id="site-main">
        <div className="container">
          <div className="box-nav d-flex justify-between">
            {/* <a href="/add-user" className="border-shadow"> */}
              <span className="text-gradient" onClick={handleShow}>New Car <i className="fas fa-user" /></span>
              <AddCar handleClose={handleClose} show={show} />
            {/* </a> */}
          </div>
        </div>
        <form action="/" method="POST">
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Rate</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
                  {cars.map((car, index) => 
                    <tr key={`${index}-${Math.random().toString()}`}>
                    <td>{index}</td>
                    <td>{car.title}</td>
                    <td>{car.rate}</td>
                    <td>{car.price}</td>
                    <td>
              <button type="button" class="btn btn-primary"><i class="far fa-eye"></i></button>
              <button type="button" class="btn btn-success"><i class="fas fa-edit"></i></button>
            <button type="button" class="btn btn-danger"><i class="far fa-trash-alt"></i></button>
            </td>
                  </tr>
                  )}     
          </tbody>
        </table></form>
        </main>
        </div>
        
    )
}

export default Dashboard
