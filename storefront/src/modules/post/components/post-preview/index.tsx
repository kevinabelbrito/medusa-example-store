import { formatDistance, subDays } from 'date-fns'
import React from 'react'
import { PostType } from 'types/post'

const PostPreview = ({
    id,
    title,
    content,
    created_at,
    updated_at
}: PostType) => {
  return (
    <div className='border-gray-900 border-solid p-5 shadow-md'>
        <span className='font-bold text-base text-blue-800 block'>
            {title}
        </span>
        <span className='font-light text-xs text-gray-600 text-right block my-2'>
            {formatDistance(subDays(new Date(created_at), 3), new Date(), { addSuffix: true })}
            
        </span>
        <p className='font-normal text-sm text-gray-800 mt-5 line-clamp-3'>
            {content}
        </p>
    </div>
  )
}

export default PostPreview