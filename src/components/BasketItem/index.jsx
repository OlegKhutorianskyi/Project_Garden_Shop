import React from 'react'
import s from './style.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrCount, incrCount, removeProduct } from '../../store/slice/basketSlice'
import ReactLoading from "react-loading";


const BasketItem = ({id, title, price, discont_price, image, count}) => {
    const dispatch = useDispatch()

    const {status} = useSelector(state => state.cupon);
console.log(status);
    const renderPrice = () => {
        switch (discont_price) {
            case true:
                <>
                    <p className={s.discount}>{discont_price * count}$</p>
                    <p className={s.price}>{price * count}$</p>
                </>
                
            default:
                <>
                     <p className={s.normalPrice}>{(price) * count}$</p>
                </>
        }
        switch (status) {
            case 'loading':
                <ReactLoading
                    type="spinningBubbles"
                    color="#339933"
                    height={"10%"}
                    width={"10%"}
                />
            case 'resolve':
                <>
                     <p className={s.normalPrice}>{(price - price * 5 / 100) * count}$</p>
                </> 
            default:
                alert('server error')    
                
        }
    }

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
                    // discont_price 
                    // ? 
                    // <>
                    //     <p className={s.discount}>{discont_price * count}$</p>
                    //     <p className={s.price}>{price * count}$</p>
                    // </>
                    // :
                    // <>
                    //     <p className={s.normalPrice}>{price * count}$</p>
                    // </>  
                    renderPrice()
                }
            </div>
        <button className={s.deleteItem} onClick={() => dispatch(removeProduct(id))}>X</button>
        </div>
    </div>
  )
}

export default BasketItem