import React from 'react'
import { useSelector } from 'react-redux'
import s from './style.module.css'
import SalesItem from '../SalesItem';
import { Link } from 'react-router-dom';
import { PacmanLoader } from 'react-spinners'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const SalesProducts = () => {
  
  const {list, status, error} = useSelector(state => state.products);
  const filterdSaleProducts = list.filter(item => item.discont_price !== null);
  const products = filterdSaleProducts.map(item => <SalesItem key={item.id} {...item}/>);

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
        <div className={s.salesTitle}>
            <Link to='/sales'>
              <h1 className={s.title}>Sales</h1>
            </Link>
        </div>
        <div className={s.salesList}>
        {status === "rejected" && <h2>{error}</h2>}

            {
              status === 'loading' 
              ? <PacmanLoader
                  color={'green'}
                  loading={true}
                  size={100}
                /> 
              : 
              <div className={s.sliderConainer}>

               <Slider {...settings}>

                {products}
              </Slider>
              </div>

              //спробувать вирахувать через window кількість елементів
            }
        </div>
        
    </section>
  )
}

export default SalesProducts