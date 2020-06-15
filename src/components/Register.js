import React, {Component} from "react";
import {Link} from "react-router-dom";

export class Register extends Component {
    render(){
        return(
        <div class="About">
            <form>
                <input type="text" placeholder="Username"/>
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <input type="password" placeholder="Confirm Password"/>
                <input type="button" class="btn" value="Submit" />
            </form>
            <p class="text">Already have an account? <Link to="/login">Login</Link></p>
        </div>
        )
    }






}

export default Register;