import React, { useEffect } from 'react'
import requests from '../Requests'
import axios from 'axios'

const Main = () => {
    const [movies, setMovies] = React.useState([])
    const movie = movies[Math.floor(Math.random() * movies.length)]

    const stringCut = (string, num) => {
        if(string?.length > num) {
            return string.slice(0, num) + '...'
        }else {
            return string
        }
    }

    useEffect(() => {
        axios.get(requests.requestUpcoming).then(res => {
            setMovies(res.data.results)
        })
    }, [])
  return (
    <div className='w-full h-[550px] text-white'>
        <div className='w-full h-full'>
            <div className='absolute w-full h-[550px] bg-gradient-to-r from-black'></div>
            <img src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} className='w-full h-full object-cover'></img>
            <div className='absolute top-[20%] p-4 md:p-8'>
                <h1 className='text-3xl md:text-5xl my-4'>{movie?.title}</h1>
                <div className='my-4'>
                    <button className='border bg-red-700 border-red-700 text-white py-2 px-5'>Play</button>
                    <button className='border border-red-700 text-white py-2 px-5 ml-4'>Watch Later</button>
                </div>
                <p className='my-2 text-gray-200 text-sm'>Released:{movie?.release_date}</p>
                <p className='w-full md:w-[70%] lg:w-[50%] xl:w-[35%] text-gray-50'>{stringCut(movie?.overview, 200)}</p>
            </div>
        </div>
    </div>
  )
}

export default Main