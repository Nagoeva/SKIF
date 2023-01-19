import {createSlice} from '@reduxjs/toolkit';
import {h_createId} from '@helpers';
import getMaterials from '@/scripts/getFiles_materials.js'

const materials = getMaterials();


const materialsData = createSlice({
	name: 'materialsData',
	initialState: {
		pathname:'materials',
		dataArr: [
			{
				pathname: 'blanks',
				previewURL: materials.blanks.preview,
				title: 'Бланки',
				files: materials.blanks.list
			},
			{
				pathname: 'books',
				previewURL: materials.books.preview,
				title: 'Книги',
				files: materials.books.list
			},
			{
				pathname: 'cinema',
				previewURL: materials.cinema.preview,
				title: 'Видео',
				files: materials.cinema.list
			},
			{
				pathname: 'presentations',
				previewURL: materials.presentations.preview,
				title: 'Презентации',
				files: materials.presentations.list
			},
			{
				pathname: 'fsa',
				previewURL: materials.fsa.preview,
				title: 'FSA',
				files: materials.fsa.list
			},
		]
	},
	reducers: {}
})



// export const {} = materialsData.actions;
export default materialsData.reducer;