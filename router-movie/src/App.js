import React from 'react';
import {Switch, Route,NavLink} from 'react-router-dom'
import Home from './component/HomePage'
import Movie from './component/MoviePage'
import MovieDetailsPage from './component/MovieDetailsPage'
import routes from './routes'

import './App.css';

function App() {
  return (
    <>
    <header>
        <nav>
          <ul>
             <li>
                <NavLink  
                to={routes.home}  
                 > HOME </NavLink>
            </li>
            <br/>
              <li>
                <NavLink  
                  to={routes.moviePage}  
                  > MOVIE </NavLink>
              </li>
          </ul>
        </nav>
    </header>

      <hr/>

    <Switch>
      <Route path={routes.home} exact component={Home} />
      <Route path={routes.moviePage} exact component={Movie}/>
      <Route path={routes.moviePageDatail} component={MovieDetailsPage}/>
      
    </Switch>
  </>
  )
}
export default App;
