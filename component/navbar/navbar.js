const SysInfo = wx.getSystemInfoSync();
const MenuRect = wx.getMenuButtonBoundingClientRect();

Component({
  properties: {
    text: {
      type: String,
      value: "Wechat"
    },
    back: {
      type: Boolean,
      value: false
    },
    textLeft: {
      type: Boolean,
      value: false
    },
    home: {
      type: Boolean,
      value: false
    }
  },
  data: {
    statusBarHeight: "",
    navigationBarHeight: ""
  },
  attached() {
    this.initLayout();
  },

  methods: {
    initLayout() {
      const statusBarHeight = SysInfo.statusBarHeight;
      const height = (MenuRect.top - statusBarHeight) * 2 + MenuRect.height;
      this.setData({
        statusBarHeight: statusBarHeight + "px",
        navigationBarHeight: `height:${height +
          statusBarHeight}px;line-height:${height}px;font-size:${SysInfo.fontSizeSetting -
          2}pt;`
      });
    },
    backHome: function() {
      console.log("你点击首页");
      let pages = getCurrentPages();
      wx.navigateBack({
        delta: pages.length
      });
    },
    back: function() {
      console.log("你点击返回");
      wx.navigateBack({
        delta: 1
      });
    }
  }
});
