export default (value, validations=[], chars=[])=>{
	// export obj
	const mainObj = {valid: true}


  start();

	// ____
	function start(){
		if(validations && validations.length){
			validations.forEach((el, i) => {
				let _name = el.name;
				let _value = el.value;

				if(_name === 'minLength') mainObj.minLength = f_minLength(_value); //проверка на мин. кол-во символов
				if(_name === 'maxLength') mainObj.maxLength = f_minLength(_value); //проверка на макс. кол-во символов
				if(_name === 'notEmpty') mainObj.notEmpty = f_notEmpty(); //проверка на пустоту
				if(_name === 'userName') mainObj.userName = f_userName(); //проверка на userName
				if(_name === 'mail') mainObj.mail = f_mail(); //проверка mail
				if(_name === 'noSpace') mainObj.noSpace = f_noSpace(); //проверка на пробел
				if(_name === 'firstSimbolNoSpace') mainObj.firstSimbolNoSpace = f_firstSimbolNoSpace(); //проверка первого символа на пробел

			});
		}

		if(chars && chars.length){
			chars.forEach((el, i) => {
				let _name = el.name;
				let _char = el.char;
				mainObj[_name] = _char.test(value);
			});
		}

		checkValid(mainObj)
	}
	function checkValid(obj){
		obj.valid = true;
		for (var key in obj) {
			if(key !== 'valid' && !obj[key]) obj.valid = false;
		}
	}

	// funcs
	function f_noSpace(){
		let result = null;
		var reg = /\s/;
		result = reg.test(value);
		return !result;
	}
	function f_notEmpty(){
		return	value ? true : false;
	}
	function f_firstSimbolNoSpace(){
		let result = null;
		var reg = /^\S/;
		result = reg.test(value);
		return result;
	}
	function f_minLength(num){
		let result = null;
		if(typeof num === 'number')	(value.length >= num) ? result = true : result = false;
		else console.error('Validation input - minLength: passed value is not a number');
		return result;
	}
	function f_maxLength(num){
		let result = null;
		if(typeof num === 'number') (value.length <= num) ? result = true : result = false;
		else console.error('Validation input - maxLength: passed value is not a number');
		return result;
	}
	function f_mail(){
		let result = null;
		var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
		result = reg.test(value);
		return result;
	}
	function f_userName(){
		let result = null;
		var reg = /^[a-z0-9_]+$/i;
		result = reg.test(value);
		return result;
	}

	return mainObj
};
