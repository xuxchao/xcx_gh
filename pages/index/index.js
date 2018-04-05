Page({
  data: {
    list: [
      {
        id: 'date',
        name: '日期控件',
        url:'date'
      },
      {
        id: 'star',
        name: '星星评分',
        url: 'star'
      },
      {
        id: 'judge',
        name: '验证手机邮箱',
        url: 'validation'
      },
      {
        id: 'sort',
        name: '排序',
        url: 'sort'
      }
    ]
  },
  kindToggle: function (e) {
    var id = e.currentTarget.id, list = this.data.list;
    for (var i = 0, len = list.length; i < len; ++i) {
      if (list[i].id == id) {
        list[i].open = !list[i].open
      } else {
        list[i].open = false
      }
    }
    this.setData({
      list: list
    });
  }
})

