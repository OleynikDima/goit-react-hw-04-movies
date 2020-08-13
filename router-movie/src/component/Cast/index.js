import React, { Component } from 'react'
import movieApi from '../Service/fetchApiMovie'



export default class Cast extends Component{

    state={
        id:``,
        cast:[]
    }

componentDidMount(){
    this.setState({id:this.props.match.params.movieId})
}

componentDidUpdate(prevProps,prevState){
     const prevId = prevState.id
     const nextId = this.state.id
      if(prevId !== nextId){
        movieApi.fetchGetInfoCast(nextId).then(cast =>{this.setState({cast})} )
      }
}


  render(){
const {cast} =this.state
   return (
    <> 
    <ul> {cast.length >0 && cast.map(item => {
         return (<li key={item.id}>
                <img width='100' src={item.profile_path}/>
                <h2> {item.name}</h2>
                <p> {item.character}  </p>
                </li>
        )
    })
       }
       </ul>
    </>
    )
  }
} 


