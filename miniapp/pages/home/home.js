import { config } from "../../config/config";
import { Theme } from "../../models/theme";
import { Banner } from "../../models/banner";
import { Category } from "../../models/category";
import { Activity } from "../../models/activity";
import { SpuPaging } from "../../models/spu-paging";
import { Paging } from "../../utils/paging";

// pages/home/home.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		themeA: null,
		themeE: null,
		bannerB: null,
		grid: [],
		activity: null,
		themeSpu: null,
		themeF: null,
		bannerG: null,
		themeH: null,
		spuPaging: null,
		loadType: "loading"
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	async onLoad () {
		await this.initialData()
		await this.initialSpuBottom()
	},

	async initialSpuBottom () {
		const paging =  SpuPaging.getLatestSpu()
		this.data.spuPaging = paging
		const data = await paging.getMoreData()
		if (!data) {
			return 
		}
		
		wx.lin.renderWaterFlow(data.items)
	},

	async initialData () {
		const theme = new Theme()
		await theme.getThemes()
		const themeA =  theme.getHomeLocationA()
		const bannerB = await Banner.getHomeLocationB()
		const grid = await Category.getCategoryGrid()
		const activity = await Activity.getHomeLocationD()
		const themeSpu = await Theme.getThemeByName()
		const themeE =  theme.getHomeLocationE()
		const themeF =  theme.getHomeLocationF()
		const bannerG = await Banner.getHomeLocationG()
		const themeH = theme.getHomeLocationH()
		this.setData({
			themeA,
			bannerB,
			grid,
			activity,
			themeSpu,
			themeE,
			themeF,
			bannerG,
			themeH
		})
	},
 
	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function () {

	},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow: function () {

	},

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide: function () {

	},

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload: function () {

	},

	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh: function () {

	},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom: async function () {
		const data = await this.data.spuPaging.getMoreData()
		if (!data) {
			this.setData({
				loadType: "end"
			})
			return 
		}
		wx.lin.renderWaterFlow(data.items)
		if (!data.moreData) {
			this.setData({
				loadType: "end"
			})
		}
	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function () {

	}
})