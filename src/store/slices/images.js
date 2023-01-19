import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';


export const fetchImages = createAsyncThunk('images/fetchImages', async (data, {rejectWithValue})=>{
	try{
		const response = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=10');
		if(!response.ok) throw new Error('Server Error');
		const data = await response.json();
		return data;
	}
	catch(err){ 
		return rejectWithValue(err.message);
	}
})


const images = createSlice({
	name: 'images',
	initialState: {
		data: [],
		status: null,
		error: null,
	},
	reducers: {
		setImages(state, action){
			const data = action.payload;
			state.data = data;
		}
	},
	extraReducers: {
		[fetchImages.pending]: (state, action) => {
			state.status = 'loading';
			state.error = null;
		},
		[fetchImages.fulfilled]: (state, action) => {
			const data = action.payload;		
			state.status = 'resolved';
			state.error = null;
			state.data = data;
		},
		[fetchImages.rejected]: (state, action) => {
			state.status = 'rejected';
			state.error = action.payload;
		},
	}
})


export const {setImages} = images.actions;
export default images.reducer;


