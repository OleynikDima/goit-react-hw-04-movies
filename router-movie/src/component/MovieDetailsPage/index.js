import React, { Component } from 'react'
import movieApi from '../Service/fetchApiMovie'
import { Route, Link } from 'react-router-dom'
import Reviews from './Reviews'
import Cast from './Cast'
import MovieCard from './MovieCard'


export default class MovieDetailsPage extends Component {

state={
    film:[],
    id:this.props.match.params.movieId,
}
componentDidMount(){
    const {id} = this.state
    movieApi.fetchGetInfoFilm(id).then(film => this.setState({film}))
}


handleGoBack=()=>{
    console.log('back');
    console.log(this.props.location.state);
     if(this.props.location.state && this.props.location.state.from ){
         this.props.history.push(this.props.location.state.from)
     }
}

render(){
const {film,id} = this.state;
const {match} = this.props;
const {state} = this.props.location;
let stateFrom = state && state.from ? state.from: '/';
return (
      <>
        <button type="button" onClick={this.handleGoBack}> go back</button>

        <MovieCard title={film.title}
            imgUrl={film.imgUrl}
            release_date={film.release_date}
            user_score={film.user_score}
            overview={film.overview}
            genres={film.genres}
        />

        <hr/>

        <div>
            <p> Additional information </p>
            <ul>
                <li> <Link  
                    to={{
                    pathname:`${match.url}/cast`,
                    state:{from:stateFrom}}} > Cast 
                    </Link> </li>

                <li> <Link 
                    to={{pathname:`${match.url}/reviews`, 
                    state:{from:stateFrom}}} > Reviews
                    </Link></li>
            </ul>
            <hr/>
        </div>
                 <Route  
                 path={`${match.path}/cast`}  
                 render={props => <Cast {...props} id={id}  /> } />

                <Route  
                 path={`${match.path}/reviews`}  
                 render={props => <Reviews {...props} id={id}  /> } />
       </> 
       )
    }
}


