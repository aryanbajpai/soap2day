import React from 'react'
import { Link } from 'react-router-dom';

//for adding the values
export const MovieCard = (props) => {

    const {data} = props;

  return (
    <div className='bg-secondaryColor cursor-pointer transition-all duration-300 hover:scale-[1.06] min-h-[470px] h-full m-[10px]'>
    <Link to={`/movie/${data.imdbID}`}>
        <div className=''>
            <div className='h-[300px]'>
                <img className='w-full h-full' src={data.Poster} alt={data.Title}/>
            </div>
            <div className='p-5'>
                <div className='text-fontPrimary'>
                    <h4 className='text-[22px] font-[400] mb-[10px]'>{data.Title}</h4>
                    <p>{data.Year}</p>
                </div>
            </div>
        </div>
    </Link>
    </div>
  )
}


