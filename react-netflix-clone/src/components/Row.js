import React, { useEffect } from 'react'
import axios from 'axios'
import Movie from './Movie'
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'

const Row = ({title, fetchURL, rowID}) => {
  const [movies, setMovies] = React.useState([])
  useEffect(() => {
    axios.get(fetchURL).then(res => {
      setMovies(res.data.results)
    })
  }, [fetchURL])

  const slideLeft = () => {
    var slider = document.getElementById('slider' + rowID)
    slider.scrollLeft = slider.scrollLeft - 500 
  }
  const slideRight = () => {
    var slider = document.getElementById('slider' + rowID)
    slider.scrollLeft = slider.scrollLeft + 500 
  }
  return (
    <>
        <h2 className='text-white font-bold md:text-lg p-4'>{title}</h2>
        <div className='relative flex items-center group'>
          <MdChevronLeft onClick={slideLeft} className='left-5 absolute bg-white rounded-full opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' size={50}/>
          <div id={'slider' + rowID} className='w-full h-full overflow-x-scroll scroll-smooth whitespace-nowrap scrollbar-hide relative'>
            {movies.map((movie, id) => (
              <Movie movie={movie} key={id}/>
            ))}
          </div>
          <MdChevronRight onClick={slideRight} className='right-5 absolute bg-white rounded-full opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' size={50}/>
        </div>
    </>
  )
}

export default Row