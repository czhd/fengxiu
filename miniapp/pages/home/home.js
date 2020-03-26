import { config } from "../../config/config";
import { Theme } from "../../models/theme";
import { Banner } from "../../models/banner";
import { Category } from "../../models/category";
import { Activity } from "../../models/activity";
import { SpuPaging } from "../../models/spu-paging";

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
		themeH: null
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	async onLoad () {
		await this.initialData()
	},

	async initialSpuBottom () {
		const paging = await SpuPaging.getLatestSpu()
		const data = paging.getMoreData()
		if (!data) {
			return 
		}

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
	onReachBottom: function () {

	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function () {

	}
})