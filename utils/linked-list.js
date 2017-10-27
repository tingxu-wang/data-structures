/*
* 链表
* */
const items = new WeakMap();

function Node (el) {
	this.el = el;
	this.next = null;
}

class LinkedList {
	constructor(){
		items.set(this,{
			length : 0,
			head : null
		});
	}

	append(el){
		let node = new Node(el),current;
		let state = items.get(this);
		if(!state.head){
			state.head = node;
		}else{
			current = state.head;
			while (current.next){
				current = current.next;
			}
			current.next = node;
		}
		state.length++;
	}

	insert(position,el){
		let state = items.get(this);
		if(position >= 0 && position < state.length){
			let node = new Node(el),
				current = state.head,
				prev;

			if(position === 0){
				state.head = node;
				node.next = current;
			}else{
				for(let i = 0;i < position;i++){
					prev = current;
					current = current.next;
				}
				prev.next = node;
				node.next = current;
			}
			state.length++;
			return true;
		}else{
			return false;
		}
	}

	removeAt(position){
		let state = items.get(this);
		if(position >= 0 && position < state.length){
			let index = 0,
				current = state.head,
				prev, next;
			if(position === 0){
				state.head = current.next;
			}else{
				while(index++ < position){
					prev = current;
					current = current.next;
					next = current.next;
				}
				prev.next = next;
			}
			state.length--;
			return true;
		}else{
			return false;
		}
	}

	size(){
		console.log(items.get(this).length);
	}

	toString(){
		const head = items.get(this).head;
		let current = head,
			result = '';
		if(current){
			result += `${current.el},`;
			current = current.next;
		}
		return result;
	};
}

module.exports = LinkedList;