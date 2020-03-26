import { Http } from "../utils/http"

class Paging {
	start
	count
	lock = false
	url
	moreData = true
	accumulator = []

	_getLock () {
		if (this.lock) {
			return false
		}
		this.lock = true
		return true
	}

	_releaseLock () {
		this.lock = false
	}

	constructor (req, count = 10, start = 0) {
		this.count = count
		this.start = start
		this.req = req
		this.url = req.url
	}

	async getMoreData () {
		if (!this.moreData) {
			return 
		}
		if (!this._getLock()) {
			reutrn 
		}
		
		const data = await this._getActualData()
		this._releaseLock()
		return data
	}

	async _getActualData () {
		const req = this._getCurrentReq()
		const paging = await Http.request(req)
		if (!paging) {
			return null
		}
		if (paging.total === 0) {
			return {
				empty: true,
				items: [],
				moreData: false,
				accumulator: []
			}
		}
		this.moreData = this._moreData(paging.total_page, paging.page)
		if (this.moreData) {
			this.start += this.count
		}
		this._accumulate(paging.items)
		return {
			empty: false,
			items: paging.items,
			moreData: this.moreData,
			accumulator: this.accumulator
		}
	}

	_accumulate (items) {
		this.accumulator = this.accumulator.concat(items)
	}

	_moreData (totalPage, pageNum) {
		return pageNum < totalPage - 1
	}

	_getCurrentReq () {
		let url = this.url
		const param = `start=${this.start}&count=${this.count}`
		if (url.includes('?')) {
			url += '&' + param
		} else {
			url += '?' + param
		}
		this.req.url = url
		return this.req
	} 

}

export {
	Paging
}