import React from 'react'
import { useSelector } from 'react-redux'
import CategoryItem from '../../components/CategorieItem'
import s from './style.module.css'
import { PacmanLoader } from 'react-spinners'

const CatalogPage = () => {

  const category = useSelector(state => state.categories)
  const categories = category.map(item => <CategoryItem key={item.id} {...item}/>)
  return (
    <div>
      <div className={s.catalogTitle}>
            <h1 className={s.title}>Catalog</h1>
      </div>
      <div className={s.container}>
        {
          category.length === 0 ? 
          <div className={s.loaderContainer}>

            <PacmanLoader
              color={'green'}
              loading={true}
              size={100}
            /> 
          </div>
          :
          categories
        }      
      </div>
    </div>
  )
}

export default CatalogPage