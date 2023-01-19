import React, {useEffect, useState} from 'react';
import scss from "./style.module.scss";
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


function Gallery(props) {
	const {list, index, galleryOpened, closeGallery} = props;
	const [swiper, setSwiper] = useState(null);
	const [galleryList, setGalleryList] = useState([]);
	const [isEnd, setIsEnd] = useState(false);
	const [isBeginning, setIsBeginning] = useState(false);


	useEffect(()=>{
		let arr = [];
		if(typeof list === 'object') arr = list;

		setGalleryList(arr);
	}, [list])

	useEffect(()=>{
		if(galleryOpened && swiper) {
			swiper.slideTo(index);
		}
	}, [galleryOpened, swiper])

  return (<>
    <div className={scss.gallery} data-status={galleryOpened} onClick={closeGallery}>
			<div className={scss.gallery__content} onClick={e=>e.stopPropagation()}>
				<Swiper
					onSwiper={setSwiper}
					className={scss.gallery__slider}
					modules={[Navigation, Pagination]}
					pagination={{ clickable: true }}
					onSlideChange={e => {setIsEnd(e.isEnd); setIsBeginning(e.isBeginning);}}
					navigation
				>
					{galleryList.map((item, i) => (
						<SwiperSlide key={i}>
							<img src={item}/>
						</SwiperSlide>
					))}
				</Swiper>
				<div className={scss.arrows}>
					<button data-arrow='prev' onClick={() => swiper.slidePrev()}>❰</button>
					<button data-arrow='next'  onClick={() => swiper.slideNext()}>❱</button>
				</div>
			</div>
		</div>
  </>);
}

export default Gallery;
