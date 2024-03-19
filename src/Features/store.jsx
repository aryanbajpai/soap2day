import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./MoviiesFeatures/movieSlice"

export const store = configureStore({
    reducer: {   //reducer added
        //RedNM : ReducerFromSlice
        movies: moviesReducer,
    }, 
})