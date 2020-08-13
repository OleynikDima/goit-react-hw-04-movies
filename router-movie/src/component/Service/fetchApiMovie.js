// import React from 'react'


const API_KEY='?api_key=62d44aec954e70e62cd2b71881d93db4';
const BASE_SITE_URL ='https://api.themoviedb.org/3';
const parametr='/trending/all/day';
const SEARCH_MOVIE = '/search/movie';
const MOVIE='/movie';
const BASE_IMG_URL ='https://image.tmdb.org/t/p/w500';
const LANGUAGE_US = '&language=en-US';
const PAGE='&page=1'
const CREDITS =`/credits`;
const REVIEWS = `/reviews`


//to do prop-types


const fetchGetTrendingFilms =()=>{
    return fetch(BASE_SITE_URL + parametr + API_KEY)
                .then(response=> response.json())
                .then(data => data.results)
                .then(items => items.map(item => {
                    // console.log(item);
                    return {
                        id:item.id,
                        title:item.title || item.original_name,
                        imgUrl:BASE_IMG_URL + item.poster_path
                    }
                }))
                .catch(error => console.log(error))
}


const fetchGetSearchFilm = (query)=>{
    return fetch(BASE_SITE_URL+SEARCH_MOVIE+API_KEY+`&query=${query}`)
      .then(response => response.json())
      .then(data=> data.results)
      .then(items => items.map(item => {
        // console.log(item);
        return {
            id:item.id,
            title:item.title || item.original_name,
            imgUrl:BASE_IMG_URL + item.poster_path
        }
    }))
    .catch(error => console.log(error))
}

const fetchGetInfoFilm = (filmId) => {
    return fetch(BASE_SITE_URL + MOVIE + `/${filmId}` + API_KEY + LANGUAGE_US)
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            return {
                title:data.title,
                release_date:data.release_date.slice(0,4),
                user_score:data.popularity,
                overview:data.overview,
                genres:data.genres.map(genre => genre.name).join(', '),
                cast:'',
                reviw:'',
                imgUrl:BASE_IMG_URL+data.poster_path
            }
        })
}



const fetchGetInfoCast = (filmId) => {
    return fetch(BASE_SITE_URL + MOVIE + `/${filmId}` + CREDITS + API_KEY )
        .then(response => response.json())
        .then(data => data)
        .then(cast => cast.cast.map(item =>{
            // console.log(item);
            return {
                id:item.cast_id,
                character:item.character,
                name:item.name,
                profile_path:BASE_IMG_URL + item.profile_path
            }
        }))
}



const fetchGetInfoReviews = (filmId) => {
    return fetch(BASE_SITE_URL + MOVIE + `/${filmId}` + REVIEWS + API_KEY + LANGUAGE_US + PAGE)
        .then(response => response.json())
        .then(data => {
            return data.results
        })
}


export default {
    fetchGetTrendingFilms,
    fetchGetSearchFilm,
    fetchGetInfoFilm,
    fetchGetInfoCast,
    fetchGetInfoReviews,
};