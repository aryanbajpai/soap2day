import React from 'react';
//use to use all the DATA 
import { useSelector } from 'react-redux';
import { getAllMovies, getAllShows } from '../../Features/MoviiesFeatures/movieSlice';
import { MovieCard } from '../Movie-Card/MovieCard';
import Slider from 'react-slick';
import { Settings } from '../../Common/settings';



export const MovieList = () => {

    const movies = useSelector(getAllMovies);
    const shows = useSelector(getAllShows);
    // console.log(movies);
    let renderMovies, renderShows = "";

    //if movies found
    renderMovies = movies.Response === "True" ? (
        //map through movies in Search arrays and add to Card
        movies.Search.map((movie, index) => (
            <MovieCard key={index} data={movie}/>
        ))
    ) : (<div><h3>{movies.Error}</h3></div>)

    renderShows = shows.Response === "True" ? (
        //map through movies in Search arrays and add to Card
        shows.Search.map((movie, index) => (
            <MovieCard key={index} data={movie}/>
        ))
    ) : (<div><h3>{shows.Error}</h3></div>)

    // console.log(renderMovies)
  return (
    <div>
        <div className='my-6 '>
            <h2 className=' text-[30px] font-[400] text-fontSecondary mb-[13px] border-r-[4px] rounded-lg border-yellow-400 w-[110px]'>Movies</h2>
            {/* <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-[18px]'> */}
            <div>
                <Slider {...Settings}>{renderMovies}</Slider>
            </div>
        </div>
        <div className='my-6 '>
            <h2 className='text-[30px] font-[400] text-fontSecondary mb-[13px] border-r-[4px] rounded-lg border-yellow-400 w-[110px]'>Shows</h2>
            {/* <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-[18px]'> */}
            <div>
                <Slider {...Settings}>{renderShows}</Slider>
            </div>
        </div>
    </div>
  )
}
