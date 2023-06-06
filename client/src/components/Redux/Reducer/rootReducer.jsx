import {
    GET_ALL_PRODUCTS,
    // SEARCH_PRODUCTS,
    // DETAIL_PRODUCTS,
} from "../Actions/actionTypes";

const initialState = {
    // compras: [],
    products: [],
    // productsFilter: [],
};

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_PRODUCTS:
            return {
                ...state,
                products: action.payload,
                // productsFilter: action.payload,
            };

        //   case SEARCH_PRODUCTS:
        //     return {
        //       ...state,
        //       productsFilter: action.payload,
        //     };
        //   case DETAIL_PRODUCTS:
        //     return {
        //       ...state,
        //       detail: [action.payload],
        //     };
        default:
            return state;
    }
}