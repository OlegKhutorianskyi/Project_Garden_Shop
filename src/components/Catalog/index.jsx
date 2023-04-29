import React from 'react'
import s from './style.module.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import CategoryItem from '../CategorieItem'
import { PacmanLoader } from 'react-spinners'


const Catalog = () => {

    const category = useSelector(state => state.categories)
    const categories = category.map(item => <CategoryItem key={item.id} {...item}/>)
    
  return (
    <section className={s.container}>
        <div className={s.catalogTitle}>
            <h1 className={s.title}>Catalog</h1>
            <Link to='/catalog'>
                <button className={s.linkToAllCategoriesBtn}>All categories</button>
            </Link>
        </div>
        <div className={s.catalogList}>
            {
                category.length === 0 
                ?
                    <PacmanLoader
                    color={'green'}
                    loading={true}
                    size={100}
                    /> 
                    
                : 
                categories.slice(0,4)
            }
        </div>
        
    </section>
  )
}

export default Catalog