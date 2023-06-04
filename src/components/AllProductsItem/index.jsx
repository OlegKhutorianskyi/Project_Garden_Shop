import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import s from './style.module.css'
import { useDispatch,  } from 'react-redux';
import { add } from '../../store/slice/basketSlice';
import Swal from 'sweetalert2';

const AllProductsItem = ({id, price, title, image, discont_price}) => {
  const dispatch = useDispatch();
  const [itemClassName, setItemClassName] = useState(false);

  const addToBasket = () => {
    dispatch(add(id))
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Product added to cart!',
      showConfirmButton: false,
      timer: 1000
    })
  }
  const link = `/products/${id}`;
    
  return (
    <div
      className={s.container}
      onMouseEnter={() => setItemClassName(true)}
      onMouseLeave={() => setItemClassName(false)}
    >
      <div className={s.imgContainer}>
        <img src={`http://localhost:3333${image}`} alt={title} />
        {itemClassName && (
          <button className={s.addBtn} onClick={() => addToBasket()}>
            add to cart
          </button>
        )}
      </div>
      <Link to={link}>
        <div className={s.priceInfo}>
          {discont_price ? (
            <>
              <p className={s.discount}>{discont_price}$</p>
              <p className={s.price}>{price}$</p>
              <p className={s.precent}>
                -{((price / discont_price - 1) * 100).toFixed(0)}%
              </p>
            </>
          ) : (
            <>
              <p className={s.normalPrice}>{price}$</p>
            </>
          )}
        </div>
        <p className={s.productsTitle}>{title}</p>
      </Link>
    </div>
  );
}

export default AllProductsItem