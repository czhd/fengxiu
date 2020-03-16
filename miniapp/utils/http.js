import { config } from "../config/config"
import { promisic } from "./util"

class Http {
	static async request ({url, data, callback, method = 'GET'}) {
		const res = await promisic(wx.request) ({
			url: `${config.baseUrl}${url}`,
			method: method,
			data: data,
			header: {
				appkey: config.appkey
			}
		})
		return res.data
	}
}

export {
	Http
}