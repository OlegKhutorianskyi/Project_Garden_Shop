import React from 'react'
import s from './style.module.css'
import { Link } from 'react-router-dom'
import BasketItem from '../../components/BasketItem'
import BasketCalculation from '../../components/BasketCalculation'
import { useSelector } from 'react-redux'
import AnimatedPage from '../AnimatedPage'
import { RxDoubleArrowRight } from 'react-icons/rx';
import { ClipLoader } from 'react-spinners'






const BasketPage = () => {

  const {list} = useSelector(state => state.basket)
  const products = useSelector(state => state.products.list)
  const productsStatus = useSelector(state => state.products.status)
  const productsError = useSelector(state => state.products.error)
  
  const data = list.map(item => {
    const product = products.find(({id}) => id === item.id)
    return {...item, ...product}
  })

  return (
    <AnimatedPage>
      <div className={s.container}>
        <h1>Shopping Cart</h1>
        <div className={s.linkToMain}>
          <Link to={'/products'}>Back to the store</Link>
          <span><RxDoubleArrowRight/></span>
        </div>
        <div className={s.basketInfoContainer}>
        {productsStatus === "rejected" && <h2>{productsError}</h2>}
          {
            productsStatus === 'loading'
            ? <ClipLoader
                color={'green'}
                loading={true}
                size={150}
                aria-label='Load Spinner'
                data-testid="loader"
              /> 
            : <>
                <div className={s.basketItemContainer}>
                  {
                    data.map(item => <BasketItem key={item.id} {...item}/>)
                  }
                </div>
                <BasketCalculation/>
              </>
          }
          
        </div>
      </div>
    </AnimatedPage>
  )
}

export default BasketPage