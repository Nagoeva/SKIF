export default function(event){
	var result = Object.prototype.toString.call(event);

	if(result === '[object Array]'){ // если event = [];
		let clone = [];
		event.forEach(el => clone.push(el));
		return clone;
	}
	if(result === '[object Object]'){ // если event = {};
		let clone = {};
		for(let key in event){ clone[key] = event[key]}
		return clone;
	}

	if (result === '[object HTMLCollection]') {  // если event = [HTMLCollection]
		let clone = Object.create(HTMLCollection.prototype);
		Array.from(event).forEach((item, i) => clone[i] = item);
		return clone;
	}
	if (result === '[object NodeList]') { // если event = [NodeList]
		let clone = [];
		event.forEach(node => {
			let clone_node = node.cloneNode();
			clone.push(clone_node);
		});

		return clone;
	}
};
