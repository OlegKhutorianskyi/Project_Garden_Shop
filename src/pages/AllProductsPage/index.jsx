import React from "react";
import { useDispatch, useSelector } from "react-redux";
import AllProductsItem from "../../components/AllProductsItem";
import s from "./style.module.css";
import FiterBar from "../../components/FilterBar";
import { PacmanLoader } from "react-spinners";
import { useEffect } from "react";
import { resetFilter } from "../../store/slice/productsSlice";
import AnimatedPage from "../AnimatedPage";
import { Helmet } from "react-helmet";

const AllProductsPage = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetFilter());
  }, [dispatch]);

  const {list, status, error} = useSelector(state => state.products);

  return (
    <AnimatedPage>
      <Helmet>
          <title>All products</title>
          <meta name="description" content="All products"/>
      </Helmet>
      <div className={s.container}>
        <h1 className={s.title}>All products</h1>
        <FiterBar />
        <div className={s.productsList}>
        {status === "rejected" && <h2>{error}</h2>}
          {
            status === 'loading' 
            ? <PacmanLoader color={"green"} loading={true} size={100} />
            : list
                .filter(({ show }) => show)
                .map((item) => <AllProductsItem key={+item.id} {...item} />)
          }
        </div>
      </div>
    </AnimatedPage>
  );
};

export default AllProductsPage;
