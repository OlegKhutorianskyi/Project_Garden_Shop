import React from 'react'
import s from './style.module.css'
import { NavLink } from 'react-router-dom'
const Header = () => {
    
  return (
    <div className={s.container}>
        <div className={s.logoContainer}>
            <NavLink to='/'><div className={s.logo}></div></NavLink> 
            <NavLink to='/catalog' ><button>Catalog</button></NavLink>
        </div>
         <div className={s.navContainer}>
            <nav>
                <NavLink to='/'>Main page</NavLink>
                <NavLink to='/products'>All products</NavLink>
                <NavLink to='/sales'>All sales</NavLink>
            </nav>
            <NavLink to='/basket'><div className={s.basketImg}></div></NavLink>
         </div>
        
    </div>
  )
}

export default Header