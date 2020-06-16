import React, {useState} from "react";
import {Link} from "react-router-dom";
import axios from 'axios';

export default function Register(props){
    const [info, setInfo] = useState({
        username: '',
        email: '',
        password: '',
        confirm: ''
    })
    
    const handleChange = e => {
        setInfo({
            ...info,
            [e.target.name]: e.target.value   
        })
    }
    
    const register = e => {
        e.preventDefault();
        console.log(info);
        axios()
            .post('register-endpoint-URL', info)
            .then(res => {localStorage.setItem('token', res.data.payload);
            props.history.push('/wishlist');
    })
    }
        return(
        <div class="RegLog">
            <form onSubmit={register}>
                <input type="text" name="username" placeholder="Username" onChange={handleChange}/>
                <input type="email" name="email" placeholder="Email" onChange={handleChange}/>
                <input type="password" name="password" placeholder="Password" onChange={handleChange}/>
                <input type="password" name="confirm" placeholder="Confirm Password" onChange={handleChange}/>
                <button class="btn">Submit</button>
            </form>
            <p class="text">Already have an account? <Link to="/login">Login</Link></p>
        </div>
        )






}