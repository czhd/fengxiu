import { Paging } from "../utils/paging";

class SpuPaging {
	static async getLatestSpu() {
		return new Paging ({
			url: 'spu/latest'
		}, 5)
	}
}

export {
	SpuPaging
}