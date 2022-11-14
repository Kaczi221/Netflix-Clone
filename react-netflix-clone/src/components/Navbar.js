import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between w-full z-[100] p-4 absolute'>
        <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>NETFLIX</h1>
        <div>
            <button className='text-white pr-4'>Sign In</button>
            <button className='bg-red-600 px-6 py-4 rounded cursor-pointer text-white'>Sign Up</button>
        </div>
    </div>
  )
}

export default Navbar