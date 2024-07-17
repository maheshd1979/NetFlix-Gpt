import React, { useState } from 'react';
import Header from './Header';
import { validateForm } from '../utils/validate';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});

  const toggleSignInform = () => {
    setIsSignInForm(!isSignInForm);
    setErrors({});
    setFormData({
      email: '',
      username: '',
      password: '',
      confirmPassword: ''
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleButtonClick = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData, isSignInForm);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Submit the form
      console.log('Form submitted successfully:', formData);
    }
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
      <div className="absolute z-20 flex flex-col items-center justify-center p-6 pt-2 bg-gray-800 border-2 border-black rounded-lg h-[600px] w-96 bg-opacity-70">
        <h2 className="text-4xl font-extrabold text-white mb-10 text-left w-full text-shadow-lg">
          {isSignInForm ? 'Sign In' : 'Sign Up'}
        </h2>
        <form className="flex flex-col items-center mb-3 justify-center w-full">
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-80 p-3 m-2 bg-white rounded"
          />
          {errors.email && <span className="text-red-500">{errors.email}</span>}
          {!isSignInForm && (
            <>
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleInputChange}
                className="w-80 p-3 m-2 bg-white rounded"
              />
              {errors.username && <span className="text-red-500">{errors.username}</span>}
            </>
          )}
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
            className="w-80 p-3 m-2 bg-white rounded"
          />
          {errors.password && <span className="text-red-500">{errors.password}</span>}
          {!isSignInForm && (
            <>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className="w-80 p-3 m-2 bg-white rounded"
              />
              {errors.confirmPassword && <span className="text-red-500">{errors.confirmPassword}</span>}
            </>
          )}
          <button className='w-80 px-0 py-1 m-2 text-white bg-red-500 rounded' onClick={handleButtonClick}>
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
