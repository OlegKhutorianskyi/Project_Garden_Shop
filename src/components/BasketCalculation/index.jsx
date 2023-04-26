import React from 'react'
import s from './style.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { removeAll } from '../../store/reducers/basketReducer';

const BasketCalculation = () => {

  const {basket, products} = useSelector(state => state);
  const dispatch = useDispatch();

  const basketDescr = basket.map(item => {
    const product = products.find(({id}) => id === item.id);
    return {...item, ...product}
  })

  const totalPrice = basketDescr.reduce((acc, {count, globalPrice}) => acc + globalPrice  * count, 0).toFixed(2);

  return (
    <div className={s.container}>
      <div className={s.titleContainer}>
        <h2>Order details</h2>
        <button className={s.cleanBtn} onClick={() => dispatch(removeAll(basket))}>Clean Basket</button>
      </div>

      <div className={s.totalSumContainer}>
        <p className={s.titleTotalSum}>Total</p>
        <p className={s.totalSum}>{totalPrice}$</p>
      </div>
      <form className={s.form}>
        <input type="text" placeholder='Phone number'/>
        <button>Order</button>
      </form>
    </div>
  )
}

export default BasketCalculation