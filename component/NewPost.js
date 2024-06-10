import React from 'react'
import Avatar from "react-avatar";
import { CiImageOn } from "react-icons/ci";

const NewPost = () => {
  return (
    <div className='w-[90%] m-5'>
        <div>
            <div className='flex items-center justify-evenly border-b border-gray-200'>
<div className='hover:cursor-pointer hover:bg-gray-200 w-full text-center px-3 py-3'>
    <h1 className='font-bold text-purple-900 text-lg py-3 px-3'>For You</h1>
</div>
<div className='cursor-pointer hover:bg-gray-200 w-full text-center px-3 py-3'>
    <h1 className='font-bold text-purple-900 text-lg py-3 px-3'>Following</h1>
</div>
      </div>
      </div>
      
      <div>
        <div className='flex items-center p-4'>
            <div>
            <Avatar src="https://static.vecteezy.com/system/resources/previews/009/397/835/non_2x/man-avatar-clipart-illustration-free-png.png" size="60" round={true} />
            </div>
            <input className='font-semibold w-full border-none outline-none text-xl ml-2' type = "text" placeholder='Write your thought!'/>
        </div>
        <div className='flex items-center justify-between p-3 border-b border-gray-300'>
            <div>
                <CiImageOn size={"24px"}/>
            </div>
            <button className='bg-[#1D9BF0] px-5 py-2 border-none rounded-full'>Post</button>
        </div>
      </div>
    </div>
  )
}

export default NewPost
