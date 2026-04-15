import React from 'react'
import { useParams } from 'react-router-dom'

const CourseDetails = () => {
  const { courseId } = useParams()

  return (
    <div className="bg-linear-to-br from-emerald-500 to-green-700 
                px-6 py-4 rounded-lg 
                flex justify-center items-center 
                font-semibold text-xl text-white 
                shadow-lg shadow-green-900/30 
                border border-white/10 
                backdrop-blur-sm 
                transition-all duration-300 ease-in-out w-40 margin-left">{courseId}</div>
  )
}

export default CourseDetails