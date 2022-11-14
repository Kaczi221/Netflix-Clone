import React from 'react'
import {FaHeart, FaRegHeart} from 'react-icons/fa'

const Movie = ({movie}) => {
    const [like, setLike] = React.useState(false)
  return (
            <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block relative cursor-pointer p-2'>
                <img className='w-full h-auto block' src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`} alt={movie?.title}></img>
                <div className='absolute w-full h-full top-0 left-0 hover:bg-black/80 hover:opacity-100 opacity-0 text-white'>
                  <p className='text-xs md:text-sm font-bold flex justify-center items-center text-white h-full text-center'>{movie?.title}</p>
                  <p>
                    {like ? <FaHeart className='absolute top-4 left-4 text-red-400'/> : <FaRegHeart className='absolute top-4 left-4 text-red-400'/>}
                  </p>
                </div>
            </div>
  )
}

export default Movie