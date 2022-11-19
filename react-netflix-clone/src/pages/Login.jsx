import React from 'react'
import {Link} from 'react-router-dom'
const Login = () => {
  return (
    <>
      <div className='w-full h-screen'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/5aecc44d-2a1f-4313-8399-98df20908b64/9cf5c956-04e4-4df7-bab9-62e2f2e6a235/PL-pl-20221114-popsignuptwoweeks-perspective_alpha_website_large.jpg" 
        className='hidden sm:block absolute w-full h-full object-cover'
        alt="netflix-background" />
        <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
        <div className='fixed w-full px-4 py-24 z-50'>
          <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
            <div className='max-w-[320px] mx-auto py-16'>
              <h1 className='text-3xl font-bold'>Sign In</h1>
              <form className='flex  w-full flex-col py-4'>
                <input className='rounded p-3 my-2 bg-gray-600' type="email" placeholder='E-mail' />
                <input className='rounded p-3 my-2 bg-gray-600' type="password" placeholder='Password' />
                <button className='rounded bg-red-600 py-3 my-6 font-bold'>Sign Up</button>
                <div className='flex justify-between items-center'>
                  <p ><input type="checkbox" className='mr-2' />Remember me</p>
                  <p>Need Help?</p>
                </div>
                <p className='py-4'>
                  <span className='text-gray-400'>New to Netflix?</span>
                  <Link to='/signup'>
                   Sign Up
                   </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login