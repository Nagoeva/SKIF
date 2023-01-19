import React, {useState, useEffect} from 'react';

export default (request)=>{
	const [data, setData] = useState(null);
	const [load, setLoad] = useState(false);
	const [error, setError] = useState('');


	useEffect(()=>{
		setLoad(true);

		request()
			.then( res => setData(res) )
			.catch( err => setError(err) )
			.finally( () => setLoad(false) )
	},[])

	return {data, load, error};
};
