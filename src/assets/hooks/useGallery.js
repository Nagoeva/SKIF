import React, {useState, useEffect} from 'react';

export default (paths) => {
	const [gallery, setGallery] = useState({ arr:[], obj:{} });

	useEffect(()=>{
		setArray(); setObject();
	}, [paths])


	function setArray(){
		let arr = [];
		for (var key in paths) {
			arr.push(paths[key].default)
		}
		setGallery(prev => ({...prev, arr}));
	}

	function setObject(){
		let obj = {};
		for (var key in paths) {
			let items = key.split('/');
			let name = items[items.length - 1];
			obj[name] = paths[key].default;
		}
		setGallery(prev => ({...prev, obj}));
	}


	return gallery;
};
