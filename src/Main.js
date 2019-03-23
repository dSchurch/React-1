import React, { Component } from 'react';
import "./Main.css";

class Main extends Component {
    render() {
        return (
                <div className="justify-content-center main-screen">
                        <h1 className="d-flex justify-content-center">Hello, world!</h1>
                        <p className="d-flex lead justify-content-center">This is a simple User-Post Application using React.js</p>
                        <hr className="my-4" />
                        <div className="d-flex justify-content-center">
                            <a className="btn btn-primary btn-lg" href="/Sigin" role="button">Sign In</a>
                            <a className="btn btn-primary btn-lg" href="/Login" role="button">Log In</a>
                        </div>
                </div>
        );
    }
}

export default Main;