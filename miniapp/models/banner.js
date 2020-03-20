import { Http } from "../utils/http";

class Banner {
	static async getHomeLocationB () {
		return await Http.request({
			url: "banner/name",
			data: {
				name: "b-1"
			}
		})
	}
}

export {
	Banner
}