import React from "react";
import { Row, Form, Col,Button ,Icon} from "react-bootstrap";
// import {Button,Icon} from 'semantic-ui-react'
<><link
    async
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/semantic-ui@2/dist/semantic.min.css" /><script src="https://cdn.jsdelivr.net/npm/semantic-ui-react/dist/umd/semantic-ui-react.min.js"></script></>


// import Pic from 'https://cdn1.iconfinder.com/data/icons/web-basics-color-vol-05/512/user_human_person_avatar_delete_remove-512.png'

function ContactList() {
  const styles = {
    width: "60px",
  };
  return (
    <>
      <Form className=" container w-100">
        <Form.Group className="mb-3 w-75" controlId="formBasicEmail">
          <Row>
            <Col lg={2}>
              <img
                style={styles}
                src="https://www.pngkit.com/png/full/115-1150342_user-avatar-icon-iconos-de-mujeres-a-color.png"
              />
            </Col>
            <Col lg={8}>
              <Form.Label>Name</Form.Label>
              <br />
              <Form.Label>email</Form.Label>
            </Col>
            <Col lg={2}>
            <button type="button" class="btn btn-outline-danger">
               Delete
            </button>
            </Col> 
            
          </Row>
        </Form.Group>
       
      </Form>
      
      <hr className="w-75"/>
    </>
  );
}

export default ContactList;
