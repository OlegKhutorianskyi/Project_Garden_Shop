import { Route, Routes } from 'react-router-dom';
import Footer from '../Footer';
import Header from '../Header';
import './App.css';
import MainPage from '../../pages/MainPage';
import AllProductsPage from '../../pages/AllProductsPage';
import AllSalesPage from '../../pages/AllSalesPage';
import BasketPage from '../../pages/BasketPage';
import CatalogPage from '../../pages/CatalogPage';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
// import { asyncloadCategoriesAction } from '../../asyncActions/categories';
// import { asyncloadProductsAction } from '../../asyncActions/products';
import CategoriesProductsPage from '../../pages/CategoriesProductsPage';
import ProductDescriptionPage from '../../pages/ProductDescriptionPage';
import { fetchCategories } from '../../store/slice/categoriesSlice';
import { fetchProducts } from '../../store/slice/productsSlice';

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchProducts());
  }, [] )

  return (
    <div className="App">
      <Header/>
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='/catalog' element={<CatalogPage/>}/>
          <Route path='/catalog/:id' element={<CategoriesProductsPage/>}/>
          <Route path='/products' element={<AllProductsPage/>}/>
          <Route path='/products/:id' element={<ProductDescriptionPage/>}/>
          <Route path='/sales' element={<AllSalesPage/>}/>
          <Route path='/basket' element={<BasketPage/>}/>
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
