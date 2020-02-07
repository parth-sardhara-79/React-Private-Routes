import React from "react";
import { Form, Button, Card } from 'react-bootstrap';
import Auth from './auth';
class Login extends React.Component {
    state = {
        userid: "",
        psw: ""
    }

    logInHandler = (e) => {
        e.preventDefault();
        localStorage.setItem('userId', this.state.userid);
        this.props.history.push('/dashboard');
        Auth.authenticate();
    }
    userHandler = (event) => {
        this.setState({
            userid: event.target.value
        });
    }
    pswHandler = (event) => {
        this.setState({
            psw: event.target.value
        });
    }
    render() {
        return (<Card className="mx-auto w-50 logincard">
            <Card.Title>Login</Card.Title>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control required type="email" placeholder="Enter email" onChange={e => this.userHandler(e)} />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={e => this.pswHandler(e)} />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={(e) => this.logInHandler(e)}>
                    Submit
                </Button>
            </Form>
        </Card>);
    }
}

export default Login;