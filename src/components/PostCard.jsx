import React from 'react'
import { Link } from "react-router-dom";
import bucket from "../appwrite/storage"

function PostCard({ $id, title, featuredImage }) {
  console.log("featuredImage:", featuredImage)
  // const previewUrl = bucket.getFilePreview(featuredImage)
  // console.log("Preview URL:", previewUrl)
  return (
    <Link Link to={`/post/${$id}`}>
      <div className='w-full bg-gray-100 rounded-xl p-4'>
        <div className='w-full justify-center mb-4'>
          <img src={bucket.getFileView(featuredImage)} alt={title} className='rounded-xl' />
        </div>
        <h2 className='text-xl font-bold'>{title}</h2>
      </div>
    </Link>
  )
}

export default PostCard