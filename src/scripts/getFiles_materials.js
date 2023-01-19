// preview
const previewBlanks = import.meta.glob(['@images/materials/blanks.*'], { eager: true });
const previewBooks = import.meta.glob(['@images/materials/books.*'], { eager: true });
const previewCinema = import.meta.glob(['@images/materials/cinema.*'], { eager: true });
const previewPresentations = import.meta.glob(['@images/materials/presentations.*'], { eager: true });
const previewFsa = import.meta.glob(['@images/materials/fsa.*'], { eager: true });
// files
const filesBlanks = import.meta.glob(['@resources/materials/blanks/*.*'], { eager: true });
const filesBooks = import.meta.glob(['@resources/materials/books/*.*'], { eager: true });
const filesCinema = import.meta.glob(['@resources/materials/cinema/*.*'], { eager: true });
const filesPresentations = import.meta.glob(['@resources/materials/presentations/*.*'], { eager: true });
const filesFSA = import.meta.glob(['@resources/materials/FSA/*.*'], { eager: true });
// 



export default ()=>{
	const result = {	
		blanks: {preview: getUrl(previewBlanks), list: setList(filesBlanks)},
		books: {preview: getUrl(previewBooks), list: setList(filesBooks)},
		cinema: {preview: getUrl(previewCinema), list: setList(filesCinema)},
		presentations: {preview: getUrl(previewPresentations), list: setList(filesPresentations)},
		fsa: {preview: getUrl(previewFsa), list: setList(filesFSA)},
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
	let doc_test = /(epub|pdf|doc|docx|rtf|fb2|azw|mobi|lrf|txt|mp4)/.test(ext);
	// let video_test = /(mp4)/.test(ext);
	
	image_test && (result = 'image');
	doc_test && (result = 'document');
	// video_test && (result = 'video');


	return result; 
}