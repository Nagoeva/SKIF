import React from 'react';
import {Main} from '@pages';
import {Provider} from 'react-redux';
import store from '@/store';

const App = (events) => {
	const {} = events;
	
	return (<>
		<Provider store={store}>
			<Main/>
		</Provider>
	</>);
}

export default App;