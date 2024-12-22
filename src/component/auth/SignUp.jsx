import Lottie from 'lottie-react';
import React, { useContext, useState } from 'react';
import registerlottie from '../../assets/lottie/register.json';
import AuthContext from '../../provider/Provider';

const SignUp = () => {
    const {registerUser} = useContext(AuthContext);
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;

        // Password validation
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if (!passwordRegex.test(password)) {
            setErrorMessage(
                'Password must be at least 6 characters long and include at least 1 uppercase and 1 lowercase letter.'
            );
            return;
        }
        registerUser(email,password)
        .then(res=>{
            console.log(res)
        })
        .catch(err=>{
            console.log(err)
        })
        setErrorMessage('');
        console.log({ name, email, photo, password });

        // Clear form fields
        // form.reset();
    };

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="w-full lg:w-60">
                    <Lottie animationData={registerlottie} />
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleRegister} className="card-body">
                        <h1 className="text-5xl font-bold">Register now!</h1>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter Your Name"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="email"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input
                                type="url"
                                name="photo"
                                placeholder="Enter Your Photo Url"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <div className="relative">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    name="password"
                                    placeholder="password"
                                    className="input input-bordered w-full"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute inset-y-0 right-0 px-3 py-2 text-gray-600"
                                >
                                    {showPassword ? 'Hide' : 'Show'}
                                </button>
                            </div>
                        </div>
                        {errorMessage && (
                            <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
                        )}
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
