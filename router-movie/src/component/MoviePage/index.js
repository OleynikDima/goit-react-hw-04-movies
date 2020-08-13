import React,{Component} from "react"
import movieApi from '../Service/fetchApiMovie'
import FilmList from '../FilmListEditor'



//to do in url = 'qeury=movie'
export default class MoviePage extends Component{
    state ={
        films:[],
        searchQeury:'',
    }

    handleChangeValue=(text)=>{
        this.setState({searchQeury:text.target.value})
    }

    handleOnSubmit = (event) =>{
        event.preventDefault();
        const {searchQeury}=this.state
        this.fetchFilmsSearch(searchQeury)
    }

    fetchFilmsSearch = () => {
        const {searchQeury}=this.state
        movieApi.fetchGetSearchFilm(searchQeury)
          .then(films => this.setState(prevState => {
              return {
                  films:films
              }
          }))
    }

    // componentDidUpdate(prevProps,prevState){
    //     const prevQuery = prevState.query;
    //     const nextQuery = this.state.query;
    //        if(prevQuery !== nextQuery){
    //           console.log('fetch');
    //        }
    // }

    render(){
        const {searchQeury,films} =this.state
        return (
            <>
            <form >
                <input
                placeholder="search film"
                onChange={this.handleChangeValue}
                type="input"
                value={searchQeury}
                />
                <button 
                   onClick={this.handleOnSubmit}
                    type="button">
                    Ok
                </button>
            </form>
            

            
              <ul>
                  {films.length > 0 && <FilmList  films={films}/>}
              </ul>
            </>

        )
    }
}