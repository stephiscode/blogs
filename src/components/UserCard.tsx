import React from 'react'
import { FaUserCircle } from 'react-icons/fa'

function UserCard({index, person}: UserCardProps) {
  return (
    <div className='flex items-center justify-between'>
        <section className="flex items-center">
            <FaUserCircle className='text-3xl mr-3 text-gray-500' />
            <span>{person.name}</span>
        </section>

        <button className='bg-white text-black font-semi-bold p-2 mr-2 rounded-md'>{person.following ? "Following" : "Follow"}</button>
    </div>
  )
}

export default UserCard