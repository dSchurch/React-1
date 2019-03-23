import React, { Component } from 'react';
import "./Nbar.css";
class Nbar extends Component {
    render() {
        return (
            <nav class="navbar navbar-dark bg-dark justify-content-center">
                <a class="navbar-brand" href="/home">
                    <img src="/images/main-icon.svg" width="40" height="40" alt=""/>
                </a>
                <ul class="nav">
                    <li class="nav-item">
                        <a class="nav-link active" href="/Posts">Posts</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/Users">Users</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/Logout">Log out</a>
                    </li>
                </ul>
            </nav>
                );
            }
        }
        
export default Nbar;