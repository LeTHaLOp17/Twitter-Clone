import React from 'react'
import Avatar from "react-avatar";
import { FaRegBookmark } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";

const AllPosts = () => {
  return (
    <div>
      <div>
      <div className='flex p-4 border-b border-gray-300'>
            <Avatar src="https://static.vecteezy.com/system/resources/previews/009/397/835/non_2x/man-avatar-clipart-illustration-free-png.png" size="60" round={true} />
            <div className='ml-2 w-full'>
              <div className='flex items-center'>
              <h1 className='font-bold'>Ayush</h1>
              <p className='text-gray-500 text-sm ml-1'>@ayushpatel . 1m</p>
              </div>
                <div>
                  <p>Hello, I am Ayush Created this</p>
                </div>
                <div className='flex justify-between my-3'>

                  <div className='flex items-center'> 
                    <div className='p-2 hover:bg-pink-100 rounded-full cursor-pointer'>
                      <FaRegHeart size={"24px"}/>
                    </div>
                    <p>0</p>
                  </div>

                  <div className='flex items-center'>
                  <div className='p-2 hover:bg-purple-200 rounded-full cursor-pointer'>
                  <FaRegComment size={"24px"}/>  
                    </div>
                    <p>0</p>
                  </div>

                  <div className='flex items-center'>
                    <div className='p-2 hover:bg-yellow-100 rounded-full cursor-pointer'>
                    <FaRegBookmark size={"24px"}/>
                    </div>
                  </div>
                </div>
            </div>
            
            </div>
      </div>
    </div>
  )
}

export default AllPosts
