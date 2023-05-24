//this solution requires Node.js on your machine please be sure to install it otherwise run second solution in parent directory.

let arrNumbers = [3, 5 , 7, 6, 9]
		let res = []
		const num3 = (arr) => {
			for (let num of arrNumbers) {
				if (num % 3 === 0) {
					res.push(num)
				};
			};
			console.log(res)
		};

		num3(arrNumbers);