import React from "react";
import { useDispatch, useSelector } from "react-redux";
import AllProductsItem from "../../components/AllProductsItem";
import s from "./style.module.css";
import FiterBar from "../../components/FilterBar";
import { PacmanLoader } from "react-spinners";
import { useEffect } from "react";
import { resetFilter } from "../../store/slice/productsSlice";

const AllProductsPage = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetFilter());
  }, []);

  const {list, status} = useSelector(state => state.products);

  // console.log(list);
  return (
    <div className={s.container}>
      <h1 className={s.title}>All products</h1>
      <FiterBar />
      <div className={s.productsList}>
        {status === 'loading' ? (
          <PacmanLoader color={"green"} loading={true} size={100} />
        ) : (
          list
            .filter(({ show }) => show)
            .map((item) => <AllProductsItem key={item.id} {...item} />)
        )}
      </div>
    </div>
  );
};

export default AllProductsPage;
