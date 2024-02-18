import React, { useState } from 'react'

import ChangePasscode from '../ChangePasscode/ChangePasscode'


import './Login.css'

const Login = () => {

    const [changePassword, setChangePassword] = useState(false)
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log('Form submitted successfully!', formData);
        } else {
            console.log('Form validation failed!');
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value,
        });

        setErrors({
            ...errors,
            [name]: '',
        });
    };

    const handleChangePassword = () => {
        setChangePassword(true)
    }

    const validateForm = () => {
        let valid = true;
        const newErrors = {};
        if (formData.username.trim() === '') {
            newErrors.username = 'Username is required';
            valid = false;
        }

        if (formData.password.length < 8) {
            newErrors.password = 'Password must be at least 8 characters long';
            valid = false;
        }

        setErrors(newErrors);

        return valid;
    };
    return (
        <div>
            <>
                <img src='https://www.fortna.com/wp-content/uploads/2022/10/FORTNA-logo-white.svg' alt='' className='headerImage' />
            </>
        <form  onSubmit={handleSubmit}>
            <div className='signinForm'>    
                <p className='username'>User Name</p>
                <div>
                <input type='text' className='usernameInput' name="username" placeholder='Enter text here' value={formData.username} onChange={handleChange} />
                {errors.username && <p className="errorUser">{errors.username}</p>}
                </div>
                <p className='password'>Password</p>
                <div>
                <input type='password' className='passwordInput' placeholder='Enter text here' name="password" value={formData.password} onChange={handleChange} />
               {errors.password && <p className='errorPassword'>{errors.password}</p>}
                </div>
                <div className='footer'>
                    <p className='changePassword' onClick={handleChangePassword}>Change Password</p>
                    <button type='submit' className='signIn' disabled={formData.username === "" || formData.password===""} >Sign In</button>
                </div>
                {changePassword ? <ChangePasscode setChangePassword={setChangePassword} /> : ""}
            </div>
            </form>
        </div>
    )
}

export default Login
