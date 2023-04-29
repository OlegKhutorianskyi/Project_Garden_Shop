import React from "react";
import s from "./style.module.css";
import { useSelector } from "react-redux";
import AllProductsItem from "../../components/AllProductsItem";
import FiterBar from '../../components/FilterBar'

const AllSalesPage = () => {
  const saleProducts = useSelector((state) => state.products);
  return (
    <div className={s.container}>
      <FiterBar />
      {
        <div className={s.productsList}>
          {saleProducts.filter(({show}) => show)
          .map((item) =>
            item.discont_price 
            ? (<AllProductsItem key={item.id} {...item} />) 
            : ("")
          )}
        </div>
      }
    </div>
  );
};

export default AllSalesPage;
