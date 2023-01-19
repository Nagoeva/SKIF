import React from 'react';
import scss from './styles.module.scss';


const Navbar = (events) => {
	const {} = events;
	
	return (<>
		<div className={scss.wrap}>
			<ul className={scss.list}>
				<li className={scss.item}>item</li>
				<li className={scss.item}>item</li>
				<li className={scss.item} data-active="true">item</li>
				<li className={scss.item}>item</li>
				<li className={scss.item}>item</li>
				<li className={scss.item}>item</li>
			</ul>
		</div>
	</>);
}

export default Navbar;