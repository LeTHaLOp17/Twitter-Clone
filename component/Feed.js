import React from 'react'
import NewPost from './NewPost';
import AllPosts from './AllPosts';

const Feed = () => {
  return (
    <div className='w-[55%] border border-gray-300'>
      <div>
        <NewPost/>
        <AllPosts/>
        <AllPosts/>
        <AllPosts/>
        <AllPosts/>
        <AllPosts/>
        <AllPosts/>
        <AllPosts/>
        <AllPosts/>
        <AllPosts/>
      </div>
    </div>
  )
}

export default Feed
