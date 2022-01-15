import React from 'react'
import { Form,Button } from 'react-bootstrap';
import './AppContact.css';

function AddContact(){
    
    return(
<>
<Form className=' container  '>
  <Form.Group className="mb-3 w-75" controlId="formBasicEmail">
    <Form.Label >Name</Form.Label>
    <Form.Control type="text" placeholder="Enter name" className='border-info' />
   
  </Form.Group>

  <Form.Group className="mb-3 w-75" controlId="formBasicPassword">
    <Form.Label>Email</Form.Label>
    <Form.Control type="email" placeholder="email" className='border-info'/>
  </Form.Group>

  <Button variant="info" className='text-light' type="submit">
    Add Contact
  </Button>
</Form>
</>
    );
}
 export default AddContact;