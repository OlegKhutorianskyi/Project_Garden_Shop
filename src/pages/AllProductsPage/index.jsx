import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AllProductsItem from '../../components/AllProductsItem'
import s from './style.module.css'
import FiterBar from '../../components/FilterBar'
import { useParams } from 'react-router-dom'
import { PacmanLoader } from 'react-spinners'
import { useEffect } from 'react'
import { productsResetFiterAction } from '../../store/reducers/productsReducer'

const AllProductsPage = () => {
  
  const {category} = useParams()
  const dispatch = useDispatch()

  useEffect(()=> {
    dispatch(productsResetFiterAction())
  },[])

  const products = useSelector(
    ({products}) => {
      
      if (category === undefined) {
        return products
      }
      
      return products.filter(item => item.categoryId === category)
    }
    )
  // const product = products.map(item => <AllProductsItem key={item.id} {...item}/>)
  return (
    <div className={s.container}>
    <h1 className={s.title}>All products</h1>
      <FiterBar/>
    <div className={s.productsList}>
      {
        products.length === 0 ?
        <PacmanLoader
          color={'green'}
          loading={true}
          size={100}
        /> :
        products.filter(({show}) => show)
        .map(item => <AllProductsItem key={item.id} {...item}/>)
      }
    </div>
    </div>
  )
}

export default AllProductsPage