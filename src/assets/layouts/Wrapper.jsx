import React from 'react';
import '@/styles/index.scss';
import {Provider} from 'react-redux';
import ContextWrap from '@contexts/ContextWrap.jsx';
import store from '@/store';
import {Header} from '@/components';
import {HashRouter } from "react-router-dom";


function Wrapper({children}) {
  return (
		<Provider store={store}>
			<HashRouter>
				<ContextWrap>
					<div className="wrapper">
						<header><Header/></header>
						{children}
					</div>
				</ContextWrap>
			</HashRouter>
		</Provider>
  );
}

export default Wrapper;
