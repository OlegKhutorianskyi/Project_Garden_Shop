const PRODUCTS_LOAD = 'PRODUCTS_LOAD';
const CUPON_LOAD = 'CUPON_LOAD';
const PRODUCTS_SORT_FILTER = 'PRODUCTS_SORT_FILTER';
const PRODUCTS_RESET_FILTER = 'PRODUCTS_RESET_FILTER';
const UP_PRICE_RANGE = 'UPDATE_PRICE_RANGE';
const DOWN_PRICE_RANGE = 'DOWN_PRICE_RANGE';
const FILTERED_SALES = 'FILTERED_SALES';



export const productsLoadAction = (payload) => ({type: PRODUCTS_LOAD, payload});
export const productsResetFiterAction = (payload) => ({type: PRODUCTS_RESET_FILTER, payload});
export const upPriceRange = (payload) => ({type: UP_PRICE_RANGE, payload});
export const downPriceRange = (payload) => ({type: DOWN_PRICE_RANGE, payload});
export const filteredSalesProducts = (payload) => ({type: FILTERED_SALES, payload});
export const productsSortFilterAction = (payload) => ({type: PRODUCTS_SORT_FILTER, payload});



const byPrice = ({globalPrice}) => globalPrice; 
const byDate = ({updatedAt}) => updatedAt; 



export const productsReducer = (state = [], action) => {
    if (action.type === PRODUCTS_LOAD) {
        
        return action.payload.map(item => ({
            ...item, 
            globalPrice: item.discont_price === null ? item.price : item.discont_price,
            show: true,
            formatAt: new Date(item.updatedAt),
            sale: item.discont_price !== null
        } ))
        
    }
    else if (action.type === PRODUCTS_SORT_FILTER) {
        
        return [...state].sort((a,b) => {
            if (action.payload === 1) {
                return byPrice(a) - byPrice(b)
            } else if(action.payload === 2){
                return byPrice(b) - byPrice(a)
            } else{
                return [...state]
            }
        })
    }else if (action.type === UP_PRICE_RANGE) {

        return state.map(item => ({...item, 
            show: item.globalPrice <= action.payload }))
        }else if (action.type === DOWN_PRICE_RANGE) {

            return state.map(item => ({...item, 
                show: item.globalPrice >= action.payload }))
            }else if (action.type === PRODUCTS_RESET_FILTER) {

            return state.map(item => ({...item, show: true}))        
        }else if (action.type === FILTERED_SALES) {
            return state.map(item => ({...item, 
                show: action.payload ? item.discont_price !== null : true  }))
        }

        
    return state
}
