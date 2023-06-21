
import { applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import thunk from "redux-thunk";
import { persistStore } from "redux-persist";
import persistReducer from "../Reducer/index";

const composeEnhancers = composeWithDevTools(applyMiddleware(thunk));

const store = configureStore({
  reducer: persistReducer,
  middleware: [thunk],
  enhancers: [composeEnhancers],
});
const persistor = persistStore(store);

const exports = { store, persistor };

export default exports;
