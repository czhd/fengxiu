import { combination } from "../utils/util"

class SkuCode {
	code
	spuId
	totalSegments = []
	
	constructor(code) {
		this.code = code
		this._splitToSegment()
	}

	_splitToSegment() {
		//2$1-45#3-9#4-14
		const spuAndSpec = this.code.split('$')
		this.spuId = spuAndSpec[0]
		const specCodeArr = spuAndSpec[1].split('#')
		const length = specCodeArr.length

		for (let i = 1; i <= length; i++) {
			const segments = combination(specCodeArr, i)
			segments = segments.map(s => {
				return s.join('#')
			})
			this.totalSegments = this.totalSegments.concat(segments)
		}
	}
}

export {
	SkuCode
}