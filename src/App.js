import './App.css';
import React ,{useState,useEffect}from 'react';
import Header from "./Components/Header";
import Movies from "./Components/Movies";

const API="872e9409";
function App() {
  const [searchValue,setSearchValue] = useState("");
  const [final,setFinal] = useState("");
  const [movies,setMovies]=useState([]);
  const [clicked,setClicked]=useState(false);
  async function getMovie(search){
      const response=await fetch(`http://www.omdbapi.com/?apikey=${API}&s=${search}`);
      const data =response.json();
      return data;
  }

  return (
    <>
    <Header clicked={clicked} setClicked={setClicked} searchValue={searchValue} setSearchValue={setSearchValue} final={final} setFinal={setFinal} movies={movies} setMovies={setMovies} getMovie={getMovie}/>
    <Movies clicked={clicked} setClicked={setClicked} title={final} searchValue={searchValue} setSearchValue={setSearchValue} final={final} setFinal={setFinal} movies={movies} setMovies={setMovies} getMovie={getMovie}/>
    </>
  );
}

export default App;
