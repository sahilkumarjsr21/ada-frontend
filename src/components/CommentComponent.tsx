import React from 'react'
import { Textarea } from './ui/textarea'

type CommentProps = {
    id: string,
    content: string,
    time: Date
}

function CommentComponent({id, content, time} : CommentProps) {
  return (
    <div className='bg-slate-100 z-100 gap-y-2 p-3 border border-gray-500 mx-auto my-auto rounded-md shadow-lg' >
        <Textarea value={content} className='text-sm border-gray-900' readOnly/>
        <span className='text-xs flex justify-end text-gray-400 mt-2'>{time.toString()}</span>
    </div>
  )
}

export default CommentComponent