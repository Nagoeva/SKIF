import React, { useEffect, useState } from 'react';
import scss from './styles.module.scss';
import logo from '@images/logo.png';
import {Link, useLocation} from 'react-router-dom'

const Header = (events) => {
	const {} = events;
	const location = useLocation();
	const [links, setLinks] = useState([
		{value: 'Главная', route: '/'},
		{value: 'Фото и Видео', route: '/photo-video'},
		{value: 'Раздаточные Материалы', route: '/materials'}
	])

	
	return (<>
		<div className={scss.wrap}>
			<div className='container' data-name='cont'>
				<div className={scss.logo}><img src={logo}/></div>
				<nav className={scss.nav}>
					<ul className={scss.nav__list}>
						{links.map(el => (
							<li key={el.route} className={scss.nav__item} >
								<Link to={el.route} data-active={location.pathname === el.route}> {el.value} </Link>
							</li>
						))}
						<li className={scss.nav__item} >
							<a href={'https://forms.gle/KGD6VNfUHtqVzG2Z6'} target='_blank' data-active={false}> Тестирование </a>
						</li>				
					</ul>
				</nav>
			</div>
		</div>
	</>);
}

export default Header;