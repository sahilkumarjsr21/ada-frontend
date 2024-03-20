import React from 'react'

function NavBar() {
  return (
    <div className='w-full z-50 sticky top-0 shadow-xl bg-white '>
    <div className="flex justify-center p-4 items-center">
        <div className='text-3xl mr-4'>ADA Ai</div>
        <div className='text-sm'>Fix ADA Issues Using AI</div>
    </div>
    <hr className='bg-gray-600 h-px rounded'/>
    </div>
  )
}

export default NavBar