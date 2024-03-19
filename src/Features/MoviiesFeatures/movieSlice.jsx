import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import movieAPI from '../../Common/apis/movieAPI';
import { APIKey } from '../../Common/apis/MovieAPIKey';

//Middleware for Async ActionCreator
export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async(term)=>{
    //Search Term of API call s
    // const movieText = "Park";  Hardcored TERM

        //create API endpoint in .get =>    EndPoint      Search-Term      Type
    const resp = await movieAPI
      .get(`?apiKey=${APIKey}&s=${term}&type=movie`)
       //on getting value from Action Dispatch an Action to reducer whuch will then update the state
    return resp.data;
})

export const fetchAsyncShows = createAsyncThunk('movies/fetchAsyncShows', async(term)=>{
    // const seriesText = "Vampire";  HardCored TERM
    const resp = await movieAPI
      .get(`?apiKey=${APIKey}&s=${term}&type=series`)
    return resp.data;
})

export const fetchAsyncDetail = createAsyncThunk('movies/fetchAsyncDetail', async(id)=>{
    const resp = await movieAPI
      .get(`?apiKey=${APIKey}&i=${id}&Plot=full`)
    return resp.data;
})

const initialState = {
    movies : {},
    shows: {},
    detail: {},
}

//Createing Slice is an OBJECT
const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: { //create actions in reducers
        //just take the state and update the property
        // addMovies: (state, {payload}) => {
        //     //Redux-Toolkit : automatically creates the copy of obj before making changes
        //     state.movies = payload;  //no need to destructure states
        //     //Redux => {...state, payload}
        // },
        removeDetails : (state)=> {
            state.detail = {};
        }
    }, 
    extraReducers: (builder) => {
        builder
        .addCase(fetchAsyncMovies.pending, (state)=>{
            console.log("Pending")
        })
        .addCase(fetchAsyncMovies.fulfilled, (state, {payload})=>{
            console.log("Fetched")
            state.movies = payload;
        })
        .addCase(fetchAsyncMovies.rejected, (state)=>{
            console.log("Rejected")
        })
        .addCase(fetchAsyncShows.fulfilled, (state, {payload})=>{
            console.log("Fetched")
            state.shows = payload;
        })
        .addCase(fetchAsyncDetail.fulfilled, (state, {payload})=>{
            console.log("Fetched")
            state.detail = payload;
        });
    }
    //extraReducers:{} : used to invoke common method for diff type of actions
}) ;

//export action creator to Component
export const {removeDetails} = movieSlice.actions

//to get value from store             State.ReducerNM.StateNm
export const getAllMovies = (state)=> state.movies.movies;
export const getAllShows = (state)=> state.movies.shows;
export const getDetails = (state)=> state.movies.detail;

export default movieSlice.reducer;  //for Store