import { FenceGroup } from "../../models/fence-group"
import { Judger } from "../../models/judger"

// components/readlm/index.js
Component({
	/**
	 * 组件的属性列表
	 */
	properties: {
		spu: Object
	},

	/**
	 * 组件的初始数据
	 */
	data: {
		fences: [],
		judger: Object
	},

	observers: {
		"spu": function (spu) {
			if (!spu) {
				return 
			}	
			const fenceGroup = new FenceGroup(spu)
			fenceGroup.initFences()
			const judger = new Judger(fenceGroup)
			this.data.judger = judger
			// judger._initPathDict()
			this.bindInitFenceGroup(fenceGroup)
		}
	},
	/**
	 * 组件的方法列表
	 */
	methods: {
		bindInitFenceGroup(fenceGroup) {
			this.setData({
				fences: fenceGroup.fences
			})
		},
		onCellTap(event) {
			const cell = event.detail.cell
			const x = event.detail.x
			const y = event.detail.y
			const judger = this.data.judger
			judger.judger(cell, x, y)
			this.setData({
				fences: judger.fenceGroup.fences		
			})
			
		}
	}
})
