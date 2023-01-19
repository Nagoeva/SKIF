import {createSlice} from '@reduxjs/toolkit';
import {h_createId} from '@helpers';

const nav = createSlice({
	name: 'navigation',
	initialState: {
		navs: []
	},
	reducers: {
		setNav(state, action){
			state.navs = action.payload;
		},
		addNav(state, action){
			const {route, value, component} = action.payload;

			let newNav = {
				id: h_createId(),
				route,
				value,
				component
			}

			state.navs.push(newNav);
		},
		removeNav(state, action){

		}		
	}
})



export const {addNav, removeNav, setNav} = nav.actions;
export default nav.reducer;