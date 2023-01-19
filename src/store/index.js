import {configureStore} from '@reduxjs/toolkit';
import {reducers} from './slices';

export default configureStore({
	reducer: {...reducers}
})