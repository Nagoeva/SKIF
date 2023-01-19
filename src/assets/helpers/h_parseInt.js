export default 	function(integer, type='reduction'){
		let result = '';
		let num = '';
		if(typeof integer == 'number') num = integer.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
		if(typeof integer == 'string') num = integer.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
		// num.toLocaleString();
		let num_arr = num.split('.');

		if(type == 'reduction') reduction();
		if(type == 'dots') dots();
		if(type == 'space') space();

		function reduction(){
			if(num_arr.length == 1){
			  result = `${num_arr[0]}`;
			}
			if(num_arr.length == 2){
				if(num_arr[0].length < 3){
					let float = num_arr[1].substr(0, 1);
					num_arr[0] += `.${float}`;
				}
				result = `${num_arr[0]} K`;
			}
			if(num_arr.length == 3){
				if(num_arr[0].length < 3){
					let float = num_arr[1].substr(0, 1);
					num_arr[0] += `.${float}`;
				}
				result = `${num_arr[0]} M`;
			}
		}
		function dots(){ result = num; }
		function space(){
			let space_arr = '';
			if(typeof integer == 'number') space_arr = integer.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
			if(typeof integer == 'string') space_arr = integer.replace(/\B(?=(\d{3})+(?!\d))/g, " ");

			result = space_arr;
		}
		return result;
	};
