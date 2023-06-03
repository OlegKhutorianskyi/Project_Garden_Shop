import React, { useState } from "react";
import s from './style.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { removeAll } from '../../store/slice/basketSlice';
import { fetchOrder } from '../../store/slice/orderSlice';
import { ToastContainer, toast } from 'react-toastify';

const BasketCalculation = () => {

  const basket = useSelector(state => state.basket.list);
  const products = useSelector(state => state.products.list);
  const cupon = useSelector(state => state.cupon.list); 
  const [phonError, setPhonError] = useState('')
  const dispatch = useDispatch();

  const basketDescr = basket.map(item => {
    const product = products.find(({id}) => id === item.id);
    return {...item, ...product}
  });

  const totalPrice = basketDescr
    .reduce((acc, {count, globalPrice}) => acc + globalPrice  * count,  0)
    .toFixed(2);
    
    const sended = () => toast(`oreder send!`);
    const noSend = () => toast(`Pleace, write your number`);

    const submitNumber = (e) => {
      e.preventDefault();
      const number = e.target.number.value;
      if (number) {
        sended()
        dispatch(fetchOrder(number))
        dispatch(removeAll(basket))
        window.location.href = '/order'
      } else {
        noSend()
      }
      e.target.reset();
    }
    const checkChange = ({ target }) => {
      const value = +target.value;
      const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
      if (!re.test(String(value).toLowerCase())) {
        setPhonError('no correct phone number')
      } else {
        setPhonError('')
      }
    };

  return (
    <div className={s.container}>
      <div className={s.titleContainer}>
        <h2>Order details</h2>
        <button className={s.cleanBtn} onClick={() => dispatch(removeAll(basket))}>
          Clean Basket
        </button>
      </div>

      <div className={s.totalSumContainer}>
        <p className={s.titleTotalSum}>Total</p>
        <p className={s.totalSum}>{totalPrice}$</p>
      </div>
      {
        cupon.cupon
        ? <div className={s.cuponSaleBlock}>
            <span className={s.cuponSaleSum}>-5%</span>
            <p className={s.cuponSaleInfo}>on products without discount</p>
          </div>
        : ''
      }
      <form className={s.form} onSubmit={submitNumber}>
      <div className={s.validText}>{phonError}</div>
        <input 
        type="number" 
        name='number' 
        placeholder='Phone number'
        onChange={checkChange}
        />
        <button disabled={basket.length === 0}>Order</button>
        <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"/>
      </form>
    </div>
  )
}

export default BasketCalculation