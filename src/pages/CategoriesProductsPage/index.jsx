import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import s from './style.module.css'
import AllProductsItem from '../../components/AllProductsItem';

const CategoriesProductsPage = () => {
    const {id} = useParams();

    const products = useSelector(state => state.products)
      const product = products.filter(item => item.categoryId === +id)

    const categories = useSelector(state => state.categories)
      const category = categories.filter(item => item.id === +id)
        
    
  return (
    <div className={s.container}>
        <h1>{category.map(item => item.title)}</h1>
        {product.map(item => <AllProductsItem key={item.id} {...item}/>)}
    </div>
  )
}

export default CategoriesProductsPage