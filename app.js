const { init } = require('@cloudbase/wx-cloud-client-sdk')
// 指定云开发环境 ID
wx.cloud.init({
  env: "messagesofposition-8d0ky72c75129",
})
const client = init(wx.cloud)
const models = client.models
App({

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  data: {
    Messages: null,
    Dataweifa: null,
    Datajingfa: null,
    now: null,
    picture: [],
    audio: [],
    video: []
  },

  Req_Res() {
    const that = this;
    const now = Date.now();
    var pic = [];
    var vid = [];
    var aud = [];
    for (var idxx1 = 0; idxx1 < that.data.picture.length; idxx1++) {
      pic.push(that.data.picture[idxx1]);
    }
    for (var idxx2 = 0; idxx2 < that.data.video.length; idxx2++) {
      vid.push(that.data.video[idxx2]);
    }
    for (var idxx3 = 0; idxx3 < that.data.audio.length; idxx3++) {
      aud.push(that.data.audio[idxx3])
    }
    const data = models.xiaoxi.create({
      data: {
        idx: now,
        datajingfa: that.data.Datajingfa,  // datajingfa
        dataweifa: that.data.Dataweifa,  // dataweifa
        messages: that.data.Messages,  // messages
        picture: pic[0],
        audio: aud[0],
        video: vid[0]
      }
    });
    return now;
  },
  onLaunch: function () {

  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {

  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {

  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {

  }
})
