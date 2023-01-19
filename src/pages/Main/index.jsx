import React, { useEffect, useState } from 'react';
import {Navbar, ViewMain, ViewLinkList, GalleryAssets, FSA} from '@/components';
import scss from './styles.module.scss';
import { Routes, Route } from "react-router-dom";
import { useSelector } from 'react-redux';







const Main = (events) => {
	const {} = events;
	const photoVideoData = useSelector(state => state.photoVideoData);
	const materialsData = useSelector(state => state.materialsData);

	const [collagePages, setCollagePages] = useState([photoVideoData, materialsData]);
	useEffect(() => setCollagePages([photoVideoData, materialsData]), [materialsData, photoVideoData])



	console.log(photoVideoData, materialsData);


	return (<>
		<main className={scss.wrap}>
			<Routes>
				<Route path='/' element={<ViewMain/>}/>

				{collagePages.map(pageData => (
					<Route path={pageData.pathname} key={pageData.pathname}>
						<Route index element={<ViewLinkList parentPath={pageData.pathname} dataList={pageData.dataArr}/>}/>
						{pageData.dataArr.map((el, i) => (
							<Route key={i} path={el.pathname} element={el.pathname === 'fsa' ?  <FSA/> : <GalleryAssets pageData={el}/>} />
						))}
					</Route>
				))}

				<Route path='*' element={<ViewMain/>}/>
			</Routes>			
		</main>
	</>);
}

export default Main;