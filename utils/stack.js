/*
* 栈
* */
const items = new WeakMap();

class Stack {
	constructor(){
		items.set(this,[]);
	}

	push(value){
		items.get(this).push(value);
	}

	pop(){
		return items.get(this).pop();
	}

	peek(){
		const map = items.get(this);
		return map[map.length - 1];
	}

	isEmpty(){
		return items.get(this).length === 0;
	}

	size(){
		return items.get(this).length;
	}

	print(){
		console.log(this.toString())
	}

	toString(){
		return items.get(this).toString();
	}
}

module.exports = Stack;