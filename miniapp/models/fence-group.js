import { Matrix } from "./matrix"
import { Fence } from "./fence"

class FenceGroup {
	spu
	skuList = []
	fences = []

	constructor(spu) {
		this.spu = spu
		this.skuList = spu.sku_list
	}

	initFences() {
		const matrix = this._createMatrix(this.skuList)
		const fences = []
		const mt = matrix.transpose()
		mt.forEach(mt => {
			const fence = new Fence(mt)
			fence.init()
			fences.push(fence)
		})
		this.fences = fences
		console.log(this.fences)
	}

	eachCell(callback) {
		for (let i = 0; i < this.fences.length; i++) {
			for (let j = 0; j < this.fences[i].cells.length; j++) {
				const cell = this.fences[i].cells[j]
				callback(cell, i, j)
			}
		}
	}

	_createMatrix(skuList) {
		const m = []
		skuList.forEach(s => {
			m.push(s.specs)
		})
		return new Matrix(m)
	}

	// initFences () {
	// 	const matrix = this._createMatrix(this.skuList)
	// 	const fence = []
	// 	let currentFence = -1
	// 	matrix.each((element, i, j) => {
	// 		if (currentFence !== j) {
	// 			currentFence = j
	// 			//创建fence
	// 			fence[j] = this._createFence()
	// 		}
	// 		fence[j].pushValueTitle(element.value)
	// 	})
	// 	console.log(fence)
	// }

	// _createFence() {
	// 	const fence = new Fence()
	// 	return fence
	// }




}

export {
	FenceGroup
}