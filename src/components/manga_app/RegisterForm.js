import React, { useState } from "react";

export default function RegisterForm() {

    const [flag, setFlag] = useState(false);

    // const [firstName, setFirstName] = useState();
    // const [lastName, setLastName] = useState();
    // const [age, setAge] = useState();
    // const [gender, setGender] = useState();
    // const [email, setEmail] = useState();
    // const [password, setPassword] = useState();
    // const [confirmPassword, setConfirmPassword] = useState();

    const [user, setUser] = useState({
        firstName: null,
        lastName: null,
        age: null,
        gender: null,
        email: null,
        password: null,
        confirmPassword: null
    });

    const handleInputChange = (name, value) => setUser({ ...user, [name]: value });

    const handleRegister = (event) => {
        event.preventDefault();

        const { firstName, lastName, age, gender, email, password, confirmPassword } = user;
        console.log(user);

        if (!firstName || !lastName || !email || !password || !confirmPassword) {
            alert("Please input required fields");
            return; // stop function
        }

        if (password.length < 6) {
            alert("Password length must be over than 5 characters");
            return;
        }

        if (password != confirmPassword) {
            alert("Password confirmation is not correct");
            return;
        }

        if (isNaN(age) || age < 1) {
            alert("Age must be a number and greater than 0");
            return;
        }

        console.log(`
            Register successfully with info:
            Name: ${firstName} ${lastName}
            Age: ${age}
            Gender: ${gender}
            Email: ${email}
        `);

        setFlag(true);
    }

    return (<div>
        <div hidden={!flag}>
            <h1>Register successfully</h1>
        </div>

        <form hidden={flag} onSubmit={handleRegister}>
            <div>
                <label>First name *</label>
                <input type="text" onChange={(event) => handleInputChange('firstName', event.target.value)} />
            </div>

            <div>
                <label>Last name *</label>
                <input type="text" onChange={(event) => handleInputChange('lastName', event.target.value)} />
            </div>

            <div>
                <label>Age</label>
                <input type="number" onChange={(event) => handleInputChange('age', event.target.value)} />
            </div>

            <div>
                <label>Gender</label>
                <select onChange={(event) => handleInputChange('gender', event.target.value)}>
                    <option value="">-- --</option>
                    <option value="male">Nam</option>
                    <option value="female">Nữ</option>
                </select>
            </div>

            <div>
                <label>Email</label>
                <input type="email" onChange={(event) => handleInputChange('email', event.target.value)} />
            </div>

            <div>
                <label>Password</label>
                <input type="password" onChange={(event) => handleInputChange('password', event.target.value)} />
            </div>

            <div>
                <label>Confirm password</label>
                <input type="password" onChange={(event) => handleInputChange('confirmPassword', event.target.value)} />
            </div>

            <button>Register</button>
        </form>
    </div>);
}