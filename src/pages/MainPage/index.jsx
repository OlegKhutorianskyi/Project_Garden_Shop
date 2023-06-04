import React from "react";

import SaleBanner from "../../components/SaleBanner";
import Catalog from "../../components/Catalog";
import SendCupon from "../../components/SendCupon";
import SalesProducts from "../../components/SalesProducts";
import AnimatedPage from "../AnimatedPage";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";

const MainPage = () => {
  const { status, error } = useSelector((state) => state.products);
  return (
    <AnimatedPage>
      <div>
        {status === "rejected" ? <h2>{error}</h2> : <SaleBanner />}
        <Helmet>
          <title>Home</title>
          <meta name="description" content="Home page"/>
        </Helmet>
        <Catalog />
        <SendCupon />
        <SalesProducts />
      </div>
    </AnimatedPage>
  );
};

export default MainPage;
