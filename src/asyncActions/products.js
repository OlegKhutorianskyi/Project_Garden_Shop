import { productsLoadAction } from "../store/reducers/productsReducer";




export const asyncloadProductsAction = async(dispatch) => {
    const responce = await fetch('http://localhost:3333/products/all')
    const data = await responce.json();
    dispatch(productsLoadAction(data));
}