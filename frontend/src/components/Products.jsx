import React from 'react'
import { Link } from 'react-router-dom'

const Products = () => {
  return (
    <div className='bg-zinc-800 rounded p-4 flex flex-col'>
    <Link to="/viewpage-details/id">
      <div className=''>
        <div className=' bg-zinc-900 rounded flex items-center justify-center'>
          <img className='h-[25vh] w-2/3' src="" alt="" />
        </div>
        <h2 className='mt-4 text-xl font-semibold text-white'>sdd</h2>
        <p className='mt-2 text-zinc-400 font-semibold'>by sds</p>
        <p className='mt-2 text-zinc-400 font-semibold text-xl'>Rs sdsd</p>
      </div>
    </Link>

    {/* {Favourite &&  <button className='bg-yellow-100 text-xl px-4 py-2 rounded border border-yellow-500 text-yellow-500 mt-4' >Remove From Favourite</button> } */}

    </div>

  )
}

export default Products