import {createSlice} from '@reduxjs/toolkit';
import {h_createId} from '@helpers';
import getImages from '@/scripts/getFiles_photo-video.js'

const imageList = getImages();

const photoVideoData = createSlice({
	name: 'photoVideoData',
	initialState: {
		pathname:'photo-video',
		dataArr: [
			{
				pathname: 'foot',
				previewURL: imageList.foots.preview,
				title: 'Следы ног',
				gallery: imageList.foots.list
			},
			{
				pathname: 'hand',
				previewURL: imageList.hands.preview,
				title: 'Следы рук',
				gallery: imageList.hands.list
			},
			{
				pathname: 'blood',
				previewURL: imageList.blood.preview,
				title: 'Следы клови',
				gallery: imageList.blood.list
			},
			{
				pathname: 'traces',
				previewURL: imageList.traces.preview,
				title: 'Следы транспортных средств',
				gallery: imageList.traces.list
			},
		]
	},
	reducers: {}
})



// export const {} = photoVideoData.actions;
export default photoVideoData.reducer;