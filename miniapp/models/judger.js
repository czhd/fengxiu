import { SkuCode } from "./sku-code"

class Judger {
	fenceGroup
	pathDict = []

	constructor(fenceGroup) {
		this.fenceGroup = fenceGroup
	}

	initPathDict() {
		this.fenceGroup.skuList.forEach(c => {
			const skuCode = new SkuCode(c.code)
		})
	}
}

export {
	Judger
}