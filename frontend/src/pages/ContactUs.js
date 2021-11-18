import React from 'react'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Footer from "../Footer/Footer"

function ContactUs() {
    return (
        <div>
          
<div className="contact">
      <h2>Contact Us</h2>
      <hr style={{width:"150px",fontWeight: "bold",height:"5px",color:"black"}}/>
    </div>





            <Form className="first">
  <Row>
    <Col>
      <Form.Control placeholder="First name" />
    </Col>
    <Col>
      <Form.Control placeholder="Last name" />
    </Col>
  </Row>
</Form>

<Form className="second">
  <Row>
    <Col>
      <Form.Control placeholder="Phone number" />
    </Col>
    <Col>
      <Form.Control placeholder="Email" />
    </Col>
  </Row>
</Form>
            
            <Form>     
  {/* <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group> */}

  {/* <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group> */}

  <FloatingLabel controlId="floatingTextarea2" placeholder="Message">
    <label style={{marginLeft:"300px"}}>Message</label>
    <Form.Control
      as="textarea"
      placeholder="Leave a comment here"
      style={{ height: '100px' }}
      className="message"
    />
  </FloatingLabel>

  <Button variant="primary" type="submit" className="button">
    Send
  </Button>
</Form>


<Footer/>
        </div>
    )
}

export default ContactUs
