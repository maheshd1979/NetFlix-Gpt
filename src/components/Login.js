import React, { useState } from 'react';
import Header from './Header';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInform = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="relative flex flex-col items-center justify-center h-screen">
      <Header />
      <div className='absolute inset-0 z-0'>
        <img
          className="object-cover w-full h-full"
          src={`${process.env.PUBLIC_URL}/images/Background.png`}
          alt="Background"
        />
      </div>
      <div className="absolute z-20 flex flex-col items-center justify-center p-6 pt-2 bg-gray-800 border-2 border-black rounded-lg h-2/3 w-96 bg-opacity-70">
        <h2 className="text-4xl font-extrabold text-white mb-6 text-left w-full text-shadow-lg">
          {isSignInForm ? 'Sign In' : 'Sign Up'}
        </h2>
        <form className="flex flex-col items-center mb-3 justify-center w-full">
          <input
            type="text"
            placeholder="Email"
            className="w-80 p-3 m-2 bg-white rounded"
          />
          {!isSignInForm && (
            <input
              type="text"
              placeholder="Username"
              className="w-80 p-3 m-2 bg-white rounded"
            />
          )}
          <input
            type="password"
            placeholder="Password"
            className="w-80 p-3 m-2 bg-white rounded"
          />
          {!isSignInForm && (
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-80 p-3 m-2 bg-white rounded"
            />
          )}
          <button className='w-80 px-0 py-1 m-2 text-white bg-red-500 rounded'>
            {isSignInForm ? 'Sign in' : 'Sign up'}
          </button>
          {isSignInForm && (
            <>
              <div className="flex items-center mb-2">
                <span className="text-white">OR</span>
              </div>
              <button className='w-80 px-0 py-1 m-2 text-white bg-transparent border border-white rounded'>
                Use a sign-in code
              </button>
              <div className="flex items-center w-full mt-4">
                <input
                  type="checkbox"
                  id="rememberMe"
                  className="mr-2 h-5 w-5"
                />
                <label htmlFor="rememberMe" className="text-white text-lg">Remember me</label>
              </div>
            </>
          )}
          <div className="flex flex-col items-center mt-4">
            <span className="text-gray-400 text-sm mt-4 cursor-pointer" onClick={toggleSignInform}>
              {isSignInForm ? 'New to Netflix? ' : 'Already have an account? '}
              <a href="#" className="text-white hover:underline">
                {isSignInForm ? 'Sign up now.' : 'Sign in now.'}
              </a>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
