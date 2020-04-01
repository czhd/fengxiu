import { SkuCode } from "./sku-code"
import { CellStatus } from "../core/enum"

class Judger {
	fenceGroup
	pathDict = []

	constructor(fenceGroup) {
		this.fenceGroup = fenceGroup
	}

	initPathDict() {
		this.fenceGroup.skuList.forEach(c => {
			const skuCode = new SkuCode(c.code)
			this.pathDict = this.pathDict.concat(skuCode.totalSegments)
			console.log(this.pathDict)
		})
	}

	judger(cell, x, y) {
		this._changeCellStatus(cell, x, y)
	}

	_changeCellStatus(cell, x, y) {
		if(cell.status === CellStatus.WAITING) {
			this.fenceGroup.fences[x].cells[y].status = CellStatus.SELECTED
		}
		if (cell.status === CellStatus.SELECTED) {
			this.fenceGroup.fences[x].cells[y].status = CellStatus.WAITING
		}
	}
}

export {
	Judger
}