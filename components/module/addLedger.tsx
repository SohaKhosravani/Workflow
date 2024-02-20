import React from 'react'
import { LiaTimesSolid } from 'react-icons/lia'

function AddLedger() {
  return (
    <div className='flex flex-col w-1/3 border shadow-md gap-7 p-6 rounded-md'>
    <div className='flex justify-between'>
    <span>New Ledger</span> 
    <LiaTimesSolid className='cursor-pointer'/>
    </div>
    <div className='flex flex-col gap-6'>
        <div className='flex flex-col gap-1'>
        <label htmlFor="">Title</label>
        <input type="text" placeholder='Title of Ledger' className='rounded-md border border-gray-300' />
        </div>
       <div className='flex flex-col gap-1'>
       <label htmlFor="">Credit</label>
        <input type="text" placeholder='Credit Amount' className='rounded-md border border-gray-300' />
       </div>
       <div className='flex flex-col gap-1'>
       <label htmlFor="">Debit</label>
        <input type="text" placeholder='Debit Amount' className='rounded-md border border-gray-300' />
       </div>
       <div className='flex flex-col gap-1'>
       <label htmlFor="">Description</label>
        <input type="text" placeholder='Description of Ledger' className='rounded-md border border-gray-300' />
       </div>
    </div>
    <div className='flex flex-col gap-3 mt-3'>
        <button className='bg-primary-700 text-white rounded-md py-2'>Add</button>
        <button className='text-primary-700 border border-primary-700 py-2 rounded-md'>Clear</button>
    </div>
</div>
  )
}

export default AddLedger