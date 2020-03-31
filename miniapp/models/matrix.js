class Matrix {
	matrix

	constructor(matrix) {
		this.matrix = matrix
	}

	getRowNum() {
		return this.matrix.length
	}

	getColumnNum(j = 0) {
		return this.matrix[j].length
	}

	// each(callback) {
	// 	for (let j = 0; j < this.getColumnNum(); j++) {
	// 		for (let i = 0; i < this.getRowNum(); i++) {
	// 			const element = this.matrix[i][j]
	// 			callback(element, i, j)
	// 		}
	// 	}
	// }

	transpose() {
		const arr = []
		for (let j = 0; j < this.getColumnNum(); j++) {
			arr[j] = []
			for (let i = 0; i < this.getRowNum(); i++) {
				arr[j][i] = this.matrix[i][j]
			}
		}
		return arr
	}
}

export {
	Matrix
}