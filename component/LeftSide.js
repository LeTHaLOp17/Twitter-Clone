import React from 'react';
import { IoHomeOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { FaXTwitter } from "react-icons/fa6";
import { IoMdLogOut } from "react-icons/io";
import { Link } from 'react-router-dom';
import { BsTwitterX } from "react-icons/bs";

const LeftSideBr = () => {
  return (
    <div className='w-[20%] py-10'>
      <div>
        
          <Link to = "/">
          <div className=' hover:bg-slate-200 hover:cursor-pointer rounded-full p-3 w-20'>
         <BsTwitterX size={'54px'}/>
        </div>
        </Link>
        

        <div className='my-4'>
        <Link to = "/" className='flex items-center my-3 px-3 py-2 hover:bg-slate-200 hover:cursor-pointer rounded-full'>
          <div>
            <IoHomeOutline size="25px"/>
          </div>
          <h1 className='font-bold text-lg ml-2'>Home</h1>
        </Link>

        <div className='flex items-center my-3 px-3 py-2 hover:bg-slate-200 hover:cursor-pointer rounded-full'>
          <div>
            <IoSearch size="25px"/>
          </div>
          <h1 className='font-bold text-lg ml-2'>Explore</h1>
        </div>

        <div className='flex items-center my-3 px-3 py-2 hover:bg-slate-200 hover:cursor-pointer rounded-full'>
          <div>
            <IoMdNotificationsOutline size="25px"/>
          </div>
          <h1 className='font-bold text-lg ml-2'>Notification</h1>
        </div>

        <Link to = "/profile" className='flex items-center my-3 px-3 py-2 hover:bg-slate-200 hover:cursor-pointer rounded-full'>
          <div>
            <CgProfile size="25px"/>
          </div>
          <h1 className='font-bold text-lg ml-2'>Profile</h1>
        </Link>

        <div className='flex items-center my-3 px-3 py-2 hover:bg-slate-200 hover:cursor-pointer rounded-full'>
          <div>
            <FaXTwitter size="25px"/>
          </div>
          <h1 className='font-bold text-lg ml-2'>My Tweets</h1>
        </div>

        <div className='flex items-center my-3 px-3 py-2 hover:bg-slate-200 hover:cursor-pointer rounded-full'>
          <div>
            <IoMdLogOut size="25px"/>
          </div>
          <h1 className='font-bold text-lg ml-2'>Log Out</h1>
        </div>
        <button className='px-4 py-2 border-none text-md bg-[#1D9BF0] rounded-full w-full'>Post</button>
        </div>
        </div>
    </div>
  )
}

export default LeftSideBr
