import { SkuCode } from "./sku-code"
import { CellStatus } from "../core/enum"
import {SkuPending} from "./sku-pending";

class Judger {
	fenceGroup
	pathDict = []
	skuPending

	constructor(fenceGroup) {
		this.fenceGroup = fenceGroup
		this._initSkuPending()
		this._initPathDict()
	}

	_initSkuPending() {
		this.skuPending = new SkuPending()
	}

	_initPathDict() {
		this.fenceGroup.skuList.forEach(c => {
			const skuCode = new SkuCode(c.code)
			this.pathDict = this.pathDict.concat(skuCode.totalSegments)
		})
	}

	judger(cell, x, y) {
		this._changeCurrentCellStatus(cell, x, y)
		this.fenceGroup.eachCell(this._changeOtherCellStatus)
	}

	_changeOtherCellStatus(cell, x, y) {

	}

	_changeCurrentCellStatus(cell, x, y) {
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