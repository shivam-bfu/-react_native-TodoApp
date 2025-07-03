import { configureStore } from '@reduxjs/toolkit';
import SliceReducer from './slice'

export default configureStore ({

    reducer:{
    task:  SliceReducer


    }
})