import { combineReducers, configureStore } from '@reduxjs/toolkit';
import demoSlice from './demoSlice';
import authSlice from './authSlice';

const rootReducer = combineReducers({
    demo: demoSlice,
    auth: authSlice
})
const store = configureStore({
    reducer: rootReducer
})
export default store;
