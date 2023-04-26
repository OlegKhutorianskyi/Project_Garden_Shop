// export const fetchUserData = () => {
//     return async (dispatch) => {
//       dispatch({ type: CUPON_DATA_REQUEST });
  
//       try {
//         const response = await fetch(`http://localhost:3333/sale/send`);
//         const userData = await response.json();
  
//         dispatch({
//           type: CUPON_DATA_SUCCESS,
//           payload: userData
//         });
//       } catch (error) {
//         dispatch({
//           type: CUPON_DATA_FAILURE,
//           payload: error.message
//         });
//       }
//     };
//   };
  