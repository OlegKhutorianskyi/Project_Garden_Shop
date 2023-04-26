import React from 'react'
import s from './style.module.css'

import SaleBanner from '../../components/SaleBanner'
import Catalog from '../../components/Catalog'
import SendCupon from '../../components/SendCupon'
import SalesProducts from '../../components/SalesProducts'
const MainPage = () => {
  return (
    <div className={s.container}>
      <SaleBanner/>
      <Catalog/>
      <SendCupon/>
      <SalesProducts/>
    </div>
  )
}

export default MainPage