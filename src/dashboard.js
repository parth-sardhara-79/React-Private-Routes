import React from 'react';
import { Button, Card } from 'react-bootstrap';
class Dashboard extends React.Component {
    componentDidMount() {
        let userid = localStorage.getItem('userId');
        if (userid == null) {
            this.props.history.push('/login');
        }
    }
    logOutHandler = () => {
        localStorage.removeItem('userId');
        this.props.history.push('/login')
    }
    render() {
        let userid = localStorage.getItem('userId');
        return (<div className="mx-auto w-50 ">
            <Card className="logincard">
                <Card.Title>Hello {userid}</Card.Title>
                <Card.Body>
                    <Button variant="danger" onClick={() => this.logOutHandler()}>Logout </Button>
                </Card.Body>
            </Card>
        </div>);
    }
}

export default Dashboard;