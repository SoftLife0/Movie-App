import { useEffect, useState } from 'react';
import './App.css'
import SearchIcon from './search.svg'
import MovieCard from './MovieCard';

const apiUrl = 'http://www.omdbapi.com/?i=tt3896198&apikey=6075ddc'
const App = () => {

    const searchMovie = async (title) => {
        const response = await fetch(`${apiUrl}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
    };

    useEffect(() => {
        searchMovie('Shrek');
    }, []);

    const [movies, setMovies] = useState([]);

    return(
        <div className='app'>
            <h1>Softlife MovieLand</h1>

            <div className='search'>
                <input type="text" placeholder='Search for movies' value='Superman' onChange={() => {}}/>
                <img src={SearchIcon} onClick={() => {}}/>
            </div>

            {
                movies?.length > 0 
                ? (
                    <div className='container'>
                        {movies.map((movie) => (
                            <MovieCard movie={movie}/>
                        ))}
                    </div>
                ) : (
                    <div className='empty'>
                        <h2>No movie found</h2>
                    </div>
                )
            }

            
        </div>

    );
}

export default App;