import React,{useState} from 'react'
import CarCard from './CarCard'
import AddCar from './AddCar'
import "./CarList.css"

const CarList = ({cars,addCar}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
        <div className="list"> 
        {/* style={{display:"flex",flexWrap:"wrap",justifyContent:"space-around",width:"1000px",height:"1000px"}}>  */}
        {cars.map((el,i) =>( 
            <CarCard car={el} key={i}/>))} 
        </div>
        {/* <div>
            <p onClick={handleShow}>+</p>
            <AddCar handleClose={handleClose} show={show} addCar={addCar}/>
        </div> */}
        </div>
    )
}

export default CarList
