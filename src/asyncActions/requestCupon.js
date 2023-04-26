import { cuponLoadAction } from "../store/reducers/cuponReducer";




export const asyncloadCuponAction = async(dispatch) => {

    const responce = await fetch('http://localhost:3333/sale/send')
    const data = await responce.json();
    dispatch(cuponLoadAction(data));

}