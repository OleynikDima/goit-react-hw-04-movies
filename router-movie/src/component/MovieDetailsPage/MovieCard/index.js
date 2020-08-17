import React from 'react'
import style from './MovieCard.module.css'
import PropsTypes from 'prop-types'

const MovieCard = ({title,imgUrl,release_date,user_score,overview,genres}) => {
   
    return (
        <div className={style.container}>
        <img src={imgUrl} alt={title}  width='300px' />
        <div className={style.box_card}>
               <h2> {title} ({release_date}) </h2>
               <p className={style.card_title}> User Score:{user_score}</p>
               <div className={style.card_overview}>
                   <h3 className={style.card_text}>Overview</h3>
                   <p className={style.card_text}> {overview}</p>
               </div>
               <div>
                   <h3 className={style.card_text}>Genres</h3>
                   <p className={style.card_text}>{genres}</p>
               </div>
        </div>
   </div>
    )
}

MovieCard.defaultsProps={
    title:'',
    release_date:``,
    user_score:``,
    overview:``,
    genres:``
}


MovieCard.PropsTypes={
    title:PropsTypes.string.isRequired,
    imgUrl:PropsTypes.string.isRequired,
    release_date:PropsTypes.number,
    user_score:PropsTypes.string,
    overview:PropsTypes.string.isRequired,
    genres:PropsTypes.array
}


export default MovieCard;