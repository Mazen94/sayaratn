import React from 'react'
import {Card,ListGroup,ListGroupItem} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import StarRatingComponent from 'react-star-rating-component';

const CarCard = ({car}) => {
    return (
        <div>
        <Card style={{ width: '18rem' }}>
            <Card.Img style={{ border: "1px solid #ddd",borderRadius:"4px",width: "100%"}} variant="top" src={car.img} />
            <Card.Body>
            <Card.Title >{car.title}</Card.Title>
            <StarRatingComponent name="rate1"  starCount={5} value={car.rate}/>
            </Card.Body>
            <ListGroup className="list-group-flush">
            <ListGroupItem>{car.price}</ListGroupItem>
            {/* <ListGroupItem>Vestibulum at eros</ListGroupItem> */}
            </ListGroup>
        </Card>
        </div>
    )
}

export default CarCard