import { combineReducers, configureStore } from '@reduxjs/toolkit';
import demoSlice from './demoSlice';

const rootReducer = combineReducers({
    demo: demoSlice
})
const store = configureStore({
    reducer: rootReducer
})
export default store;
