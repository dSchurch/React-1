import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav'

class Nitem extends Component {
    render() {
        return (
            <div>
                <Nav>
                    <Nav.Link href="/Users">Users</Nav.Link>
                    <Nav.Link href="/Posts">Posts</Nav.Link>
                    <Nav.Link href="/Log-out">Log out</Nav.Link>
                </Nav>
            </div>
        );
    }
}

export default Nitem;
