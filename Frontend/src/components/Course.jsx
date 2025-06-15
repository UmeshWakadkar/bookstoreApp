import React from 'react'
import Cards from './Cards'
import list from '../../public/list.json'
import { Link } from 'react-router-dom'

function Course() {
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
      <div className='mt-28 items-center justify-center text-center'>
        <h1 className='text-2xl md:text-4xl'>We delighted to have <span className='text-pink-500'>here! :)</span></h1>
        <p className='mt-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, enim?
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui, perferendis.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit, quisquam.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, labore!lorem10
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, dolor.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, esse.
          lorem 
        </p>
        <Link to="/">
        <button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>Back</button>
        </Link>
      </div>
      <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
        {
          list.map((item)=>(
            <Cards key={item.id} item={item} />
          ))
        }
      </div>
    </div>
    </>
  )
}

export default Course
