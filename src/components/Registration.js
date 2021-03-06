import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import { Container } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";


function Registration() {
    const [emailaddress, setEmailAddress] = useState("");
    const [passwordd, setPasswordd] = useState("");
    const [username, setUsername] = useState("");

    function clearInput(){
        setUsername("");
        setEmailAddress("");
        setPasswordd("");
    }

    async function UserPost() {
        console.log(emailaddress,username,passwordd);
        const userDetails = {
            "username": username,
            "email": emailaddress,
            "password": passwordd
        }
        const response = await axios.post('https://bms-backend-shapeai.herokuapp.com/user-register', userDetails)
        .then((data)=> {
            Swal.fire({
                title: `<strong>${data.data.message}</strong>`,
                icon: 'success',
                showCloseButton: true,
            });
            clearInput();
        })
        .catch((err)=>
            Swal.fire({
                title: `<strong>${err.message}</strong>`,
                icon: 'error',
                showCloseButton: true,
            })
        );
        

    }

    return (
      <div >
          <Container style={{padding:"5%"}}>
            <Form>
                <Form.Group className="mb-3" >
                    <Form.Label>User Name</Form.Label>
                    <Form.Control value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter username" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control value={emailaddress} onChange={(e) => setEmailAddress(e.target.value)} type="email" placeholder="Enter email" />
                    {/* <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text> */}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control value={passwordd} onChange={(e) => setPasswordd(e.target.value)}  type="password" placeholder="Password" />
                </Form.Group>
                {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}
                <Button variant="primary" onClick={UserPost}>Submit</Button>
            </Form>
          </Container>
           
      </div>
    );
  }
  
  export default Registration;