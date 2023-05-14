import React from 'react'
import s from './style.module.css'

import SaleBanner from '../../components/SaleBanner'
import Catalog from '../../components/Catalog'
import SendCupon from '../../components/SendCupon'
import SalesProducts from '../../components/SalesProducts'
import AnimatedPage from '../AnimatedPage'


const MainPage = () => {
  return (
    <AnimatedPage>
      <div className={s.container}>
        <SaleBanner/>
        <Catalog/>
        <SendCupon/>
        <SalesProducts/>
      </div>
    </AnimatedPage>
  )
}

export default MainPage