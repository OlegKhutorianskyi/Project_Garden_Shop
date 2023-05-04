import React from "react";
import s from "./style.module.css";
import { useSelector } from "react-redux";
import AllProductsItem from "../../components/AllProductsItem";
import FiterBar from '../../components/FilterBar'
import { PacmanLoader } from "react-spinners";


const AllSalesPage = () => {
  const {list, status} = useSelector(state => state.products);
  return (
    <div className={s.container}>
      <FiterBar />
      {
        <div className={s.productsList}>
          { status === 'loading' 
          ? <PacmanLoader color={"green"} loading={true} size={100} />
          : list
            .filter(({show}) => show)
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
