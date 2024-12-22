import Lottie from 'lottie-react';
import React from 'react';
import registerlottie from '../../assets/lottie/register.json';

const SignIn = () => {
    const handleSignIn = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log({email,password})
        
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="w-full lg:w-60">
                    <Lottie animationData={registerlottie}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSignIn} className="card-body">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email"
                            name='email' 
                            className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password"
                            name='password'
                             className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <div className="flex items-center my-4">
                            <hr className="flex-grow border-t border-gray-300" />
                            <span className="mx-4 text-gray-500">or</span>
                            <hr className="flex-grow border-t border-gray-300" />
                        </div>
                        <div className="form-control">
                            <button className="btn btn-primary">Google Login</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignIn;