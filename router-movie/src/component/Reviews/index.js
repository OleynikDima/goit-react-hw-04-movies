import React, { Component } from 'react'
import movieApi from '../Service/fetchApiMovie'

export default class Reviews extends Component{
        state={
            id:``,
            reviews:[]
        }
    
    componentDidMount(){
        this.setState({id:this.props.match.params.movieId})
    }
    
    componentDidUpdate(prevProps,prevState){
         const prevId = prevState.id
         const nextId = this.state.id
          if(prevId !== nextId){
            movieApi.fetchGetInfoReviews(nextId).then(reviews =>{this.setState({reviews})} )
          }
    }
      render(){
    const {reviews,id } =this.state
       return (
        <> 
            { reviews.map(item => (
                <>
                 <p> {item.author} </p> 
                 <p> {item.content} </p>
                 </>
                 ))}
        </>
        )
      }
    } 



