import React from 'react'
import { IoArrowBack } from "react-icons/io5";
import { Link } from 'react-router-dom';
import Avatar from 'react-avatar';

const Profile = () => {
  return (
    <div className='w-[50%] border-l border-r border-gray-300'>
        <div>
            <div className='flex items-center py-2'>
                <Link to="/" className='p-2 rounded-full hover:curser-pointer hover:bg-gray-100'>
                   <IoArrowBack size={'24px'}/>
                    </Link> 
                    <div>    
                    <h1 className='font-bold text-lg'>Ayush</h1>
                    <p className='text-gray-500 text-sm'>10 Posts</p>
                </div>
            </div>
            <div class="r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-ipm5af r-13qz1uu">
              <img src="https://pbs.twimg.com/profile_banners/1097897763445108738/1702243382/600x200" alt='Profile bg' width={'100%'}/>
            </div>
              <div className='absolute top-60 ml-3 border-4 border-white rounded-full'>
          <Avatar src="https://static.vecteezy.com/system/resources/previews/009/397/835/non_2x/man-avatar-clipart-illustration-free-png.png" size="120" round={true} />
          </div>
          <div className='text-right m-4'>
            <button className='px-4 py-1 hover:bg-gray-200 rounded-full border border-purple-800 font-semibold'>Edit Profile</button>
          </div>
          <div className='m-4 mt-6'>
            <h1 className='font-bold text-xl'>Ayush</h1>
            <p>@ayushpatel</p>
          </div>
          <div className='m-4 text-sm'>
            <p>🌐 Exploring the web's endless possibilities with MERN Stack 🚀 | Problem solver by day, coder by night 🌙 | Coffee lover ☕ | Join me on this coding journey!</p>
          </div>
        </div>
    </div>
  )
}

export default Profile
