import React from 'react'
import s from './style.module.css'
import { useDispatch } from 'react-redux'
import { decrCount, incrCount, removeProduct } from '../../store/reducers/basketReducer'

const BasketItem = ({id, title, price, discont_price, image, count}) => {
    const dispatch = useDispatch()

  return (
    <div className={s.container}>
        <img src={`http://localhost:3333${image}`} alt={title} />
        <div className={s.itemInfoContainer}>
            <div className={s.titleContainer}>
                <p>{title}</p>
                <div className={s.countItem}>
                    <button className={s.incr} onClick={() => dispatch(decrCount(id))}>-</button>
                    <p>{count}</p>
                    <button className={s.decr}onClick={() => dispatch(incrCount(id))}>+</button>
                </div>
            </div>
            <div className={s.priceContainer}>
                {
                    discont_price ? 
                    <>
                        <p className={s.discount}>{discont_price}$</p>
                        <p className={s.price}>{price}$</p>
                    </>
                    :
                    <>
                        <p className={s.normalPrice}>{price}$</p>
                    </>  
                }
            </div>
        <button className={s.deleteItem} onClick={() => dispatch(removeProduct(id))}>X</button>
        </div>
    </div>
  )
}

export default BasketItem