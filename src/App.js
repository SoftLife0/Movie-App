import { useEffect, useState } from 'react';
import './App.css'
import SearchIcon from './search.svg'
import MovieCard from './MovieCard';

const apikey = process.env.REACT_APP_API_KEY;
const apiUrl = `http://www.omdbapi.com/?i=tt3896198&apikey=${apikey}`;
const App = () => {


    const [movies, setMovies] = useState([]);
    const [searchTitle, setSearchTitle] = useState("");


    const searchMovie = async (title) => {
        const response = await fetch(`${apiUrl}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
    };

    useEffect(() => {
        searchMovie('all');
    }, []);

    return(
        <div className='app'>
            <h1>Softlife MovieLand</h1>

            <div className='search'>
                <input placeholder='Search for movies' value={searchTitle} onChange={(e) => setSearchTitle(e.target.value)}/>
                <img src={SearchIcon} onClick={() => searchMovie(searchTitle)} alt='Search'/>
            </div>

            {movies?.length > 0 ? (
                <div className="container">
                {movies.map((movie) => (
                    <MovieCard movie={movie} />
                ))}
                </div>
            ) : (
                <div className="empty">
                    <h2>No movies found</h2>
                </div>
            )}

            
        </div>

    );
}

export default App;