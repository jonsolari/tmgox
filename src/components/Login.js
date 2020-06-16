import React, {useState} from "react";
import {Link} from "react-router-dom";
import {axiosWithAuth} from "./axiosWithAuth.js";


export default function Login(props){

    const [info, setInfo] = useState({
        username: '',
        password: ''
    })
    
    const handleChange = e => {
        setInfo({
            ...info,
            [e.target.name]: e.target.value   
        })
    }
    
    const login = e => {
        e.preventDefault();
        console.log(info);
        axiosWithAuth()
            .post('login-endpoint-URL', info)
            .then(res => {localStorage.setItem('token', res.data.payload);
            props.history.push('/wishlist');
    })
    }

        return(
        <div class="RegLog">
            <form onSubmit={login}>
                <input type="text" name="username" placeholder="Username" onChange={handleChange}/>
                <input type="password" name="password" placeholder="Password" onChange={handleChange}/>
                <button class="btn">Submit</button>
            </form>
            <p class="text">Don't have an account? <Link to="/register">Register</Link></p>
        </div>
        )







}
