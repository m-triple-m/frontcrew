import React from 'react';
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';

const Signup = () => {
    
    const signupForm = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            confirmPassword : ''
        },
        onSubmit: (values, { }) => {
            console.log(values);
        },
    })

    return (
        <div className='bg-dark signup-bg'>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 mx-auto d-flex flex-column justify-content-center vh-100">
                        <img className='d-block mx-auto' style={{height: 200}} src="/logo.png" alt="" />
                        <p className="display-2 fw-bold text-center my-3">Front Crew</p>
                        <h3 className='text-center'>Create New Account</h3>
                        <hr />
                        <form className='mt-3' onSubmit={signupForm.handleSubmit}>
                            <label htmlFor="name">Username</label>
                            <input type="text" id="name" value={signupForm.values.name} onChange={signupForm.handleChange} className='form-control mb-4' />
                            <label htmlFor="email">Email Address</label>
                            <input type="text" id="email" value={signupForm.values.email} onChange={signupForm.handleChange} className='form-control mb-4' />
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" value={signupForm.values.password} onChange={signupForm.handleChange} className='form-control mb-4' />
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input type="password" id="confirmPassword" value={signupForm.values.confirmPassword} onChange={signupForm.handleChange} className='form-control mb-4' />
                            <button className='btn btn-primary' type='submit'>Signup Now</button>
                            <p className='text-center my-3'>Already Registered? <Link to="/login">Login Now</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup