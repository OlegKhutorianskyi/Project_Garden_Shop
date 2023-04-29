const CUPON_LOAD = 'CUPON_LOAD';

export const cuponLoadAction = (payload) => ({type: CUPON_LOAD, payload});

  export const cuponReducer = (state = [], action) => {
    if (action.type === CUPON_LOAD) {

      return action.payload
    }
    else{

      return state;
    }
    
  };
  // [{...state, user: action.payload, userId: Date.now()}]