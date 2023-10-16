import React from 'react';
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';

const Login = () => {
    const loginForm = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: (values, { }) => {
            console.log(values);
        },

    })

    return (
        <div className='bg-dark login-bg'>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 mx-auto d-flex flex-column justify-content-center vh-100">
                        <img className='d-block mx-auto' style={{height: 200}} src="/logo.png" alt="" />
                        <p className="display-2 fw-bold text-center my-3">Front Crew</p>
                        <h3 className='text-center'>Continue to Account</h3>
                        <hr />
                        <form className='mt-3' onSubmit={loginForm.handleSubmit}>
                            <label htmlFor="">Email Address</label>
                            <input type="text" id="email" value={loginForm.values.email} onChange={loginForm.handleChange} className='form-control mb-4' />
                            <label htmlFor="">Password</label>
                            <input type="password" id="password" value={loginForm.values.password} onChange={loginForm.handleChange} className='form-control mb-4' />

                            <button className='btn btn-info' type='submit'>Login Now</button>

                        </form>
                        <p className='text-center my-3'>Not Registered Yet? <Link to="/signup">Register Now</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login