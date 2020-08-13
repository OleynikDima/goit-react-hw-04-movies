import React, { Component } from 'react'
import {Link} from 'react-router-dom'


export default class FilmListEditor extends Component{


render(){
//to do match
    // const match = this.props.match.url;
    // console.log(match);
    return (this.props.films.map(film =>  
        
         <li key={film.id}> 
         
             <Link to={`movie/${film.id}`}> 
               {film.title} 
               {/* <img  width="150" src={film.imgUrl}/>  */}
             </Link>
        </li>) 
    )}
}
