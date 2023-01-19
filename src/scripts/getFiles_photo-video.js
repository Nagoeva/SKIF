const imageListBloodPreview = import.meta.glob(['@images/photo-video/blood/index.*'], { eager: true });
const imageListFootsPreview = import.meta.glob(['@images/photo-video/foots/index.*'], { eager: true });
const imageListHandsPreview = import.meta.glob(['@images/photo-video/hands/index.*'], { eager: true });
const imageListTracesPreview = import.meta.glob(['@images/photo-video/traces/index.*'], { eager: true });

const imageListBlood = import.meta.glob(['@images/photo-video/blood/*', '!@images/photo-video/blood/index.*'],  { eager: true });
const imageListFoots = import.meta.glob(['@images/photo-video/foots/*', '!@images/photo-video/foots/index.*'],  { eager: true });
const imageListHands = import.meta.glob(['@images/photo-video/hands/*', '!@images/photo-video/hands/index.*'],  { eager: true });
const imageListTraces = import.meta.glob(['@images/photo-video/traces/*', '!@images/photo-video/traces/index.*'],  { eager: true });




export default ()=>{
	const result = {	
		foots: {preview: getUrl(imageListFootsPreview), list: setList(imageListFoots)},
		hands: {preview: getUrl(imageListHandsPreview), list: setList(imageListHands)},
		traces: {preview: getUrl(imageListTracesPreview), list: setList(imageListTraces)},
		blood: {preview: getUrl(imageListBloodPreview), list: setList(imageListBlood)},
	};


	
	function setList(data){
		let result = [];

		for (var key in data) {
			let link = data[key].default;
			let ext = link.split('/').pop().split('.').pop();
			let type = typeTest(ext);
			let title = link.split('/').pop().split('.').reverse().pop();
			let obj = {link, type, title, ext}
			result.push(obj);
		}
		
		return result;
	}

	return result;
};



function getUrl(data){
	let result = null;
	for (var key in data) {
		let url = data[key].default;
		result = url;
	}
	return result;
}


function typeTest(ext){
	let result = null;
	let image_test = /(jpg|jpeg|png|svg|gif|ico)/.test(ext);
	
	image_test && (result = 'image');


	return result; 
}