import React from 'react'
import LeftSide from './LeftSide'
import FollowerSide from './FollowerSide'
import { Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <div className='flex justify-between w-[80%] mx-auto'>
      <LeftSide/>
      <Outlet/>
      <FollowerSide/>
    </div>
  )
}

export default Home
