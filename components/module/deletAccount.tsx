import React from 'react'
import { LiaTimesSolid } from 'react-icons/lia'

function DeletAccount() {
  return (
    <div className='flex flex-col w-1/3 border shadow-md gap-4 p-8 rounded-md'>
    <div className='flex justify-between'>
    <span className='font-semibold text-xl'>Delete Account</span> 
    <LiaTimesSolid className='cursor-pointer'/>
    </div>
    <div className='flex flex-col gap-2'>
    <span className='text-gray-600'>Are you sure you want to delete your account?</span>
    <p className='text-gray-500'>All of your data will be permanently removed from our servers forever. This action cannot be undone.</p>
    </div>
        <button className='text-white border bg-danger py-2 mt-3 rounded-md'>Delete</button>
</div>
  )
}

export default DeletAccount