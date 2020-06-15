import React, {Component} from "react";
import {Link} from "react-router-dom";

export class Login extends Component {
    render(){
        return(
        <div class="About">
            <form>
                <input type="text" placeholder="Username"/>
                <input type="password" placeholder="Password"/>
                <input type="button" class="btn" value="Submit" />
            </form>
            <p class="text">Don't have an account? <Link to="/register">Register</Link></p>
        </div>
        )
    }






}

export default Login;