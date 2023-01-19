import React from 'react';

import {GalleryProvider} from '@contexts';





const ContextWrap = ({children}) => {
	
	return (<>
		<GalleryProvider>
			{children}
		</GalleryProvider>
	</>);
}

export default ContextWrap;