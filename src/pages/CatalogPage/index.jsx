import React from 'react'
import { useSelector } from 'react-redux'
import CategoryItem from '../../components/CategorieItem'
import s from './style.module.css'
import { PacmanLoader } from 'react-spinners'

const CatalogPage = () => {

  const {list, status} = useSelector(state => state.category)
  const categorie = list.map(item => <CategoryItem key={item.id} {...item}/>)
  return (
    <div>
      <div className={s.catalogTitle}>
            <h1 className={s.title}>Catalog</h1>
      </div>
      <div className={s.container}>
        {
          status === 'loading' ? 
          <div className={s.loaderContainer}>

            <PacmanLoader
              color={'green'}
              loading={true}
              size={100}
            /> 
          </div>
          :
          categorie
        }      
      </div>
    </div>
  )
}

export default CatalogPage