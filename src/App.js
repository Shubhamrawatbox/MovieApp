import React, { useEffect, useState } from "react";
import Movie from "./component/Movie";


const Feature = 'https://api.themoviedb.org/3/movie/popular?api_key=10efdc68d56b2eef42bf13bf321e36fb&language=en-US&page=1';

const Search = 'https://api.themoviedb.org/3/search/movie?api_key=10efdc68d56b2eef42bf13bf321e36fb&language=en-US&query='
function App() {
  const [movie, setmovie] = useState([]);
  const [searchterm, setsearchterm] = useState('');
  useEffect(() => {
    getMovies(Feature)
  }, [])

  const getMovies=(Api)=>{
    fetch(Api).then(res =>
      res.json()
    ).then(data => setmovie(data.results))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (searchterm) {
      getMovies(Search+searchterm)
    }
    setsearchterm('')
  }
  const handleonchange = (e) => {
    setsearchterm(e.target.value)
  }

  return (
    <>
      <React.StrictMode>
        <header>
          <form onSubmit={handleSubmit}>
            <input type="search" className="search" placeholder="search..." value={searchterm} onChange={handleonchange} />
          </form>
        </header>

        <div className="container">
          {console.log(movie)}
          {movie.map((movies) => {
            return <Movie key={movies.id} {...movies} />
          })}
        </div>
      </React.StrictMode>
    </>

  );

}

export default App;
