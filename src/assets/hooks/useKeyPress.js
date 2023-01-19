import React, {useState, useEffect} from 'react';

export default (keyTarget) => {
	const [keyPressed, setKeyPressed] = useState(false);


	function downHandler({key}){
		if(key === keyTarget){
		  setKeyPressed(true);
		}
	}
	function upHandler({key}){
		if(key === keyTarget){
			setKeyPressed(false);
		}
	}

	useEffect(()=>{
		window.addEventListener('keydown', downHandler);
		window.addEventListener('keyup', upHandler);

		return
	}, [])


	return keyPressed;
}
