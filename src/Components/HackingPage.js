import React, { useContext, useState, useRef, memo } from 'react';
import { myContext } from './LogDetails';
import './hackdata.css';

export const HackingPage = memo(() => {
    const formData = useContext(myContext);
    const [message, setMessage] = useState('');
    const hasCalledCallback = useRef(false);

    const callbackHell = () => {
        setTimeout(() => {
            setMessage(`Hey ${formData.name}!`);
            //console.log(`Hey ${formData.name}!`);

            setTimeout(() => {
                setMessage(() => "\nFetching username and password");
                // console.log("Fetching username and password");

                setMessage(() => `\nI'm hacking your account with email ${formData.email}`);
                // console.log(`I'm hacking your account with email ${formData.email}`);

                setTimeout(() => {
                    setMessage(() => `\nHacking initiated with password ${formData.pwd}`);
                    // console.log(`Hacking initiated with password ${formData.pwd}`);

                    setTimeout(() => {
                        setMessage(() => "\nAccount has been Hacked!");
                        // console.log("Account has been Hacked!");
                    }, 5000);
                }, 5000);
            }, 5000);
        }, 5000);
    };

    if (formData && !hasCalledCallback.current) {    /* formData && !hasCalledCallback.current: This condition ensures that callbackHell is only called if formData is available and hasCalledCallback.current is false. */
        callbackHell();
        hasCalledCallback.current = true;  /*This sets the ref to true to prevent subsequent calls.*/
    }

    return (
        <div className="display-data-container">
            {formData ? (
                <div>
                    <h3>Here Credentials...</h3>
                    <p>Name: {formData.name}</p>
                    <p>Email: {formData.email}</p>
                    <p>Password: {formData.pwd}</p>
                    <p>Messages:</p>
                    <pre className='message-container'>{message}</pre>
                </div>
            ) : (
                <p>Credentials not found, try again...</p>
            )}
        </div>
    );
});

export default memo(HackingPage);
