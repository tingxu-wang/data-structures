/*
* 队列
* */
const items = new WeakMap();

class Queue {
	constructor(){
		items.set(this,[]);
	}

	enqueue(element){
		items.get(this).push(element);
	}

	dequeue(){
		return items.get(this).shift();
	}

	front(){
		return items.get(this)[0];
	}

	isEmpty(){
		return items.get(this).length === 0;
	}

	size(){
		return items.get(this).length;
	}

	print(){
		console.log(items.get(this));
	}
}

class PriorityQueue extends Queue{
	constructor(props){
		super(props)
	}

	enqueue(el,pri){
		let item = {el, pri};
		const arr = items.get(this);
		let firstFlag = true;
		for(let i = 0;i < arr.length;i++){
			if(item.pri < arr[i].pri){
				firstFlag = false;
				arr.splice(i,0,item);
				break;
			}
		}
		if(firstFlag){
			arr.push(item);
		}
	}

	print(){
		items.get(this).forEach((item)=>{
			console.log(`${item.el}-${item.pri}`)
		})
	}
}

module.exports = {
	Queue,
	PriorityQueue
};