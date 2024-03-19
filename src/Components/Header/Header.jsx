import React, { useState } from "react";
import { Link } from "react-router-dom";
import user from "../../Images/user.png";
import { useDispatch } from "react-redux";
import { fetchAsyncMovies, fetchAsyncShows } from "../../Features/MoviiesFeatures/movieSlice";

export const Header = () => {
  const [term, setTerm] = useState("");
  const dispatch = useDispatch();

  const submitHandler = (e) => {
     e.preventDefault();
     if(term === "") return alert("Please enter search term...");
    //  console.log(term)
    dispatch(fetchAsyncMovies(term));
    dispatch(fetchAsyncShows(term));
    setTerm("");
  }

  return (
    <div className="bg-secondaryColor h-[72px] px-[40px] flex items-center justify-between">
      <div className="text-fontPrimary text-[32px] font-[600]">
        <Link to={"/"}>
          Soap<span className="text-fontSecondary">2</span>Day
        </Link>
      </div>

      <div className="w-[50%] flex justify-center">
        <form onSubmit={submitHandler} className="flex  justify-center w-[70%]">
          <input
            className="text-[18px] w-full p-[5px] pl-[10px] border-r-[2px] border-gray-400 h-[38px] outline-none"
            type="text"
            value={term}
            placeholder="Search Movies or Shows"
            onChange={(e) => setTerm(e.target.value)}
          />
          <button type="submit" className="px-2 bg-fontPrimary text-[20px] cursor-pointer h-[38px]">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </div>
          </button>
        </form>
      </div>
      <div className="w-[38px] h-[38px]">
        <img className="w-[38px] h-[38px]" src={user} alt="user" />
      </div>
    </div>
  );
};
