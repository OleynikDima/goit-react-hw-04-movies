import React from 'react'
import { Link } from 'react-router-dom'
import routes from '../Service/routes' 


const NotFound =()=>{
    return (
        <div>
            <h1> 404 </h1>
            <p> Неправильно набран адрес или такой страницы на сайте больше не существует </p>
            <p> Перейдите на <Link to={routes.home}> главную </Link> страницу </p>
       </div>
    )
}

export default NotFound;