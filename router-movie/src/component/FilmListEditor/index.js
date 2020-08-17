import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import routes from '../Service/routes'

import style from './ListStyle.module.css'

export default class FilmListEditor extends Component{

state={
    films:[]
}
componentDidMount(){
  console.log('Получили фильмы');
    this.setState({films:this.props.films})
}

componentDidUpdate(prevProps,prevState){
  // console.log('Получили фильмы');
  const prevFilms = prevState.films;
  const nextFilms = this.props.films
  
    if(prevFilms !== nextFilms){
      this.setState({films:nextFilms})
    }
}

render(){
   const {films} = this.state
  const  location = this.props.onLocation

    return ( 
      <>
    { films.length > 0 && (
    <ul>
     {films.map(film =>      
         <li  className ={style.item} 
              key={film.id}> 
             <Link className={style.link} to={{
               pathname:`${routes.moviePage}/${film.id}`,
               state:{from: location,},
               }}>
                  
               {film.title} 
               
             </Link>
        </li>) }
      </ul> )
        }
        </>
      )}
}
