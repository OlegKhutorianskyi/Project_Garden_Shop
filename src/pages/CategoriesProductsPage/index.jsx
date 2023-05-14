import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import s from './style.module.css'
import FiterBar from "../../components/FilterBar";
import AllProductsItem from '../../components/AllProductsItem';
import { useEffect } from 'react';
import { resetFilter } from '../../store/slice/productsSlice';


const CategoriesProductsPage = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    
    useEffect(() => {
      dispatch(resetFilter());
    }, [dispatch]);
    
    const {list, status} = useSelector(state => state.category)

    const products = useSelector(state => state.products.list)
      const product = products.filter(item => item.categoryId === +id)
    // const product = products.filter(item => item.categoryId === +id)
    const categories = list.filter(item => item.id === +id)
    


    // const categories = useSelector(state => state.categories)
    //   const category = categories.filter(item => item.id === +id)
        
    
  return (
    <div>
          <h1>{categories.map(item => item.title)}</h1>
          <FiterBar />
      <div className={s.containerItems}>
          {
            product
            .filter(({ show }) => show)
            .map(item => <AllProductsItem key={item.id} {...item}/>)
            }
      </div>
    </div>
  )
}

export default CategoriesProductsPage