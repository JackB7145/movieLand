//Importing react
import React from 'react';

//Initializing the movie card component
const MovieCard =({movie}) => {
    return (
        <div className='movie'>
            <div>
            <p>{movie.year}</p>
            </div>
            <div>
            <img src={movie.Poster !== "N/A" ? movie.Poster: 'https://via.placeholder.com/400'} alt={movie.Title}/>
            </div>
            <div>
            <span>{movie.Type}</span>
            <h3>{movie.Title}</h3>
            </div>
        </div>
    );
}

//Exporting the component
export default MovieCard;