// pages/home/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    open: !1,
    city: [{ f_name: '北京', f_id: "1" }, { f_name: '杭州', f_id: "2" }, { f_name: '上海', f_id: "3" }],
    select_city: "北京",
    status:!1,
    show_title: !0,

    has_c_la_c_banner:1,
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
  // 下拉窗
  kindToggle(){
    let open = !this.data.open
    this.setData({
      open,
    })
  },
  // 选中城市
  onChangeShowState(e){
    let select_city = e.currentTarget.dataset.cityName
    this.setData({
      open:!1,
      select_city,
    })
  },
  shopdetai(){
    console.log(111111111111)
    wx.navigateTo({
      url: "/pages/shop/index",
    })
  }
})