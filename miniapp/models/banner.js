import { Http } from "../utils/http";
import { Theme } from "./theme";

class Banner {
	static locationA = 'b-1';
	static locationB = 'b-2';

	
	static async getHomeLocationB() {
		return Banner.getLocation(Banner.locationA)
	}

	static async getHomeLocationG() {
		return Banner.getLocation(Banner.locationB)
	}

	static async getLocation (name) {
		return await Http.request({
			url: "banner/name",
			data: {
				name: `${name}`
			}
		})
	}
}

export {
	Banner
}