import React from 'react';
import avatar from '@images/main-avatar.jpg';
import logo from '@images/main.jpeg';
import bg from '@images/main_bg.jpg';
import doc from '@resources/doc.pdf';


import scss from './styles.module.scss'


const ViewMain = (events) => {
	const {} = events;
	
	return (<>
		<img src={bg} className={scss['main-bg']}/>
		<div className={`${scss.wrap} container`}>
			<div className={scss.logo}>	<img src={logo}/> </div>
			<div className={`${scss.block}`} data-block='info'>
				<h2 className={scss.title}>Северо-кавказский институт повышения квалификации (филиал) краснодарского университета МВД России <br/> Кафедра СТП</h2>
				<a href={doc} download className={scss.link}>Учебный материал для участия в конкурсе: "Лучшая методическая разработка учебного занятия."</a>	
			</div>
			<div className={`${scss.block}`} data-block='avatar'>
				<div className={scss.avatar}>
					<img src={avatar}/>
					<h3 className={scss.avatar__title}>доктор педагогических наук <br/> профессор кафедры специально-технической подготовки <br/> полковник полиции <br/> М.А. Нагоева</h3>
				</div>
			</div>
			<p className={scss.year}>2022</p>
		</div>
	</>);
}

export default ViewMain;
