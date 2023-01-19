import * as navigation  from './nav';
import * as images from './images';
import * as photoVideoData from './photoVideoData';
import * as materialsData from './materialsData';

const reducers = {
	navigation: navigation.default,
	images: images.default,
	photoVideoData: photoVideoData.default,
	materialsData: materialsData.default,
};

const actions = {
	...navigation,
	...images,
	...photoVideoData,
	...materialsData,
	default: ''
};


export {
	reducers,
	actions
};
