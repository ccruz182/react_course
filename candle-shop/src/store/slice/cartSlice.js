import { createSlice } from "@reduxjs/toolkit";

const saveToLocalStorage = (state) => {
    try {
        localStorage.setItem("cart_candleshop", JSON.stringify(state));
    } catch (error) {
        console.error("Error saving", error)
    }
}

const clearCartLS = () => {
    try {
        localStorage.deleteItem("cart_candleshop");
    } catch (error) {
        console.error("Error saving", error)
    }
}

const initialState = {
    items: [],
    totalQuantity: 0,
    totalAmount: 0
}

const cartSlice = createSlice({
    name: "cart", initialState,
    reducers: {
        addToCart: (state, action) => {
            const { product, quantity = 1 } = action.payload;
            const existingItem = state.items.find(item => item.id === product.id);

            if (existingItem) {
                existingItem.quantity += Number(quantity);
            } else {
                state.items.push({ ...product, quantity });
            }

            state.totalQuantity += Number(quantity);
            state.totalAmount += (product.price * Number(quantity))
            saveToLocalStorage(state);
        },
        clearCart: (state, action) => {
            clearCartLS();
            return initialState
        },
        deleteFromCart: (state, action) => {
            const { productId } = action.payload;
            const existingItem = state.items.find(item => item.id === productId);

            state.totalQuantity -= Number(existingItem.quantity);
            state.totalAmount -= (existingItem.price * Number(existingItem.quantity))
            state.items = state.items.filter(item => item.id !== productId);
            saveToLocalStorage(state);

            return state;
        }
    }
});

export const { addToCart, clearCart, deleteFromCart } = cartSlice.actions;
export default cartSlice.reducer;
