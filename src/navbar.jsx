import React, { Component } from 'react';
class Navbar extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand" href="#">E-learning</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item active">
                                <a class="nav-link" href="/home">Home </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/Courses">Courses</a>
                            </li>
                           
                            <li class="nav-item">
                                <a class="nav-link " href="/Stuff">Stuff</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link " href="/Contact US">Contact US</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link " href="/Login">Register</a>
                            </li>
                        </ul>
                        <form class="form-inline my-2 my-lg-0">
                        </form>
                    </div>
                </nav>
            </div>
        );
    }
}
 
export default Navbar;