import React from 'react'
import { Link } from 'react-router-dom';
import s from './style.module.css'

const SalesItem = ({id, title, image, price, discont_price}) => {
  return (
    
    <div className={s.container}>
        <Link to={`/prdoucts/${id}`}>
            <img src={`http://localhost:3333${image}`} alt={title} />
            <div className={s.priceInfo}>
                <p className={s.discount}>{discont_price}$</p>
                <p className={s.price}>{price}$</p>
                <p className={s.precent}>-{((price / discont_price - 1) * 100).toFixed(0)}%</p>
            </div>
        <p className={s.productsTitle}>{title}</p>
        </Link>
    </div>
  )
}

export default SalesItem