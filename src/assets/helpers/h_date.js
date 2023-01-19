export default function(){
	// unix
	function unixData(ev, type="all"){
		let UNIX_timestamp = ev;

	  let a = new Date(UNIX_timestamp);
		let result = {};
		let months_ru = ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'];
		let months_ru_context = ['Января','Февраля','Марта','Апреля','Мая','Июня','Июля','Августа','Сентября','Октября','Ноября','Декабря'];
		let months_en = ['January','February','March','April','May','June','July','August','September','October','November','December'];

		const num = {
	    year: a.getFullYear(),
	    month: a.getMonth(),
	    date: a.getDate(),
	    hours: a.getHours(),
	    min: a.getMinutes(),
		}


		const str = {
	    year: String(a.getFullYear()),
	    month: String(a.getMonth()).padStart(2, '0'),
	    date: String(a.getDate()).padStart(2, '0'),
	    hours: String(a.getHours()).padStart(2, '0'),
	    min: String(a.getMinutes()).padStart(2, '0'),
		}

		const made = {
			ru:{
				month: months_ru[a.getMonth()],
				context: `${num.date} ${months_ru_context[a.getMonth()]} ${num.year} года, ${str.hours}:${str.min}`,
				contextDateMonthYear: `${num.date} ${months_ru_context[a.getMonth()]} ${num.year} года`,
				contextDateMonth: `${num.date} ${months_ru_context[a.getMonth()]}`,
				contextMonth: months_ru_context[a.getMonth()],
			},
			month: months_en[a.getMonth()],
			fullTime: `${str.hours}:${str.min}`,
			fullDate: `${str.date}.${str.month}.${str.year}`,
			full: `${str.date}.${str.month}.${str.year} ${str.hours}:${str.min}`,
		}


		if(type == 'all') result = {unix: a.getTime(), num, str, made};
	  if(type == "number" || type == "num") result = {...num, unix: a.getTime()};
	  if(type == "string" || type == "str") result = {...str, unix: a.getTime()};
		if(type == 'made') result = {...made, unix: a.getTime()};


		return result;
	};
	// date_diff
	function dateDiff(unix_1, unix_2){
		var date1 = new Date(unix_1);
		var date2 = new Date(unix_2);

		function getDifferenceInDays(date1, date2) {
		  const diffInMs = Math.abs(date2 - date1);
		  return diffInMs / (1000 * 60 * 60 * 24);
		}
		function getDifferenceInHours(date1, date2) {
		  const diffInMs = Math.abs(date2 - date1);
		  return diffInMs / (1000 * 60 * 60);
		}
		function getDifferenceInMinutes(date1, date2) {
		  const diffInMs = Math.abs(date2 - date1);
		  return diffInMs / (1000 * 60);
		}
		function getDifferenceInSeconds(date1, date2) {
		  const diffInMs = Math.abs(date2 - date1);
		  return diffInMs / 1000;
		}

		var days = Math.round(getDifferenceInDays(date1, date2));
		var hours = Math.round(getDifferenceInHours(date1, date2));
		var min = Math.round(getDifferenceInMinutes(date1, date2));
		var sec = Math.round(getDifferenceInSeconds(date1, date2));

		return {days, hours, min, sec}
	}
	// diff_days
	function diffDays(unix_1, unix_2){
		const daysLag = Math.ceil(Math.abs(unix_1 - unix_2) / (1000 * 3600 * 24));

		return daysLag;
	}
	// diff_time
	function diffTime(unix_1, unix_2){
		const diff_mins = dateDiff(unix_1, unix_2).min;

    let hours = Math.trunc(diff_mins/60);
    let min = diff_mins % 60;
		let status = unix_1 > unix_2 ? 'more' : 'less';

		return {
			min, hours, status,
			time: `${String(hours).padStart(2, '0')}:${String(min).padStart(2, '0')}`,
			ru: `${hours} ч, ${min} мин`,
		};
	}




	return {
		unixData, diffDays, diffTime, dateDiff
	}
};
