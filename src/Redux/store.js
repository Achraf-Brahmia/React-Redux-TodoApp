import { configureStore } from "@reduxjs/toolkit";

import CRUD from './ListSlice'

const store = configureStore({
     reducer: {
         CRUD
     }
});

export default store;