import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../Slices/CounterSlice'

const store = configureStore({
    reducer:{
        counter: counterReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ReturnType<typeof store.dispatch>

export default store;