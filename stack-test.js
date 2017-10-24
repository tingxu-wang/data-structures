const Stack = require('./utils/stack');

// 十进制转换
function divideByBasic (decNumber,basic) {
	const stack = new Stack();
	const values = '0123456789ABCDEF';
	let rem,
		result = '';

	while(decNumber > 0){
		rem = Math.floor(decNumber % basic);
		decNumber = Math.floor(decNumber / basic);

		stack.push(rem);
	}

	while(!stack.isEmpty()){
		result += values[stack.pop()];
	}

	return result;
}

console.log(divideByBasic(10,16));