import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import s from './style.module.css'
import FiterBar from "../../components/FilterBar";
import AllProductsItem from '../../components/AllProductsItem';
import { useEffect } from 'react';
import { resetFilter } from '../../store/slice/productsSlice';
import AnimatedPage from '../AnimatedPage';
import { PacmanLoader } from 'react-spinners';
import { Helmet } from 'react-helmet';



const CategoriesProductsPage = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    
    // useEffect(() => {
    //   let link = document.querySelector("link[rel~='icon']");
    //   if (!link) {
    //     link = document.createElement('link');
    //     link.rel = 'icon';
    //     document.getElementsByTagName('head')[0].appendChild(link);
    //   }
    //   link.href = 'http://surl.li/hqbnt';
    // }, []);
    useEffect(() => {
      dispatch(resetFilter());
    }, [dispatch]);
    
    const {list, status, error} = useSelector(state => state.category)

    const products = useSelector(state => state.products.list)
    const product = products.filter(item => item.categoryId === +id)
    const categories = list.filter(item => item.id === +id)
    const productTitle = categories.map(item => item.title);


  return (
    <AnimatedPage>
      <Helmet>
          <title>{productTitle}</title>
          <meta name="description" content="Products with category"/>
          <link rel = "shortcut icon" href = "favIcon.svg" type = "image/png"/>
      </Helmet>
      <div>
        <h1>{productTitle}</h1>
        <FiterBar />
        <div className={s.containerItems}>
        {status === "rejected" && <h2>{error}</h2>}
            {
              status === 'loading'
              ? <PacmanLoader color={'green'} loading={true} size={100} /> 
              : product
                .filter(({ show }) => show)
                .map(item => <AllProductsItem key={item.id} {...item}/>)
            }
        </div>
      </div>
    </AnimatedPage>
  )
}

export default CategoriesProductsPage