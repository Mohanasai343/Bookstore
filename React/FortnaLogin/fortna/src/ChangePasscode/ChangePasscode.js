import React, { useState } from 'react'

import { IoIosClose } from "react-icons/io";

import './ChangePasscode.css'

const ChangePasscode = ({ setChangePassword }) => {

    const [closeDialog, setCloseDialog] = useState(false)
    const [cancel, setCancel] = useState(false)
    const [confirmForm, setConfirmForm] = useState({
        username: "",
        currentPassword: "",
        newpassword: "",
        confirmnewpassword: ""
    })
    const [errors, setErrors] = useState({});


    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            console.log('Form submitted successfully!', confirmForm);
        } else {
            console.log('Form validation failed!');
        }
    };


    const handleChange = (e) => {
        const { name, value } = e.target;

        setConfirmForm({
            ...confirmForm,
            [name]: value,
        });

        setErrors({
            ...errors,
            [name]: '',
        });
    };


    const validateForm = () => {
        let valid = true;
        const newErrors = {};

        if (confirmForm.username === '') {
            newErrors.username = 'Username is required';
            valid = false;
        }

        if (confirmForm.currentPassword.length < 8) {
            newErrors.currentPassword = 'Password must be at least 8 characters long';
            valid = false;
        }

        if (confirmForm.newpassword.length < 8) {
            newErrors.newpassword = 'Password must be at least 8 characters long';
            valid = false;
        } else if (confirmForm.newpassword !== confirmForm.confirmnewpassword) {
            newErrors.newpassword = 'Password must match'
            valid = false
        }

        if (confirmForm.confirmnewpassword.length < 8) {
            newErrors.confirmnewpassword = 'Password must be at least 8 characters long';
            valid = false;
        } else if (confirmForm.confirmnewpassword !== confirmForm.newpassword) {
            newErrors.confirmnewpassword = 'Password must match'
            valid = false
        }

        // if(confirmForm.newpassword !== confirmForm.confirmnewpassword){
        //     newErrors.newpassword = 'Password must be match'
        //     newErrors.confirmnewpassword = 'Password must be match'
        //     valid = false
        // }

        setErrors(newErrors);
        return valid;
    };


    const handleClose = () => {
        setCloseDialog(true)
        setChangePassword(false)
    }

    const handleClick = () => {
        setCancel(true)
        setChangePassword(false)
    }
    return (
        <div className='dialogbox'>
            <h2 className='changepassword'>Change Password</h2>
            <span><IoIosClose className='close' onClick={handleClose} /></span>

            <form onSubmit={handleSubmit}>
                <div>
                    <div className='bodyBlock'>
                        <span>
                            <p className='dialogUsername'>User Name</p>
                            <div className='userInputError'>
                                <input type='text' className='dialogUserInput' name='username' value={confirmForm.username} placeholder='Enter text here' onChange={handleChange} />
                                {errors.username && <p className="errorUser">{errors.username}</p>}
                            </div>

                            <p className='currentpassword'>Current Password</p>
                            <div className='passwordInputError'>
                                <input type='password' className='dialogPassword' name='currentPassword' value={confirmForm.currentPassword} placeholder='Enter text here' onChange={handleChange} />
                                {errors.currentPassword && <p className="errorCurrent">{errors.currentPassword}</p>}
                            </div>

                            <p className='newpassword'>New Password</p>
                            <div className='newPasswordInputError'>
                                <input type='password' className='dialogNew' name='newpassword' value={confirmForm.newpassword} placeholder='Enter text here' onChange={handleChange} />
                                {errors.newpassword && <p className="errorNew">{errors.newpassword}</p>}
                            </div>

                        </span>
                            <p className='confirmnew'>Confirm New Password</p>
                            <div className='confirmNewInputError'>
                                <input type='password' className='confirmpassword' name='confirmnewpassword' value={confirmForm.confirmnewpassword} placeholder='Enter text here' onChange={handleChange} />
                                {errors.newpassword && <p className="errorNew">{errors.newpassword}</p>}
                            </div>
                    </div>
                </div>

            </form>

            <form onSubmit={handleSubmit}>
                
            </form>
            <div className='submitForm'>
                <button className='cancel' onClick={handleClick}>Cancel</button>
                <button type='submit' className='confirm' disabled={confirmForm.username === "" || confirmForm.currentPassword === "" || confirmForm.newpassword === "" || confirmForm.confirmnewpassword === ""} onClick={validateForm} >Confirm</button>
            </div>
        </div>

    )
}

export default ChangePasscode
