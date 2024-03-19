import React, { useEffect } from 'react';
import { MovieList } from '../MovieList/MovieList';
// import movieAPI from '../../Common/apis/movieAPI';
// import { APIKey } from '../../Common/apis/MovieAPIKey';
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncShows } from '../../Features/MoviiesFeatures/movieSlice';
// import { addMovies } from '../../Features/MoviiesFeatures/movieSlice';

export const Home = () => {

    
    const dispatch = useDispatch();
    const movieText = "Harry"; //when page open so a default
    const showText = "Vampire"
    
    //API call for movie data
    useEffect( ()=>{
        dispatch(fetchAsyncMovies(movieText));
        dispatch(fetchAsyncShows(showText));
    }, [dispatch])

  return (
    <div>
        <div className=''></div>
        <MovieList/>
    </div>
  )
}


//   //DispatchingSYNCRONOUS ACTIONcreator
        // const fetchMovies = async() => {
        //     //     //create API endpoint in .get =>    EndPoint      Search-Term      Type
        //     // const resp = await movieAPI.get(`?apiKey=${APIKey}&s=${movieText}&type=movie`).catch( err => console.log(err));
        //     //  // console.log(resp)

        //     //    //on getting value from Action Dispatch an Action to reducer whuch will then update the state
        //     // dispatch(addMovies(resp.data))  //inmport actionCreator 
        // };