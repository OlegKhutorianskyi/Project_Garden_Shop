import React from 'react'
import s from './style.module.css'
import { Link } from 'react-router-dom'
import BasketItem from '../../components/BasketItem'
import BasketCalculation from '../../components/BasketCalculation'
import { useSelector } from 'react-redux'

const BasketPage = () => {
  const {basket, products} = useSelector((state) => state);
  const data = basket.map(item => {
    const product = products.find(({id}) => id === item.id)
    return {...item, ...product}
  })

  return (
    <div className={s.container}>
      <h1>Shopping Cart</h1>
      <div className={s.linkToMain}>
        <Link to={'/products'}>Back to the store</Link>
        <span>{'>'}</span>
      </div>
      <div>
        {
          products.length === 0
          ? <p>Loading...</p>
          : <>
              <div className={s.basketContainer}>
                {
                  data.map(item => <BasketItem key={item.id} {...item}/>)
                }
              </div>
              <BasketCalculation/>
            </>
        }
        
      </div>
    </div>
  )
}

export default BasketPage