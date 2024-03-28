import { useEffect } from 'react';
import './App.css'
import SearchIcon from './search.svg'

const apiUrl = 'http://www.omdbapi.com/?i=tt3896198&apikey=6075ddc'
const App = () => {

    const searchMovie = async (title) => {
        const response = await fetch(`${apiUrl}&s=${title}`);
        const data = await response.json();
        console.log(data.Search);
    };

    useEffect(() => {
        searchMovie('Shrek');
    }, []);

    return(
        <div className='app'>
            <h1>Softlife MovieLand</h1>
            
            <div className='search'>
                <input type="text" />
            </div>
        </div>

    );
}

export default App;