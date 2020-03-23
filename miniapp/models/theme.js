import { config } from "../config/config"
import { Http } from "../utils/http"

class Theme {
	static homeLocationA = "t-1"
	static homeLocationE = "t-2"
	static homeLocationF = "t-3"
	static homeLocationH = "t-4"

	static async getHomeLocationA () {
		// return await Http.request({
		// 	url: 'theme/by/names',
		// 	data: {
		// 		names: "t-1"
		// 	}
		// })
		return Theme.getThemes.find(t => t.name === 't-1')
	}

	static async getThemes()
	{
		return await Http.request({
			url: "theme/by/names",
			data: {
				names: `${Theme.homeLocaltionA},${Theme.homeLocaltionE}`
			}
		})
	}
}

export {
	Theme
}