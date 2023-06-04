import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import "./App.css";
import MainPage from "../../pages/MainPage";
import AllProductsPage from "../../pages/AllProductsPage";
import AllSalesPage from "../../pages/AllSalesPage";
import BasketPage from "../../pages/BasketPage";
import CatalogPage from "../../pages/CatalogPage";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import CategoriesProductsPage from "../../pages/CategoriesProductsPage";
import ProductDescriptionPage from "../../pages/ProductDescriptionPage";
import { fetchCategories } from "../../store/slice/categoriesSlice";
import { fetchProducts } from "../../store/slice/productsSlice";
import { AnimatePresence } from "framer-motion";
import NotFoundPage from "../../pages/NotFoundPage";
import OrderSended from "../OrderSended";
import { PacmanLoader } from "react-spinners";
import { Helmet } from "react-helmet";

function App() {
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    let link = document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.getElementsByTagName('head')[0].appendChild(link);
    }
    link.href = 'http://surl.li/hqboz';
  }, []);

  const location = useLocation();

  return (
    <div className="App">
        <Header />
        {status === "loading" && (
          <>
            <Helmet>
              <title>Download...</title>
              <meta name="description" content="Catalog list page"/>
            </Helmet>
            <PacmanLoader color={"green"} loading={true} size={100} />
          </>
        )}
        <div className="main">
          <AnimatePresence mode="wait">
            <Routes key={location.pathname} location={location}>
              <Route path="/" element={<MainPage />} />
              <Route path="/catalog" element={<CatalogPage />} />
              <Route path="/catalog/:id" element={<CategoriesProductsPage />} />
              <Route path="/products" element={<AllProductsPage />} />
              <Route path="/products/:id" element={<ProductDescriptionPage />}/>
              <Route path="/sales" element={<AllSalesPage />} />
              <Route path="/basket" element={<BasketPage />} />
              <Route path="/order" element={<OrderSended />} />
              <Route path="/*" element={<NotFoundPage />} />
            </Routes>
          </AnimatePresence>
        </div>
        <Footer />
      </div>
  );
}

export default App;
