import React, {useCallback, useRef} from 'react';


export default (callback, delay = 300) => {
	const timer = useRef();

	const debouncedCallback = useCallback((...args)=>{
		timer.current && clearTimeout(timer.current);

		timer.current = setTimeout(()=>{
			callback(...args)
		}, delay)
	}, [callback, delay])

	return debouncedCallback;
};
