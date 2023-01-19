import React, {useState, useEffect} from 'react';

export default (defaultValue = '', ops={}) => {
	const {onlyNumbers, regExp, card, separated, tail, noSpace} = ops;
	const [value, setValue] = useState(defaultValue);
	const [returnValue, setReturnValue] = useState(defaultValue)
	const [isEmpty, setEmpty] = useState(true);


	useEffect(()=>{
		value ? setEmpty(false) : setEmpty(true);
	}, [value])

	function onChange(e){
		let value = e.target.value;
		let input = e.target;

		setReturnValue(value);

		if(regExp) value = value.replace(regExp);
		if(onlyNumbers === true) value = value.replace(/\D/g, '');
		if(noSpace) value = value.replace(/\s/g, '');
		if(card) value = cardCode(value);
		if(tail) value = tailCode(value, tail, input);
		if(separated) value = separatedCode(value, separated);
		setValue(value);
	}

	function onFocus(e){
		let value = e.target.value;
		let input = e.target;

		if(tail) tailCode(value, tail, input, 'focus');

	}

	function cardCode(_value){
		let result = _value.replace(/[^\d]/g, '').substring(0,16);
		result = result != '' ? result.match(/.{1,4}/g).join(' ') : '';
		let resultParse = Number(result.replace(/\s/g, ''));
		setReturnValue(resultParse);
		return result;
	}
	function separatedCode(_value, _symbol){
		if(!_symbol || typeof _symbol === 'boolean') _symbol = ' ';

		let result = _value.replace(/[^\d]/g, '');
		result = result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, _symbol);

		let resultParse = result.split(_symbol).join('');
		if(resultParse) resultParse = Number(resultParse);

		setReturnValue(resultParse);

		return result;
	}
	function tailCode(_value, _tail, input, type='change'){
		let result = _value;
		let reg = new RegExp(`${_tail}$`);
		let test = reg.test(_value);
		let focus_pos = _value.length - _tail.length;

		if(type === 'change'){
			if(!test) {
				result = result + _tail;
				let pos = result.length - _tail.length;
				setPos(pos);
			}
			if(_value === _tail) result = '';
		}

		if(type === 'focus') if(test) setPos(focus_pos);

		function setPos(pos){
			setTimeout(()=>{input.setSelectionRange(pos, pos);})
		}

		return result
	}
	const reset = ()=>{
		setValue(defaultValue);
		setReturnValue(defaultValue);
	};
	
	const bind = {
		value,
		onChange,
		onFocus,
	}

	return {value: returnValue, bind, reset, isEmpty}
}
