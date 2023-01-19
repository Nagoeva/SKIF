import React, {useEffect, useState} from 'react';
import scss from './styles.module.scss';
// const images_list = import.meta.globEager('@images/Images&Video_list/**/*.jpg');
// import {useGallery} from '@hooks';
import { useNavigate } from 'react-router-dom';


const ViewLinkList = (events) => {
	const {dataList=[], parentPath} = events;
	const navigate = useNavigate();
	// const gallery = useGallery(images_list);



	function openRoute(item){
		navigate(`/${parentPath}/${item.pathname}`)
	}

	return (<>
		<div className={`${scss.wrap} container`}>
			<ul className={scss.list}>
				{dataList.map((el, i) => (<li className={scss.item} key={i} onClick={() => openRoute(el)}>
					<img src={el.previewURL} />
					<h4 className={scss.item__title}>{el.title}</h4>
				</li>))}
			</ul>
		</div>
	</>);
}

export default ViewLinkList;