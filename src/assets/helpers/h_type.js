export default function(event){
	var first_result = Object.prototype.toString.call(event);
	var result = first_result.slice(1, (first_result.length - 1));
	var result_arr = result.split(' ');
	var result_obj = {result, type: result_arr[1],};

	var html = [result_arr[1].slice(0, 4), result_arr[1].slice(result_arr[1].length - 7, result_arr[1].length)];


	if(html && JSON.stringify(html) == '["HTML","Element"]') result_obj.short = 'HTML_el';

	return result_obj;
};
