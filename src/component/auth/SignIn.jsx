import Lottie from 'lottie-react';
import React, { useContext, useState } from 'react';
import registerlottie from '../../assets/lottie/register.json';
import AuthContext from '../../provider/Provider';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const SignIn = () => {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location.state)
  const { signInUser,signInWithGoogle } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    // Password validation
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      setErrorMessage(
        'Password must be at least 6 characters long and include at least 1 uppercase and 1 lowercase letter.'
      );
      return;
    }

    signInUser(email, password)
      .then((res) => {
        console.log(res);
        setSuccessMessage('Login successful!');
        setErrorMessage('');
        navigate(location.state || '/' )
      })
      .catch((err) => {
        console.log(err);
        setErrorMessage('Login failed. Please check your credentials.');
        setSuccessMessage('')

      });

    console.log({ email, password });
  };
  const handleGoogleSignIn =()=>{
    signInWithGoogle()
    .then(res =>{
      console.log(res)
      navigate(location.state || '/' )
    })
    .catch(err=>{
      console.log(err)
    })
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
              <input
                type="email"
                placeholder="email"
                name="email"
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
                  placeholder="password"
                  name="password"
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
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            {errorMessage && (
              <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
            )}
            {successMessage && (
              <p className="text-green-500 text-sm mt-2">{successMessage}</p>
            )}
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Don't Have Account?<Link to={"/register"} className='text-red-500'>Register</Link>
                </a>
              </label>
            </div>
            <div className="flex items-center my-4">
              <hr className="flex-grow border-t border-gray-300" />
              <span className="mx-4 text-gray-500">or</span>
              <hr className="flex-grow border-t border-gray-300" />
            </div>
            <div className="form-control">
              <button onClick={handleGoogleSignIn} className="btn btn-primary">Google Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
