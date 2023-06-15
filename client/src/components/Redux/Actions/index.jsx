import axios from "axios";
import {
  GET_ALL_PRODUCTS,
  GET_ALL_CATEGORIES,
} from "./actionTypes";

export function getAllProducts() {
  return async function (dispatch) {
    try {
      let res = await axios("products");

      return dispatch({ type: GET_ALL_PRODUCTS, payload: res.data });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getAllCategories() {
  return async function (dispatch) {
    try {
      let res = await axios("categories");

      return dispatch({ type: GET_ALL_CATEGORIES, payload: res.data });
    } catch (error) {
      console.log(error);
    }
  };
}

// export function searchProducts(name) {
//   console.log(name);
//   return async function (dispatch) {
//     try {
//       let res = await axios(`products/?name=${name}`);
//       return dispatch({ type: SEARCH_PRODUCTS, payload: res.data });
//     } catch (error) {
//       console.log(error);
//     }
//   };
// }

// export const detailProducts = id => {
//   console.log(id);
//   return async dispatch => {
//     try {
//       let res = await axios(`products/${id}`);
//       return dispatch({
//         type: DETAIL_PRODUCTS,
//         payload: res.data,
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };


// export const createProduct = payload => {
//   return async () => {
//     try {
//       let res = await axios.post(`products/`, payload);
//       return res;
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };

// export const getCollection = payload => {
//   return async dispatch => {
//     try {
//       let res = await axios(`categories`);
//       return dispatch({
//         type: GET_COLLECTIONS,
//         payload: res.data,
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };

// export const modifyProduct = payload => {
//   return async () => {
//     try {
//       let res = await axios.patch(`products`, payload);
//       return res;
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };

// export const createCollection = payload => {
//   return async () => {
//     try {
//       let res = await axios.post(`categories`, payload);
//       return res;
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };


// export const deleteCollection = payload => {
//   return async () => {
//     try {
//       let res = await axios.delete("categories", { data: payload });
//       return res;
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };


// export const getAllOrders = payload => {
//   return async dispatch => {
//     try {
//       let res = await axios(`order`);
//       return dispatch({
//         type: GET_ALL_ORDERS,
//         payload: res.data,
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };

// export const modifyOrders = payload => {
//   return async () => {
//     try {
//       let res = await axios.patch(`order`, payload);
//       return res.data;
//     } catch (error) {
//       alert("Esta mal");
//       console.log(error);
//     }
//   };
// };