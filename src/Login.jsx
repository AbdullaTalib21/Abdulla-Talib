import React, { useState } from 'react';

export const Login=()=>{
    const [email,setEmail]=useState('');
    const [password, setPassword] = useState('');
    const handleSubmit=(e) =>{

    }

    return(
        <div className="auth-form-container">
            <h2>Login</h2>

        <form className="Login-form" onSubmit={handleSubmit}>
            <label for="email">email</label>
            <input value={email} type="email" placeholder="email" ></input>
            <label for="password">password</label>
            <input value={password} type="password" placeholder="********" ></input>
            <button>Login</button>
        </form>
        </div>
    )
}