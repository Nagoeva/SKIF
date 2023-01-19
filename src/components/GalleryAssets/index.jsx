import React, { useContext, useEffect } from 'react';
import scss from './styles.module.scss';
import {GalleryContext} from '@contexts'
import { ImDownload } from 'react-icons/im';


const GalleryAssets = (events) => {
	const {pageData, parentPath} = events;
	const {gallery=[], files=[]} = pageData;
	const {openGallery, closeGallery} = useContext(GalleryContext);



	function openFile(data){
		const a = document.createElement('a');
		a.href = data.link;
		a.target = '_blanck';
		a.click();
		a.remove();
	}


	return (<>
		<div className={`${scss.wrap} container`}>
			<ul className={scss.list}>
				{gallery.map((el,i) => (
					<li className={scss.item} key={i}>
						{el?.type === 'image' && <img src={el.link} onClick={() => openGallery({list: gallery.map(img => img.link), index: i})} />}
						{el?.title && <h3 className={scss.title} onClick={() => openGallery({list: gallery.map(img => img.link), index: i})} >{el.title}</h3>}
						{el?.link && <a href={el.link} download className={scss.download} > <ImDownload/> </a>}
					</li>
				))}

				{files.map((el,i) => (
					<li className={scss.item} key={i}>
						{el?.type === 'document' && <div className={scss.ext} onClick={() => openFile(el)}>{el.ext}</div>}
						{el?.title && <h3 className={scss.title} onClick={() => openFile(el)} >{el.title}</h3>}
						{el?.link && <a href={el.link} download className={scss.download} > <ImDownload/> </a>}
					</li>
				))}
			</ul>
		</div>
	</>);
}

export default GalleryAssets;