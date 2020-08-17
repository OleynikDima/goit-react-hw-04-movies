import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Home from './component/HomePage'
import Movie from './component/MoviePage'
import MovieDetailsPage from './component/MovieDetailsPage'
import Navigation from './component/HomePage/Navigation'
import NotFound from './component/NotFound'

import routes from './component/Service/routes'
import './App.css';

function App() {
  return (
    <>
    <Navigation/>
      <hr/>

    <Switch>
      <Route path={routes.home} exact component={Home} />
      <Route path={routes.moviePage} exact component={Movie}/>
      <Route path={routes.moviePageDatail} component={MovieDetailsPage}/>
      <Route component={NotFound}/>
      
    </Switch>
  </>
  )
}
export default App;
