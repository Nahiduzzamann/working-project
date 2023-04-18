import React from 'react';
import './Signup.css'

const Signup = () => {
    return (
        <div className='form-container'>
            <h2 className='form-title'>Sign Up</h2>
            <form>
                <div className='form-control'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' placeholder='email' name='email' id='' required></input>
                </div>
                <div className='form-control'>
                    <label htmlFor='password'>Password</label>
                    <input type='password' placeholder='password' name='password' id='' required></input>
                </div>
                <div className='form-control'>
                    <label htmlFor='password'>Confirm Password</label>
                    <input type='password' placeholder='confirm password' name='password' id='' required></input>
                </div>
                <input className='btn-submit' type='submit' value='Sign Up'></input>
            </form>
        </div>
    );
};

export default Signup;