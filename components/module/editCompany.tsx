import React from 'react'
import { LiaTimesSolid } from 'react-icons/lia'

function EditCompany() {
  return (
    <div className='flex flex-col w-1/3 border shadow-md gap-7 p-6 rounded-md'>
    <div className='flex justify-between'>
    <span>Edit Company</span> 
    <LiaTimesSolid className='cursor-pointer'/>
    </div>
    <div className='flex flex-col gap-6'>
        <div className='flex flex-col gap-1'>
        <label htmlFor="">Company Name</label>
        <input type="text" className='rounded-md border border-gray-300' />
        </div>
       <div className='flex flex-col gap-1'>
       <label htmlFor="">Location</label>
        <input type="text" className='rounded-md border border-gray-300' />
       </div>
       <div className='flex flex-col gap-1'>
       <label htmlFor="">Employees Number</label>
        <input type="text" className='rounded-md border border-gray-300' />
       </div>
    </div>
    <div className='flex flex-col gap-3 mt-3'>
        <button className='bg-primary-700 text-white rounded-md py-2'>Update</button>
        <button className='text-primary-700 border border-primary-700 py-2 rounded-md'>Delete Company</button>
    </div>
</div>
  )
}

export default EditCompany