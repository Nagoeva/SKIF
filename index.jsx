import React from 'react'
import ReactDOM from 'react-dom/client'

// modules
import App from '@/App.jsx';
import {Wrapper} from '@layouts';
import '@/scripts/i18next.js';
import '@/styles/index.scss';


// vars
const root = document.getElementById('root');

ReactDOM.createRoot(root).render(<>
	<Wrapper>
		<App/>
	</Wrapper>
</>)
