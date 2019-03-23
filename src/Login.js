import React, { Component } from 'react';
import "./Login.css"

class Login extends Component {
    render() {
        return (
            <div className="login-screen container">
                <form>
                    <div className="form-group">
                        <label>Email address:</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Password:</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
            </div>
        );
     }
}
                
export default Login;