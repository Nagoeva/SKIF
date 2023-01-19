export default (array, chunk, type='chunk')=>{

	var result = [];


	if(
		e_type(array).type === "Array"
		&& e_type(chunk).type === "Number"
		&& e_type(type).type === "String"
	){
		if(chunk <= array.length){start()}
		else{
			chunk = array.length;
			start();
		}
	}else{
		console.log('type error');
	}


	// ________funcs_______

	function start(){
		const newArray = [];
		let arr_el_count = Math.floor(array.length / chunk);
		let edge = [...array];

		for(let i=0; i<chunk; i++){
			let arr = null;
			let last = array.length - 1;
			if(i > 0) edge = edge.slice(arr_el_count);

			(i != chunk - 1)
				? newArray.push(edge[0])
				: newArray.push(array[last])
		}

		result = newArray;
	}

	function e_type(event){
		var first_result = Object.prototype.toString.call(event);
		var result = first_result.slice(1, (first_result.length - 1));
		var result_arr = result.split(' ');
		var result_obj = {result, type: result_arr[1],};

		var html = [result_arr[1].slice(0, 4), result_arr[1].slice(result_arr[1].length - 7, result_arr[1].length)];


		if(html && JSON.stringify(html) == '["HTML","Element"]') result_obj.short = 'HTML_el';

		return result_obj;
	}



	return result;

};
