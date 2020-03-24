//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
    
  },
  getPhoneNumber: res=>{
    console.log(res.detail.encryptedData)
    console.log(res.detail.iv)
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  share: function (e) {
    let temlIds = "SIQkc6-DET0arYAePNSCltlINYVRYmztZ7SdTBocQvk"
    wx.requestSubscribeMessage({
      tmplIds: [temlIds],
      success(res) {
        console.log(res)
        if (res.errMsg == 'requestSubscribeMessage:ok') {
        
          wx.request({
            url: 'http://shijiu.test/index.php/api/messages/subscribe',
            method: 'POST',
            header: {
              token: "fd238bcfd7af74486bd9f94da68107a6"
            },
            success: function (r) {
              console.log(r)
            }
          })
          console.log(1111)
        }
      }
    })
  },
  payment () {
	wx.request({
		url: "https://nineteen.lclook.com/api/orders/payment",
		method: "POST",
		header: {
			token: "51c7ac5e53daf23a973111bb2f8f897f"
		},
		data: {
			order_no: "202003242014357903",
			type: "wechat"
		},
		success (res) {
			console.log(res.data)
			wx.requestPayment({
				timeStamp: res.data.data.timeStamp,
				nonceStr: res.data.data.nonceStr,
				package: res.data.data.package,
				signType: 'MD5',
				paySign: res.data.data.paySign,
				success (res) { 
					console.log(res)
				},
				fail (res) { }
			  })
		}
	})
  },
  pay () {
	wx.request({
		url: "https://nineteen.lclook.com/api/recharges/1/pay",
		method: "POST",
		header: {
			token: "51c7ac5e53daf23a973111bb2f8f897f"
		},
		data: {
			
		},
		success (res) {
			console.log(res)
			wx.requestPayment({
				timeStamp: res.data.data.timeStamp,
				nonceStr: res.data.data.nonceStr,
				package: res.data.data.package,
				signType: 'MD5',
				paySign: res.data.data.paySign,
				success (res) { 
					console.log(res)
					// paySuccess()
				},
				fail (res) { }
			  })
		}
	})
  },
  paySuccess () {
	wx.request({
		url: "https://nineteen.lclook.com/api/recharges/payment",
		method: "POST",
		header: {
			token: "51c7ac5e53daf23a973111bb2f8f897f"
		},
		data: {
			order_no: "V20200324184851542"
		},
		success (res) {
			console.log(res.data)
			// wx.requestPayment({
			// 	timeStamp: res.data.data.timeStamp,
			// 	nonceStr: res.data.data.nonceStr,
			// 	package: res.data.data.package,
			// 	signType: 'MD5',
			// 	paySign: res.data.data.paySign,
			// 	success (res) { 
			// 		console.log(res)
			// 	},
			// 	fail (res) { }
			//   })
		}
	})
  }
  
})
