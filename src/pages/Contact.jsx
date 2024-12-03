import { useState } from 'react';

// Here we import a helper function that will check if the email is valid
import { validateEmail } from '../utils/helpers';


export default function Contact() {

    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        // Based on the input type, we set the state of either email, username, and password
        if (inputType === 'userName' && !inputValue) {
            setErrorMessage('Name is required');
        } else if (inputType === 'email' && !validateEmail(inputValue) ) {
            setErrorMessage('Your Email is invalid');
        } else if (inputType === 'message' && !inputValue) {
            setErrorMessage('Message is required');
        }
    };

    return (
        <>
            <form className="form">
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Name</label>
                    <input type="text" name="userName" class="form-control w-50" id="exampleFormControlInput1" placeholder="" onBlur={handleInputChange}></input>
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput2" class="form-label">Email address</label>
                    <input type="email" name="email" class="form-control w-50" id="exampleFormControlInput2" placeholder="name@example.com" onBlur={handleInputChange}></input>
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                    <textarea name="message" class="form-control w-50" id="exampleFormControlTextarea1" rows="9" onBlur={handleInputChange}></textarea>
                </div>
                <div class="mb-3">
                    <button type="submit" class="btn btn-primary mb-3">Submit</button>
                </div>
            </form>
            {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}
        </>
    );
}
