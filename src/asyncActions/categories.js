import { categoriesLoadAction } from "../store/reducers/categoriesReducer";


export const asyncloadCategoriesAction = async(dispatch) => {
    const responce = await fetch('http://localhost:3333/categories/all')
    const data = await responce.json();
    dispatch(categoriesLoadAction(data));
}
