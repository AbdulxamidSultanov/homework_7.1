import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    value: 0
}

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        incremenet: function(state, action) {
            state.value += 1
        },
        decrement: function(state, action) {
            state.value -= 1
        },
        toZero: function(state) {
            state.value = 0
        },
        addN: function(state, action) {
            state.value += action.payload
        }
    }
})

export default counterSlice.reducer
export const {incremenet, decrement, toZero, addN} = counterSlice.actions