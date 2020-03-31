import { Matrix } from "./matrix"
import { Fence } from "./fence"

class FenceGroup {
	spu
	skuList = []

	constructor(spu) {
		this.spu = spu
		this.skuList = spu.sku_list
	}

	initFences() {
		const matrix = this._createMatrix(this.skuList)
		const fences = []
		const mt = matrix.transpose()
		console.log(mt)
		mt.forEach(mt => {
			const fence = new Fence(mt)
			fence.init()
			fences.push(fence)
		})
		console.log(fences)

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