import React, { useState } from 'react'
import s from './style.module.css'
import { useDispatch } from 'react-redux'
import { filterByPrice, filteredSales, sort } from '../../store/slice/productsSlice';
// import FilterRangeByPrice from '../FilterRangeByPrice';


const FiterBar = () => {

    const dispatch = useDispatch();
    const initialValue = {min: 0, max: Infinity};

    const [price, setPrice] = useState(initialValue);
    // console.log(price);
    const [check, setCheck] = useState(!true);
    // const chekSaleList = {sale: !true}
    // console.log(check);

        
    const setMaxPrice = (value) => 
        setPrice(({min}) => ({min, max: value}))
    
    const setMinPrice = (value) => 
        setPrice(({max}) => ({max, min: value}))

    const location = document.location;
    
    const handleFilterMinPrice = ({target}) => {
        const value = +target.value;
        setMinPrice(value)
        dispatch(filterByPrice(price))
    }

    const handleFilterMaxPrice = ({target}) => {
        const value = target.value === '' ? Infinity : +target.value;
        setMaxPrice(value)
        dispatch(filterByPrice(price))
    }
    
    

    const sortOnChange = (e) => {
        dispatch(sort(+e.target.value))
    }
 
    const changeCheck = () => {
        setCheck(!check)
        dispatch(filteredSales(!check))
    }   
    // dispatch(filterByPrice(price))

  return (
    <div className={s.container}>
        {/* <FilterRangeByPrice/> */}
        <div className={s.filterPrice}>
            <p>Price</p>
            <input 
                type="number" 
                name="minPrice" 
                id='minPrice' 
                value={price.min === 0 ? '' : price.min}
                placeholder='min Price' 
                onChange={handleFilterMinPrice}
                // onBlur={() => dispatch(filterByPrice(price))}
                // onChangeCapture={() => dispatch(filterByPrice(price))}
            />
            <input 
                type="number" 
                name="maxPrice" 
                id='maxPrices' 
                value={price.max === Infinity ? '' : price.max}
                placeholder='max Price' 
                onChange={handleFilterMaxPrice}
                // onChangeCapture={() => dispatch(filterByPrice(price))}
            />
        </div>
        <div className={s.filterDiscontProduct}>
            {
                location.pathname === '/sales' 
                ? ''   
                : <>
                    <p>Discounted items</p>
                    <input 
                        type="checkbox" 
                        checked={check} 
                        onChange={changeCheck}
                    /> 
                </>
                
            }
        </div>
        <div className={s.sortProduct}>
            <p>Sorted</p>
            <select name="sort" id="sort" onChange={sortOnChange}>
                <option value="1">By price up</option>
                <option value="2">By price down</option>
            </select>
        </div>
        {/* <button onClick={() => (setPrice({min: 0, max: Infinity}))}>reset filters</button> */}
    </div>
  )
}

export default FiterBar