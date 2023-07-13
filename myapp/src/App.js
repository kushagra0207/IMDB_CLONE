
import './App.css';
import Header from './components/header/Header';
import MovieList from './components/movieList/movieList';
import Home from './pages/home/home';
import Movie from './pages/home/movieDetail/movie';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
// install react responsive carosul for image Carosul
function App() {
  return (
    <div className="App">
      
      <Router>
        <Header />
        <Routes>
          <Route index element={<Home />}></Route>{/** Home page */}
          <Route path="movie/:id" element={<Movie />}></Route> {/** Passing the id to get movie details */}
          <Route path="movies/:type" element={<MovieList />}></Route> {/** Passing the type to get movie details and specifications */}
          <Route path="/*" element={<h1>Error Page</h1>}></Route>{/** Error Page  */}
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;


// npm i react-router-dom for installing package in reactjs and to have access different links at different routes.

// 3 page honge  for route
// movie detail 
// list page
// home page