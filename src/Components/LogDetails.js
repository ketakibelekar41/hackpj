import React, { createContext, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './hackdata.css';

export const myContext = createContext();

export const LogDetails = ({ onFormSubmit }) => {
    let nameref = useRef(null);
    let emailref = useRef(null);
    let pwdref = useRef(null);
    const navigate = useNavigate();

    const handleRef = () => {
        let name = nameref.current.value;
        let email = emailref.current.value;
        let pwd = 'xxxx';  // Mask the password
        const data = { email, pwd, name };
        onFormSubmit(data);
        navigate('/display');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleRef();
    };

    return (
        <div className='container'>
            <form method='POST' onSubmit={handleSubmit}>
                <table align='center'>
                    <thead>
                        <tr>
                            <th colSpan={2} align='center' ><h1>Log Details</h1></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Name:</th>
                            <td><input type='text' name='uname' ref={nameref} required /></td>
                        </tr>
                        <tr>
                            <th>Email:</th>
                            <td><input type='email' name='email' ref={emailref} required /></td>
                        </tr>
                        <tr>
                            <th>Password:</th>
                            <td><input type='password' name='pwd' ref={pwdref} required /></td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan={2}> <button type='submit'>Start</button></td>
                        </tr>
                    </tfoot>
                </table>
            </form>
        </div>
    );
};
