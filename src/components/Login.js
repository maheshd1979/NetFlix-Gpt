import React from 'react';
import Header from './Header';

const Login = () => {
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
      <form className="absolute z-20 flex flex-col items-center justify-center p-6 bg-gray-800 border-2 border-black rounded-lg h-2/3 w-96 bg-opacity-70">
        <input type="text" placeholder="Email" className="p-2 m-2 bg-white rounded" />
        <input type="password" placeholder="Password" className="p-2 m-2 bg-white rounded" />
        <button className='px-4 py-2 m-4 text-white bg-red-500 rounded'>Sign in</button>
      </form>
    </div>
  );
}


export default Login;