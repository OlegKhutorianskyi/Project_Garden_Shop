import React, { useState } from 'react'
import s from './style.module.css'
import { NavLink } from 'react-router-dom'
import Menu from '../Menu'
import { BsBag } from 'react-icons/bs';



const Header = () => {

  const [menuActive, setMenuActive] = useState(false);
  const chekClass = ({isActive}) => [isActive ? s.active: '', s.link].join(' ');

  menuActive ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto';

  return (
    <div className={s.container}>
        <div className={s.logoContainer}>
            <button className={s.navBurgerBtn} onClick={() => setMenuActive(!menuActive)}><span /></button>
            <NavLink to='/'><div className={s.logo}></div></NavLink>
            <NavLink to='/catalog'>
                <button className={s.catalogBtn}>Catalog</button>
            </NavLink>
        </div>
         <div className={s.navContainer}>
            <nav>
                <NavLink className={chekClass} to='/'>Main page</NavLink>
                <NavLink className={chekClass} to='/products'>All products</NavLink>
                <NavLink className={chekClass} to='/sales'>All sales</NavLink>
            </nav>
            <NavLink className={chekClass} to='/basket'><BsBag/></NavLink>
            <Menu active={menuActive} setActive={setMenuActive}/>
         </div>
        
    </div>
  )
}

export default Header