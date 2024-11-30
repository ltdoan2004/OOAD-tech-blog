import React from 'react'
import {sortBlogs} from '@/src/utils'



const HomeCoverSection = ({blogs}) => {
    const sortedBlogs = sortBlogs(blogs);
    const blog = sortedBlogs[0];
  return (
    <article>
        
    </article>
  )
}

export default HomeCoverSection