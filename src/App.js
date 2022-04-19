
import './App.css';
import Header from './components/Header/Header'
import SliderImages from './components/SliderImages'
import CardSlider from './components/CardSlider'
import Premieres from './components/Premieres'
import Footer from './components/Footer'
// import AllMovies from './components/AllMovies'
// import SingleMovie from './components/SingleMovie'
import AllMoviesFetch from './components/AllMoviesFetch'
import SingleMovieFetch from './components/SingleMovieFetch'
import Registration from './components/Registration'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div style={{background:"#f5f5f5"}}>
        <Header/>
          <Switch>
            <Route exact path="/movies">
              <AllMoviesFetch/>
            </Route>
            <Route exact path="/register">
              <Registration/>
            </Route>
            <Route exact path="/movie/:movid">
              <SingleMovieFetch/>
            </Route>
            <Route exact path="/">
              <SliderImages/>
              <CardSlider/>
              <Premieres/>
            </Route>
          </Switch>
        <Footer/>
      </div>
    </Router>

  );
}

export default App;
