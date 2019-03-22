import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nitem from "./Nitem";

class Nbar extends Component {
    render() {
        return (
            <div>
                <Navbar justify className="d-flex justify-content-center" bg="dark" variant="dark">
                    <Navbar.Brand href="#home">
                        <img src="src/compass.svg"/>
                    </Navbar.Brand>
                    <Nitem/>
                </Navbar>
            </div>
        );
    }
}

export default Nbar;