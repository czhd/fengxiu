import { config } from "../config/config"
import { Http } from "../utils/http"

class Theme {
	static homeLocationA = "t-1"
	static homeLocationE = "t-2"
	static homeLocationF = "t-3"
	static homeLocationH = "t-4"

	themes = []

	async getThemes() {
		this.themes = await Http.request({
			url: "theme/by/names",
			data: {
				names: `${Theme.homeLocationA},${Theme.homeLocationE},${Theme.homeLocationF},${Theme.homeLocationH}`
			}
		})
	}

	getHomeLocationA() {
		return this.themes.find(t => t.name === Theme.homeLocationA)
	}

	getHomeLocationE() {
		return this.themes.find(t => t.name === Theme.homeLocationE)
	}

	getHomeLocationF() {
		return this.themes.find(t => t.name === Theme.homeLocationF)
	}

	static getThemeByName() {
		return Theme.getThemeSpu(Theme.homeLocationE)
	}

	static getThemeSpu(name) {
		return Http.request({
			url: `theme/name/${name}/with_spu`
		})
	}


	// static async getHomeLocationA () {
		// return await Http.request({
		// 	url: 'theme/by/names',
		// 	data: {
		// 		names: "t-1"
		// 	}
		// })
	// }

	
}

export {
	Theme
}