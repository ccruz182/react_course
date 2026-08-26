import { configureStore } from "@reduxjs/toolkit";
import { baseAPI } from "../api/baseAPI";
import cartReducer from "./cartSlice";
import authReducer from "./authSlice";

const loadCartFromStorage = () => {
    try {
        const savedCart = localStorage.getItem("cart_candleshop");
        return savedCart ? JSON.parse(savedCart) : undefined;
    } catch (error) {
        console.error("Error saving", error)
    }
}

export const store = configureStore({
    reducer: {
        [baseAPI.reducerPath]: baseAPI.reducer,
        cart: cartReducer,
        auth: authReducer,
    },
    preloadedState: {
        cart: loadCartFromStorage()
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseAPI.middleware)
});