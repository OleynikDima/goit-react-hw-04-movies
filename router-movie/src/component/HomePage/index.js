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
        // прокидываем match для статического url
        const {match} = this.props
    return (
        <>
        <h1> Home </h1>
           {films.length > 0 &&  <FilmList  match={match} films = {films} />}
        </>
     )
   }
}

