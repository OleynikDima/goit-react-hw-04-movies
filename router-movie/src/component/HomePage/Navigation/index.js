import React from 'react'
import {NavLink} from 'react-router-dom'
import routes from '../../Service/routes'
import style from './Navigation.module.css'

const Navigation = ()=> {
    return (
    <header className={style.header}>
        <nav className={style.nav}>
          <ul className={style.list} > 
             <li>
                <NavLink  
                    exact
                    className={style.link} 
                    activeClassName={style['link-active']}
                    to={routes.home} 
                     
                     > HOME </NavLink>
            </li>
            <li>
                <NavLink 
                    className={style.link} 
                    activeClassName={style['link-active']} 
                    to={routes.moviePage}> MOVIE </NavLink>
              </li>
          </ul>
        </nav>
        </header>
    )
}


export default Navigation;