import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAsyncDetail,
  getDetails,
  removeDetails
} from "../../Features/MoviiesFeatures/movieSlice";

export const MovieDetails = () => {
  //use ID from URL as param to ActionCreator
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  //get details from store
  const data = useSelector(getDetails);
  console.log(data);

  useEffect(() => {
    dispatch(fetchAsyncDetail(imdbID));
    //cleanUP func
    return () => {
        dispatch(removeDetails())
    }
  }, [dispatch, imdbID]);

  //dispatch ActionCreator to reducer in Store

  return (
    <div className="md:flex justify-evenly py-[40px] text-fontPrimary font-[400]">
    {Object.keys(data).length === 0 ? 
       (<div className="text-center font-[600] text-[40px] "><i>...LOADING</i></div>)
       :(
    <>
      <div className="xl:w-[1030px] lg:w-[1000px] md:w-[800px]">
        <div className="text-[40px] text-fontPrimary">{data.Title}</div>
        <div className="pl-[3px] mt-5 text-fontSecondary md:grid grid-cols-2 gap-2 lg:flex lg:gap-5 xl:gap-10">
          <span className="flex gap-1 xl:mr-[20px]">
            IMDB Ratting
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-[#ff9e00]"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                clipRule="evenodd"
              />
            </svg>
            : {data.imdbRating}
          </span>
          <span className="flex gap-1 xl:mr-[20px]">
            IMDB Votes
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-[#fafafa]"
            >
              <path d="M7.493 18.5c-.425 0-.82-.236-.975-.632A7.48 7.48 0 0 1 6 15.125c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75A.75.75 0 0 1 15 2a2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23h-.777ZM2.331 10.727a11.969 11.969 0 0 0-.831 4.398 12 12 0 0 0 .52 3.507C2.28 19.482 3.105 20 3.994 20H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 0 1-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227Z" />
            </svg>
            : {data.imdbVotes}
          </span>
          <span className="flex gap-1 xl:mr-[20px]">
            Runtime
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-[#BFD5D6]"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z"
                clipRule="evenodd"
              />
            </svg>
            : {data.Runtime}
          </span>
          <span className="flex gap-1 xl:mr-[20px]">
            Year
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-pink-300"
            >
              <path d="M12.75 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.25 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM10.5 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.75 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM14.25 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
              <path
                fillRule="evenodd"
                d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z"
                clipRule="evenodd"
              />
            </svg>
            : {data.Year}
          </span>
        </div>
        <div className="mt-5 leading-[1.8rem]">{data.Plot}</div>
        <div className="">
          <div>
            <span className="py-[10px] text-fontPrimary font-[600] w-[100px] inline-block">Director </span>
            <span className="text-fontSecondary">{data.Director}</span>
          </div>
          <div>
            <span className="py-[10px] text-fontPrimary font-[600] w-[100px] inline-block">Stars </span>
            <span className="text-fontSecondary">{data.Actors}</span>
          </div>
          <div>
            <span className="py-[10px] text-fontPrimary font-[600] w-[100px] inline-block">Genres </span>
            <span className="text-fontSecondary">{data.Genre}</span>
          </div>
          <div>
            <span className="py-[10px] text-fontPrimary font-[600] w-[100px] inline-block">Languages </span>
            <span className="text-fontSecondary">{data.Language}</span>
          </div>
          <div>
            <span className="py-[10px] text-fontPrimary font-[600] w-[100px] inline-block">Awards </span>
            <span className="text-fontSecondary">{data.Awards}</span>
          </div>
        </div>
      </div>
      <div className="ml-[30px] mt-5">
        <img src={data.Poster} alt={data.Title} />
      </div>
    </>
    )}
    </div>
  );
};
