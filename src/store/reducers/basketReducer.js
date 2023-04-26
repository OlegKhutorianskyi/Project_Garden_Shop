const ADD = "ADD"
const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
const INCREMENT = 'BASKET_INCREMENT';
const DECREMENT = 'BASKET_DECREMENT';
const REMOVE_ALL = 'REMOVE_ALL';



const basket = JSON.parse(localStorage.getItem('basket')) ?? [];
const writeToLocalStorage = (basket) => localStorage.setItem('basket', JSON.stringify(basket))

export const addToBasketAction = (payload) => ({type: ADD, payload});
export const removeProduct = (payload) => ({type: REMOVE_PRODUCT, payload});
export const incrCount = (payload) => ({type: INCREMENT, payload});
export const decrCount = (payload) => ({type: DECREMENT, payload});
export const removeAll = () => ({type: REMOVE_ALL});


export const basketReducer = (state = basket, action) => {
    if (action.type === ADD) {
        const target = state.find(({id}) => id === action.payload)
        if (target === undefined) {
            const newState = [...state, {id: action.payload, count: 1}]
            writeToLocalStorage(newState)
            return newState
        } else {
            target.count++
            writeToLocalStorage(state)
            return [state]
        }
    }else if(action.type === REMOVE_PRODUCT){
        const newState = state.filter(({id}) => id !== action.payload)
        writeToLocalStorage(newState)
        return newState
    }else if(action.type === INCREMENT){
        const target = state.find(({id}) => id === action.payload)
        target.count ++
        writeToLocalStorage(state)
        return [...state]
    }else if(action.type === DECREMENT){
        const target = state.find(({id}) => id === action.payload)
        target.count--
        if (target.count === 0) {
            const newSate = state.filter(item => item !== target)
            writeToLocalStorage(newSate)
            return newSate  
        }
            writeToLocalStorage(state)
        return [...state]
    }else if (action.type === REMOVE_ALL) {
        writeToLocalStorage([])
        return []
    }
    return state
}