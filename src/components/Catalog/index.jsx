import React from 'react'
import s from './style.module.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import CategoryItem from '../CategorieItem'
import { PacmanLoader } from 'react-spinners'
import Slider from 'react-slick'


const Catalog = () => {

    const {list, status, error} = useSelector(state => state.category);
    const categorie = list.map(item => <CategoryItem key={item.id} {...item}/>);


    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 2660,
            settings: {
              slidesToShow: 6,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 1920,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 3,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 1640,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 1360,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 980,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 680,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1,
              centerMode: true,
              dots: false
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false
            }
          }
        ]
      };
  
  return (
    <section className={s.container}>
        <div className={s.catalogTitle}>
            <h1 className={s.title}>Catalog</h1>
            <Link to='/catalog'>
                <button className={s.linkToAllCategoriesBtn}>All categories</button>
            </Link>
        </div>
        <div className={s.catalogList}>
        {status === "rejected" && <h2>{error}</h2>}
            {
                status === 'loading' 
                ?   <PacmanLoader
                    color={'green'}
                    loading={true}
                    size={100}
                    /> 
                    
                : 
                <div className={s.sliderConainer}>
                    <Slider {...settings}>
                        {categorie}
                    </Slider>
                </div>
            }
        </div>
        
    </section>
  )
}

export default Catalog