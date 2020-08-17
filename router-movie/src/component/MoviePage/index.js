import React,{Component} from "react"
import movieApi from '../Service/fetchApiMovie'
import FilmList from '../FilmListEditor'
import SearchForm from './SearchForm'
import qeuryString from 'query-string'



export default class MoviePage extends Component{
    state ={
        films:[],
    }

componentDidMount(){
    const {query} = qeuryString.parse(this.props.location.search)
    if (query){
        this.fetchFilmsSearch(query)
        }else {
            console.log('MoviePage query empty');
        }
}

componentDidUpdate(prevProps,prevState){

    const {query:prevQuery} = qeuryString.parse(prevProps.location.search)
    const {query:nextQuery} = qeuryString.parse(this.props.location.search)

    prevQuery !== nextQuery &&  this.fetchFilmsSearch(nextQuery);

}

handleOnSubmit = (searchText) =>{
        this.props.history.push({
                // pathname:this.props.location.pathname,
                ...this.props.location,
                search:`query=${searchText}`
            });
    };

fetchFilmsSearch = (searchQuery) => {
        movieApi.fetchGetSearchFilm(searchQuery)
          .then(films => this.setState({films:films}))
    }

render(){
        const {films} =this.state
        const location =  this.props.location 
        return (
            <>

            <SearchForm onSubmit={this.handleOnSubmit}/>      
              
            { films.length > 0 && <FilmList onLocation={location} films = {films} />}
            
            </>

        )
    }
}