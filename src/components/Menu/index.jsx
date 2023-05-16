import React from 'react'
import s from './style.module.css'
import { NavLink } from 'react-router-dom'

const Menu = ({active}) => {
    const checkClass = active ? s.active : s.menu;
  return (
    <div className={checkClass}>
        <div className={s.blur}/>
        <div className={s.menuContent}>
            <ul>
                <li><NavLink to='/'>Main page</NavLink></li>
                <li><NavLink to='/products'>All products</NavLink></li>
                <li><NavLink to='/sales'>All sales</NavLink></li>
            </ul>
        </div>
    </div>
  )
}

export default Menu