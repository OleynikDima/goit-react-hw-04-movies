import React, { Component } from 'react'
import movieApi from '../Service/fetchApiMovie'
import { Switch, Route, Link } from 'react-router-dom'
import Reviews from '../Reviews'
import Cast from '../Cast'

export default class MovieDetailsPage extends Component {
// console.log(match);
state={
    film:[],
    id:this.props.match.params.movieId,
}
componentDidMount(){
    const {id} = this.state
    movieApi.fetchGetInfoFilm(id).then(film => this.setState({film}))
}


render(){
const {film,id} = this.state
const {match} = this.props

return (
      <>
        <button type="button"> go back</button>
        <div>
             <img src={film.imgUrl} alt={film.title}  width='400px' />
             <div>
                    <h2> {film.title} ({film.release_date}) </h2>
                    <p> User Score:{film.user_score}</p>
                    <div>
                        <h3>Overview</h3>
                        <p> {film.overview}</p>
                    </div>
                    <div>
                        <h3>Genres</h3>
                        <p>{film.genres}</p>
                    </div>
             </div>
        </div>

        <hr/>

        <div>
            <p> Additional information </p>
            <ul>
                <li> <Link id={id} to={`${match.url}/cast`} > Cast </Link> </li>
                <li> <Link id={id} to={`${match.url}/reviews`} > Reviews</Link></li>
            </ul>
             
        </div>
        <Switch>
                 <Route  path={`${match.path}/cast`} component={Cast}/>
                 <Route  path={`${match.path}/reviews`} component={Reviews}/>
       </Switch>
       </> 
       )
    }
}


