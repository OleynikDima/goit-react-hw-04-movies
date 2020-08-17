import React, { Component } from 'react';
import movieApi from '../../Service/fetchApiMovie';

import style from './Cast.module.css'



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
    <ul className={style.list}> {cast.length >0 && cast.map(item => {
         return (<li className={style.item} key={item.id}>
                <img width='100' alt={item.name} src={ item.profile_path  }/>
                <h2 className={style.name}> {item.name}</h2>
                <p className={style.character}> {item.character}  </p>
                </li>
        )
    })
       }
       </ul>
    </>
    )
  }
} 


