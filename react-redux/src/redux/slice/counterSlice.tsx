import { createSlice } from "@reduxjs/toolkit";

const initialState = { count: 10 };

export const counterSlice = createSlice({
    name: "counter", initialState, reducers: {
        increment: state => {
            state.count += 1;
        },
        decrement: state => {
            state.count -= 1;
        },
        reset: state => {
            state.count = initialState.count
        }
    }
});

export const { increment, decrement, reset } = counterSlice.actions;
export const counterReducer = counterSlice.reducer;