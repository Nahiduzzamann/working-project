import React, { useContext, useState } from 'react';
import './Login.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Login = () => {
    const [error, setError] = useState('');
    const { signIn } = useContext(AuthContext)
    const handleSignIn = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password, confirm);
        setError('')
        if (password.length < 6) {
            setError('password must be 6 characters or longer')
            return
        }
        signIn(email, password)
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser);
                form.reset();
            })
            .catch(error => {
                console.log(error);
                setError(error.message)
            })
    }
    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form onSubmit={handleSignIn}>
                <div className='form-control'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' placeholder='email' name='email' id='' required></input>
                </div>
                <div className='form-control'>
                    <label htmlFor='password'>Password</label>
                    <input type='password' placeholder='password' name='password' id='' required></input>
                </div>
                <input className='btn-submit' type='submit' value='Login'></input>
            </form>
            <p><small>New to Ema-John? <Link to='/signup'>Create an account</Link></small></p>
            <p className='text-error'>{error}</p>

        </div>
    );
};

export default Login;