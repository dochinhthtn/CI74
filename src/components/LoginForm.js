import React, { useState } from "react";

export default function LoginForm() {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const changeEmail = (event) => {
        setEmail(event.target.value);
    }

    const changePassword = (event) => {
        setPassword(event.target.value);
    }

    const handleLogin = (event) => {
        event.preventDefault();

        if(!email || !password) {
            alert("Nhập đầy đủ thông tin");
        } else {
            alert("Đăng nhập thành công với email: " + email + "/password: " + password);
        }
    }

    return (<form onSubmit={handleLogin}>
        <h2>Login to your account</h2>
        <div>Email: <input type="text" placeholder="Your email" onChange={changeEmail} /></div>
        <div>Password: <input type="password" placeholder="Your password" onChange={changePassword} /></div>
        <button>Login</button>
    </form>);
}