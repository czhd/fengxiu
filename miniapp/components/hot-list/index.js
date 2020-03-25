// components/hot-list/index.js
Component({
	/**
	 * 组件的属性列表
	 */
	properties: {
		banner: Object
	},

	observers: {
		"banner": function (banner) {
			if (!banner) {
				return ;
			}
			if (banner.items.length === 0) {
				return ;
			}
			const left = banner.items.find(b => b.name == 'left')
			const right_top = banner.items.find(b => b.name == 'right-top')
			const right_bottom = banner.items.find(b => b.name == 'right-bottom')

			this.setData({
				left: left,
				rightTop: right_top,
				rightBottom: right_bottom
			})
			
		}
	},

	/**
	 * 组件的初始数据
	 */
	data: {
		left: null,
		rightTop: null,
		rightBottom: null
	},

	/**
	 * 组件的方法列表
	 */
	methods: {

	}
})
