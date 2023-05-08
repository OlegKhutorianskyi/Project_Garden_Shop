import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import s from './style.module.css'
import FiterBar from "../../components/FilterBar";
import AllProductsItem from '../../components/AllProductsItem';


const CategoriesProductsPage = () => {
    const {id} = useParams();

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
          {product.map(item => <AllProductsItem key={item.id} {...item}/>)}
      </div>
    </div>
  )
}

export default CategoriesProductsPage