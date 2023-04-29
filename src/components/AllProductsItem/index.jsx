import React from 'react'
import { Link } from 'react-router-dom';
import s from './style.module.css'

const AllProductsItem = ({id, price, title, image, discont_price}) => {

    const link = `/products/${id}`;
    
  return (
    <div className={s.container}>
        
        <Link to={link}>
            <img src={`http://localhost:3333${image}`} alt={title} />
            <div className={s.priceInfo}>
              {
                discont_price 
                ? 
                  <>
                    <p className={s.discount}>{discont_price}$</p>
                    <p className={s.price}>{price}$</p>
                    <p className={s.precent}>-{((price / discont_price - 1) * 100).toFixed(0)}%</p>
                  </>
                :
                  <>
                    <p className={s.normalPrice}>{price}$</p>
                  </>  
              }
                
            </div>
        <p className={s.productsTitle}>{title}</p>
        </Link>
    </div>
  )
}

export default AllProductsItem