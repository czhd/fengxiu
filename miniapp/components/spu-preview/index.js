// components/spu-preview/index.js
Component({
	/**
	 * 组件的属性列表
	 */
	properties: {
		data: Object
	},

	/**
	 * 组件的初始数据
	 */
	data: {
		tags: null
	},

	observers: {
		"data": function (data) {
			if (!data) {
				return 
			}
			if (!data.tags) {
				return 
			}
			const tags = data.tags.split("$")
			this.setData({
				tags
			})
		}
	},

	/**
	 * 组件的方法列表
	 */
	methods: {
		autoImg (event) {
			const {width, height} = event.detail
			this.setData({
				width: 340,
				height: height * 340 / width
			})
		}
	}
})
