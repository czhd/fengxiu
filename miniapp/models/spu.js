import { Http } from "../utils/http"

class Spu {
	static getSpuDetail(id) {
		return Http.request({
			url: `spu/id/${id}/detail`
		})
	}
}

export {
	Spu
}