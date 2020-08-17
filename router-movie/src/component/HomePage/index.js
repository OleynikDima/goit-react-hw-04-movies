import React,{ Component } from "react"
// import {NavLink, Link} from 'react-router-dom'
import movieApi from '../Service/fetchApiMovie.js'
import FilmList from '../FilmListEditor'

export default class HomePage extends Component {
    state ={
        films:[],
    }

    componentDidMount(){
        movieApi.fetchGetTrendingFilms().then(films => this.setState({films}))
    }

    render(){
        const {films}= this.state
        const location =  this.props.location.pathname 
    return (
        <>
        <h2>  Trending today </h2>
           {films.length > 0 &&  <FilmList onLocation={location} films = {films} />}
        </>
     )
   }
}

