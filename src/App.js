//Importing neccesary libraries
import './App.css';
import {useEffect, useState} from 'react';
import SearchIcon from './search.svg';
import MovieCard from './movieCard.jsx'

//Defining the api key 
const API_URL = "http://www.omdbapi.com?apikey=ee6ff04a"

//Initializing the application page
const App = () => {

  //Assigning the changing variables with their corresponding functions
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("")

  //Enabling the web application to find the movies using the api
  const searchMovies = async (title) => {
    console.log(title)
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json();

    //Sending the data to the application
    setMovies(data.Search);
  }

  //When the page is loaded, variables are predetermined
  useEffect(() => {
    searchMovies("spiderman");
    setSearchTerm("spiderman")
  }, [])


  //Returning the visual JSX
  return (
    <div className='app'>
      <h1>MovieLand</h1>

      <div className='search'>
        <input placeholder='Search for movies' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>

        <img src={SearchIcon} alt='search' onClick={() => searchMovies(searchTerm)}/>
        

      </div>

      {movies?.length > 0 ? (
          <div className='container'>
            {movies.map((movie) => (
              <MovieCard movie={movie} />
            ))}
        </div>
      ):(

        <div className='empty'>
          <h2>No movies found</h2>
        </div>

      )}

    </div>
  );
}

//Exporting the application code for use in JSX
export default App;
