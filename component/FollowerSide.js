import React from 'react'
import { CiSearch } from "react-icons/ci";
import Avatar from 'react-avatar';

const RightSideBar = () => {
  return (
    <div className='w-[20%] py-8'>
      <div className='flex font-bold items-center px-8 py-3 bg-gray-100 rounded-full outline-none'>
        <div>
          <CiSearch size="22px"/>
        </div>
        <input type='text' className='bg-transparent outline-none px-2' placeholder='Search' />
      </div>
      <div className='p-4 border border-gray-300 rounded-2xl bg-gray-100 my-4'>
        <h1 className='font-bold text-lg'>You Can Follow</h1>
        
        <div className='flex items-center justify-between my-2'>
          <div className='flex'>
            <div>
              <Avatar src="https://static.vecteezy.com/system/resources/previews/009/397/835/non_2x/man-avatar-clipart-illustration-free-png.png" size="30" round={true} />
            </div>
              <div className='ml-2'>
            <h1 className='font-bold'>Ayush</h1>
            <p className='text-sm'>@ayushpatel</p>
          </div>
          <div className='mx-10'>
            <button className='px-3 py-1 bg-black text-white rounded-full'>Profile</button>
          </div>
          </div>
        </div>

        <div className='flex items-center justify-between my-2'>
          <div className='flex'>
            <div>
              <Avatar src="https://static.vecteezy.com/system/resources/previews/009/397/835/non_2x/man-avatar-clipart-illustration-free-png.png" size="30" round={true} />
            </div>
              <div className='ml-2'>
            <h1 className='font-bold'>Ayush</h1>
            <p className='text-sm'>@ayushpatel</p>
          </div>
          <div className='mx-10'>
            <button className='px-3 py-1 bg-black text-white rounded-full'>Profile</button>
          </div>
          </div>
        </div>

        <div className='flex items-center justify-between my-2'>
          <div className='flex'>
            <div>
              <Avatar src="https://static.vecteezy.com/system/resources/previews/009/397/835/non_2x/man-avatar-clipart-illustration-free-png.png" size="30" round={true} />
            </div>
              <div className='ml-2'>
            <h1 className='font-bold'>Ayush</h1>
            <p className='text-sm'>@ayushpatel</p>
          </div>
          <div className='mx-10'>
            <button className='px-3 py-1 bg-black text-white rounded-full'>Profile</button>
          </div>
          </div>
        </div>

        <div className='flex items-center justify-between my-2'>
          <div className='flex'>
            <div>
              <Avatar src="https://static.vecteezy.com/system/resources/previews/009/397/835/non_2x/man-avatar-clipart-illustration-free-png.png" size="30" round={true} />
            </div>
              <div className='ml-2'>
            <h1 className='font-bold'>Ayush</h1>
            <p className='text-sm'>@ayushpatel</p>
          </div>
          <div className='mx-10'>
            <button className='px-3 py-1 bg-black text-white rounded-full'>Profile</button>
          </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default RightSideBar
