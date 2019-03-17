// pages/order/index.js
Page({
  data: {
    title: [
      {name: '0', value: '全部', checked: 'true'},
      {name: '1', value: '等待服务', checked: false},
      {name: '2', value: '待评价', checked: false},
      {name: '3', value: '已完成', checked: false},
      {name: '4', value: '已退款', checked: false},
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
     status:1
    })
 },

 /**
  * 生命周期函数--监听页面初次渲染完成
  */
 onReady: function () {
   setTimeout(()=>{
     this.setData({
       status:!1
      })
   },500)
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

  },
  radioChange(e) {
    let index = e.currentTarget.dataset.name
    let title = this.data.title
    title.map(item => {
      if(item.checked){
        return item.checked = !1
      }
    })
    title[index].checked = true;
    this.setData({
      title,
    })
  }
})